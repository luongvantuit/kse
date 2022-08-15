import React from "react";
import { useEffect } from "react";

import HeaderComponent from "../components/HeaderComponent";
import MenuLeft from "../components/MenuLeft";
import FormRequest from "../components/FormRequest";
import { useNavigate } from "react-router-dom";

export default function Requests() {
  let navigate = useNavigate();
  const data = JSON.parse(localStorage.getItem("token")) !== null;
  if (!data) {
    navigate("/login", { replace: true });
  }

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
