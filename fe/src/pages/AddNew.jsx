import React from "react";

import HeaderComponent from "../components/HeaderComponent";
import MenuLeft from "../components/MenuLeft";
import AddNewPersonal from "../components/AddNewPersonal";

export default function Addnew() {
  return (
    <React.Fragment>
      <HeaderComponent />
      <AddNewPersonal />
      <MenuLeft />
    </React.Fragment>
  );
}
