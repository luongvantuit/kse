import React from "react";
import { useEffect } from "react";

import HeaderComponent from "../components/HeaderComponent";
import MenuLeft from "../components/MenuLeft";
import EditPersonal from "../components/EditPersonal";

export default function Addnew() {

  useEffect(() => {
    document.title = "Edit personal";
  }, []);

  return (
    <React.Fragment>
      <HeaderComponent />
      <EditPersonal />
      <MenuLeft />
    </React.Fragment>
  );
}
