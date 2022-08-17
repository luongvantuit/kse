import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState, memo } from 'react';

import Logo from "../public/image/image_logo_bts.PNG";
import Icon0 from "../public/image/ring.png";

import "../public/css/header-component.css";

function HeaderComponent() {
  const [img, setImg] = useState("https://www.pngkit.com/png/full/301-3012694_account-user-profile-avatar-comments-fa-user-circle.png");
  const [userName, setUserName] = useState("");
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
          setUserName(data.image.username);
        }
      });
  }, []);
  return (
    <React.Fragment>
      <div className="header-component">
        <div className="header-left">
          <img src={Logo} alt="logo" className="header-left-logo" />

          <h6 className="header-left-name">HYBE Co.</h6>
        </div>

        <div className="header-right">
          <button className="btn-bell">
            <img src={Icon0} alt="icon0" className="header-right-bell" />
          </button>

          <span className="header-right-username">{userName}</span>
          <button className="btn-avatar">
            <Link to={"/profile"}>
              <img src={img} alt="avt" className="header-right-username-img" />
            </Link>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default memo(HeaderComponent);