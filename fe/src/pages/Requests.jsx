import React from "react";

import HeaderComponent from "../components/HeaderComponent";
import MenuLeft from "../components/MenuLeft";
import FormRequest from "../components/FormRequest";

export default function Requests() {

  return (
    <React.Fragment>
      <HeaderComponent />
      <div className="compensation-background">
        
        <MenuLeft />
        <FormRequest />

       

      </div>
    </React.Fragment>
  );
}
