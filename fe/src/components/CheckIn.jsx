import React from "react";
import { useState } from "react";

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

  const [img, setImg] = useState(IconCheckIn);
  const handleInput = () => {
    const myFile = document.querySelector("input[type=file]").files[0];
    const urlImage = URL.createObjectURL(myFile);
    setImg(urlImage);
    const reader = new FileReader();
    reader.readAsDataURL(myFile);
    var rawLog = "";
    reader.onload = function (e) {
      rawLog = reader.result;
      console.log(rawLog.split(",")[1]);
    
    };

    // console.log(reader);
    // const token = JSON.parse(localStorage.getItem("token"));
    // const data = new FormData();
    // data.append("myImage", myFile);
    // fetch("http://localhost:8080/api/uploadImage", {
    //     method: "POST",
    //     body: data,
    //     headers: {
    //         "accept": "/",
    //         "Authorization": "Bearer " + token,
    //     }
    // })
    //     .then(response => response.json())
    //     .then(data => console.log(data))
  };

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

          

            <button className="btn-input-img">Chấm công</button>
        </div>
      </div>
    </React.Fragment>
  );
}
