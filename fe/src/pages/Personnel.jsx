import React from "react";

import HeaderComponent from "../components/HeaderComponent";
import MenuLeft from "../components/MenuLeft";
import ListPersonal from "../components/ListPersonal";

export default function Personnel() {
  return (
    <React.Fragment>
      <HeaderComponent />
      <ListPersonal />
      <MenuLeft />
    </React.Fragment>
  );
}
