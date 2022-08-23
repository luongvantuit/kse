import React from "react";
import { useEffect } from "react";

import HeaderComponent from "../components/HeaderComponent";
import MenuLeft from "../components/MenuLeft";
import BrowseMenus from "../components/BrowseMenus";

export default function BrowseMenusPage() {

  useEffect(() => {
    document.title = "BrowseMenus";
  }, []);

  return (
    <React.Fragment>
      <HeaderComponent />
      <BrowseMenus />
      <MenuLeft />
    </React.Fragment>
  );
}
