import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import HeaderComponent from "../components/HeaderComponent";
import MenuLeft from "../components/MenuLeft";
import PersonalInformation from "../components/PersonalInformation";
export default function Profile() {
  let navigate = useNavigate();
  const data = JSON.parse(localStorage.getItem("token")) !== null;
  if (!data) {
    navigate("/login", { replace: true });
  }

  useEffect(() => {
    document.title = "Profile";
  }, []);

  return (
    <React.Fragment>
      <HeaderComponent />
      <PersonalInformation />
      <MenuLeft />
    </React.Fragment>
  );
}
