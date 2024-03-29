import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "../public/css/login.css";
import Logo from "../public/image/image_logo_bts.PNG";
import CloseIcon from "@mui/icons-material/Close";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export default function Login() {
  const navigate = useNavigate();
  const data = JSON.parse(localStorage.getItem("token")) !== null;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [btnLogin, setBtnLogin] = useState(false);

  const [forgot, setForgot] = useState(false);
  useEffect(() => {
    if (data) {
      navigate("/app/homepage", { replace: true });
    }
  }, []);

  const [showPassword, setShowPassword] = useState(false);
  const toggleBtn = () => {
    setShowPassword((prevState) => !prevState);
  };

  useEffect(() => {
    document.title = "Login";
  }, []);

  useEffect(() => {
    if (!data && !(username === "") && !(password === "")) {
      const url = "http://localhost:8080/api/users/login";
      fetch(url, {
        method: "POST",
        headers: {
          Accept: "*/*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      })
        .then((response) => response.json())
        .then((jsonData) => {
          if (!data & jsonData.success) {
            localStorage.setItem("token", JSON.stringify(jsonData.token));
          }
          if (jsonData.success) {
            navigate("/app/homepage", { replace: true });
          }
          setForgot(!jsonData.success);
        });
    }
  }, [btnLogin]);

  const handleSubmit = () => {
    setBtnLogin(!btnLogin);
  };

  return (
    !data && (
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
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="text-password">
              <p>Mật khẩu</p>
              <div className="custom-input-password">
                <input
                  type={showPassword ? "text" : "password"}
                  className="rectangle res-pass"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button className="icon-eye" onClick={toggleBtn}>
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </button>
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
    )
  );
}
