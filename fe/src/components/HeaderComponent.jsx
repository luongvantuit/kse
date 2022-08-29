import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState, memo } from "react";

import Logo from "../public/image/image_logo_bts.PNG";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Menu from '@mui/material/Menu';
import "../public/css/header-component.css";

function HeaderComponent() {
  const [img, setImg] = useState(
    "https://www.pngkit.com/png/full/301-3012694_account-user-profile-avatar-comments-fa-user-circle.png"
  );
  const [userName, setUserName] = useState("");
  const token = JSON.parse(localStorage.getItem("token"));
  useEffect(() => {
    const url = "http://localhost:8080/api/uploadImage/one";
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setImg("data:image/jpeg;base64," + data.image.img.data[0]);
          setUserName(data.image.username);
        }
      });
  }, []);

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleCloseProfile = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    
    setOpen(false);
  };

  const handleCloseLogout = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <React.Fragment>
      <div className="header-component">
        <div className="header-left">
          <img src={Logo} alt="logo" className="header-left-logo" />

          <h6 className="header-left-name">HYBE Co.</h6>
        </div>

        <div className="header-right">
          <button className="btn-bell">
            <NotificationsNoneIcon sx={{ fontSize: "1.5rem" }} />
          </button>

          <span className="header-right-username">{userName}</span>
          <button className="btn-avatar">
            <div className="menu-item">
              
              <ListItemText className="menu-name" sx={{ fontSize: "1.4rem" }}>
            
              </ListItemText>
              <ListItemText
                ref={anchorRef}
                id="menu-name"
                aria-controls={open ? "composition-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-haspopup="true"
                onClick={handleClick}
                sx={{ marginLeft: "14px" }}
              >
                <img
                  src={img}
                  alt="avt"
                  className="header-right-username-img"
                />
              </ListItemText>
              <Menu
                open={open}
                onClose={handleClose}
                anchorEl={anchorRef.current}
                role={undefined}
                transition="true"
                disablePortal
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <MenuItem onClick={handleCloseProfile}>
                  <Link to={"/profile"}>Hồ sơ cá nhân</Link>
                  </MenuItem>
                <MenuItem onClick={handleCloseLogout}>Đăng xuất</MenuItem>
                
              </Menu>
            </div>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default memo(HeaderComponent);
