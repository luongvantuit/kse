import React from "react";
import { useEffect } from "react";

import HeaderComponent from "../components/HeaderComponent";
import MenuLeft from "../components/MenuLeft";
import FormRequest from "../components/FormRequest";

export default function Requests() {

  useEffect(() => {
    document.title = "Requests";
  }, []);

  return (
    <React.Fragment>
      <HeaderComponent />
      <FormRequest />
      <MenuLeft />
    </React.Fragment>
  );
}
