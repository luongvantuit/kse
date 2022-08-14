import React, { useState } from "react";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";

import HeaderComponent from "../components/HeaderComponent";
import MenuLeft from "../components/MenuLeft";
import PersonalInformation from "../components/PersonalInformation";
export default function Profile() {
 
  useEffect(() => {
    document.title = "Profile";
  }, []);
  const data = JSON.parse(localStorage.getItem("token")) !== null;

  return (
    <React.Fragment>
      {data ? (
        <React.Fragment>
          <HeaderComponent />
          <PersonalInformation />
          <MenuLeft />
        </React.Fragment>
      ) : (
        <Navigate to="/login" replace="true" />
      )}
    </React.Fragment>
  );
}
