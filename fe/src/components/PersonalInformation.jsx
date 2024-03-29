import React from "react";
import { useState, useEffect, memo } from "react";
import TextField from "@mui/material/TextField";

import "../public/css/personal-information.css";

function PersonalInformation() {
  const [img, setImg] = useState("https://www.pngkit.com/png/full/301-3012694_account-user-profile-avatar-comments-fa-user-circle.png");
  const [profile, setProfile] = useState([]);
  const token = JSON.parse(localStorage.getItem("token"));
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
          setImg('data:image/jpeg;base64,' + data.image.img.data[0]);
        }
      });
  }, [token]);

  useEffect(() => {
    const url = "http://localhost:8080/api/profile/token"

    fetch(url, {
      headers: {
        "Authorization": "Bearer " + token,
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.profile);
        setProfile(data.profile);
      })

  }, [token]);
  const handleInput = () => {
    const myFile = document.querySelector("input[type=file]").files[0];
    const urlImage = URL.createObjectURL(myFile)
    console.log(urlImage);
    setImg(urlImage);
    const token = JSON.parse(localStorage.getItem("token"));
    const data = new FormData();
    data.append("myImage", myFile);
    fetch("http://localhost:8080/api/uploadImage/upload", {
      method: "POST",
      body: data,
      headers: {
        "accept": "*/*",
        "Authorization": "Bearer " + token,
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        fetch("http://127.0.0.1:5000/trainModel", {
          method: "GET",
          headers: {
            "Accept": "*/*",
          },
        })
          .then((response) => response.json())
          .then((jsonData) => {
            alert("Cập nhật ảnh đại diện thành công!")
          })
      })
  }

  return (
    <div className="personal-inf">
      <span className="personal-inf-title">Hồ sơ cá nhân</span>
      <div className="body-personal-inf-two">
        <div className="body-personal-inf-left">
          <div className="btn-personal-avatar">

            <label htmlFor="inputTag" style={{ cursor: "pointer" }}>
              <img
                src={img}
                alt="avt"
                className="body-personal-inf-username-img"
              />
              <input
                type="file"
                name="myImage"
                accept="image/*"
                onChange={handleInput}
                className="input-avt"
                id="inputTag"
              />
            </label>
          </div>

          <div className="personal-inf-left-username">
            <p>Username</p>
            <TextField
              value={profile.length === 0 ? "" : profile[0].username}
              disabled
              variant="standard"
              sx={{
                width: "14rem",
              }}
            />
          </div>

          {/* <div className="personal-inf-left-password">
            <p>Mật khẩu</p>
            <TextField
              variant="standard"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <ModeEditIcon />
                  </InputAdornment>
                ),
              }}
            />
          </div> */}
        </div>

        <div className="personal-inf-right">
          <span className="personal-inf-name">THÔNG TIN CÁ NHÂN</span>
          <div className="body-personal-inf-right">
            <div className="personal-inf-right-left">
              <p className="personal-inf-right-right-id">Họ và tên</p>
              <TextField
                variant="standard"
                disabled
                sx={{
                  width: "16rem",
                  marginTop: "0.4rem",
                }}
                value={profile.length === 0 ? "" : profile[0].fullname}
              />

              <p className="personal-inf-right-right-MAC">Căn cước công dân</p>
              <TextField
                value={profile.length === 0 ? "" : profile[1].CMND}
                variant="standard"
                disabled
                sx={{
                  width: "16rem",
                  marginTop: "0.4rem",
                }}
              />

              <p className="personal-inf-right-right-birth">Ngày sinh</p>
              <TextField
                value={profile.length === 0 ? "" : profile[1].birthday}
                disabled
                variant="standard"
                sx={{
                  width: "16rem",
                  marginTop: "0.4rem",
                }}
              />

              <p className="personal-inf-right-right-room">Phòng ban</p>
              <TextField
                value={profile.length === 0 ? "" : profile[1].department}
                variant="standard"
                disabled
                sx={{
                  width: "16rem",
                  marginTop: "0.4rem",
                }}
              >
              </TextField>
            </div>
          </div>

          <div className="personal-inf-right-right">
            <p className="personal-inf-right-right-gender">Giới tính</p>
            <TextField
              value={profile.length === 0 ? "" : profile[1].gender ? "Nam" : "Nữ"}
              disabled
              variant="standard"
              sx={{
                width: "16rem",
                marginTop: "0.4rem",
              }}
            >
            </TextField>

            <p className="personal-inf-right-right-work">Chế độ làm việc</p>
            <TextField
              value={profile.length === 0 ? "" : profile[1].workingMode}
              disabled
              variant="standard"
              sx={{
                width: "16rem",
                marginTop: "0.4rem",
              }}
            >
            </TextField>
          </div>
        </div>
      </div>

      <div className="personal-inf-bottom">
        <span className="personal-inf-name">THÔNG TIN HỢP ĐỒNG</span>
        <div className="body-personal-inf-bottom">
          <div className="personal-inf-bottom-left">
            <p className="personal-inf-right-right-contract-form">
              Loại hợp đồng
            </p>
            <TextField
              value={profile.length === 0 ? "" : profile[2].nameContract}
              variant="standard"
              disabled
              sx={{
                width: "16rem",
                marginTop: "0.4rem",
              }}
            />
            <p className="personal-inf-right-right-contract-duration">
              Thời hạn hợp đồng
            </p>
            <TextField
              value={profile.length === 0 ? "" : profile[2].contractTerm}
              variant="standard"
              disabled
              sx={{
                width: "16rem",
                marginTop: "0.4rem",
              }}
            >
            </TextField>
          </div>

          <div className="personal-inf-bottom-right">
            <p className="personal-inf-right-right-contract-start-date">
              Ngày kí hợp đồng
            </p>
            <TextField
              value={profile.length === 0 ? "" : profile[2].startContract}
              variant="standard"
              disabled
              sx={{
                width: "16rem",
                marginTop: "0.4rem",
              }}
            />

            <p className="personal-inf-right-right-contract-end-date">
              Ngày hết hạn hợp đồng
            </p>

            <TextField
              value={profile.length === 0 ? "" : profile[2].endContract}
              variant="standard"
              disabled
              sx={{
                width: "16rem",
                marginTop: "0.4rem",
              }}
            />
          </div>
        </div>
      </div>
    </div>

  );
}

export default memo(PersonalInformation);