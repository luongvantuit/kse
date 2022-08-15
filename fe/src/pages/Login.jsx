import React, { useState, useRef } from "react";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";

import "../public/css/login.css";

import Logo from "../public/image/image_logo_bts.PNG";
import CloseIcon from "@mui/icons-material/Close";
//import { styled } from '@mui/material/styles';

export default function Login() {

  const elementUsername = useRef(null);
  const elementPassword = useRef(null);
  const [btnLogin, setBtnLogin] = useState(false);
  const [data, setData] = useState(() => {
    return JSON.parse(localStorage.getItem('token')) !== null;
  });
  const [forgot, setForgot] = useState(false);


  useEffect(() => {
    document.title = "Login";
  }, []);

  useEffect(() => {
    if (!data) {
      const url = "http://222.252.17.200:8081/api/users/login";
      fetch(url, {
        method: "POST",
        headers: {
          Accept: "*/*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: elementUsername.current.value,
          password: elementPassword.current.value,
        }),
      })
        .then((response) => response.json())
        .then((jsonData) => {
          if (!data & jsonData.success) {
            localStorage.setItem("token", JSON.stringify(jsonData.token));
          }
          setData(jsonData.success);
        })
    }
  }, [btnLogin]);

  const handleSubmit = () => {
    setBtnLogin(!btnLogin);
  };

  return (
    <>
      {data ? (
        <Navigate to="/homepage" replace={true} />
      ) : (
        // UI Login
        <React.Fragment>
          <div className="login-background">
            <div className="login-container">
              <img src={Logo} alt="logo" className="header-left-logo" />
              <h6 className="header-left-name">HYBE Co.</h6>
            </div>

            <div className="login-content">
              <div className="text-center">Chào mừng trở lại!</div>

              <div className="text-username">
                <p>Tên đăng nhập/E-mail</p>
                <input
                  type="text"
                  className="rectangle res-user"
                  ref={elementUsername}
                />
              </div>

              <div className="text-password">
                <p>Mật khẩu</p>
                <input
                  type="password"
                  className="rectangle res-pass"
                  ref={elementPassword}
                />

                <div className="text-forgot">
                  <span className="forgot-pd">Quên mật khẩu?</span>
                </div>
              </div>

              <div className="btn-rectangle">
                <button onClick={handleSubmit} className="btn-login">
                  ĐĂNG NHẬP
                </button>
              </div>
              {forgot && (
                <div className="error">
                  <CloseIcon
                    sx={{ fontSize: "16px" }}
                    className="error-icon"
                  ></CloseIcon>

                  <span className="error-text">
                    {" "}
                    Đăng nhập thất bại. Tài khoản hoặc Mật khẩu bị sai!
                  </span>
                </div>
              )}
            </div>
          </div>
        </React.Fragment>
      )}
    </>
  );
}
