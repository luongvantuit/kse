import React from "react";
import { useState, useEffect } from "react";

import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

import IconCheckIn from "../public/image/icon-checkin.jpg";

import "../public/css/check-in.css";

const departments = [
  {
    value: "FE",
    label: "FE",
  },
  {
    value: "BE",
    label: "BE",
  },
  {
    value: "Marketing",
    label: "Marketing",
  },
];

export default function CheckIn() {

  const token = JSON.parse(localStorage.getItem("token"));
  const [img, setImg] = useState(IconCheckIn);
  const [userName, setUserName] = useState("");
  const [recognitionStatus, setRecognitionStatus] = useState("Chấm công");
  const handleInput = () => {
    const myFile = document.querySelector("input[type=file]").files[0];
    const urlImage = URL.createObjectURL(myFile);
    setImg(urlImage);
    const reader = new FileReader();
    reader.readAsDataURL(myFile);
    var rawLog = "";
    reader.onload = function (e) {
      rawLog = reader.result;
      // console.log(rawLog.split(",")[1]);

      var b64Img = rawLog.split(',')[1]

      fetch("http://127.0.0.1:5000/verifyFace", {
        method: "POST",
        headers: {
          "Accept": "application/json",
        },
        body: JSON.stringify({ face: b64Img }),
      })
        .then((response) => response.json())
        .then((jsonData) => {
          var statusTag = document.getElementsByClassName('btn-input-img')[0];
          if (jsonData.label === userName) {
            statusTag.style.background = "#86da00";
            setRecognitionStatus("Đã điểm danh!");
            alert("Điểm danh thành công");
            console.log('month', (new Date().getMonth()) + 1);
            fetch("http://localhost:8080/api/publicBoard/updateTimekeeping", {
              method: "PUT",
              headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + token,
              },
              body: JSON.stringify({
                onMonth: (new Date().getMonth()) + 1,
              })
            })
              .then((response) => response.json())
              .then(data => {
                console.log(data);
              })
          }
          else
            alert("Khuôn mặt không chính xác!");
        })

    };
  };

  useEffect(() => {
    const url = "http://localhost:8080/api/uploadImage/one";
    fetch(url, {
      method: "GET",
      headers: {
        "Authorization": "Bearer " + token,
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setUserName(data.image.username);
        }
      });
  }, [token]);

  const [department, setDepartment] = React.useState("FE");
  const handleChange = (event) => {
    setDepartment(event.target.value);
  };

  return (
    <React.Fragment>
      <div className="body-component">
        <div className="body-header">
          <div className="body-header-top">
            <TextField
              variant="outlined"
              select
              value={department}
              onChange={handleChange}
              sx={{
                width: "16rem",
                marginTop: "2rem",
                marginLeft: "2rem",
              }}
            >
              {departments.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
        </div>

        <div className="body-header-file-card">
          <div className="file-input">
            {img && <img src={img} alt="gai xinh" className="input-image" />}

            <input
              type="file"
              name="myImage"
              className="input"
              accept="image/*"
              onChange={handleInput}

            />
          </div>

          <button className="btn-input-img">{recognitionStatus}</button>
        </div>
      </div>
    </React.Fragment>
  );
}
