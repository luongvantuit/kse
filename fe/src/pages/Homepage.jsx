import React from "react";
import { useEffect } from "react";

import HeaderComponent from "../components/HeaderComponent";
import MenuLeft from "../components/MenuLeft";
import CheckIn from "../components/CheckIn";

export default function Homepage() {
  useEffect(() => {
    document.title = "HomePage";
  }, []);

  return (
    <React.Fragment>
      <HeaderComponent />
      <CheckIn />
      <MenuLeft />
    </React.Fragment>
  );
}
