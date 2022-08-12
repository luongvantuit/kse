import React from "react";
import { Link } from "react-router-dom";

import Avt from "../public/image/avt.png";
import Logo from "../public/image/image_logo_bts.PNG";
import Icon0 from "../public/image/ring.png";

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
            <img src={Icon0} alt="icon0" className="header-right-bell" />
          </button>

          <span className="header-right-username">Xin chào</span>
          <button className="btn-avatar">
            <Link to={"/profile"}>
              <img src={Avt} alt="avt" className="header-right-username-img" />
            </Link>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}
