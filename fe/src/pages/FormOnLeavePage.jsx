import React from "react";
import { useEffect } from "react";

import HeaderComponent from "../components/HeaderComponent";
import MenuLeft from "../components/MenuLeft";
import FormOnLeave from "../components/FormOnLeave";

export default function BrowseMenusPage() {

  useEffect(() => {
    document.title = "BrowseMenus";
  }, []);

  return (
    <React.Fragment>
      <HeaderComponent />
      <FormOnLeave />
      <MenuLeft />
    </React.Fragment>
  );
}
