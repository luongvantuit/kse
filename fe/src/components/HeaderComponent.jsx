import React from "react";
import { Link } from "react-router-dom";

import Logo from "../public/image/image_logo_bts.PNG";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "../public/css/header-component.css";

export default function HeaderComponent() {
  return (
    <React.Fragment>
      <div className="header-component">
        <div className="header-left">
          <img src={Logo} alt="logo" className="header-left-logo" />

          <h6 className="header-left-name">HYBE Co.</h6>
        </div>

        <div className="header-right">
          <button className="btn-bell">
            <NotificationsNoneIcon sx={{ fontSize: "1.5rem" }}/>
          </button>

          <span className="header-right-username">Xin chào</span>
          <button className="btn-avatar">
            <Link to={"/profile"}>
              <AccountCircleIcon sx={{ fontSize: "2.4rem", color: "#AAAAAA" }} />
            </Link>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}
