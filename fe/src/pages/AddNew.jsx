import React from "react";
import { useEffect } from "react";

import HeaderComponent from "../components/HeaderComponent";
import MenuLeft from "../components/MenuLeft";
import AddNewPersonal from "../components/AddNewPersonal";
import { useNavigate } from "react-router-dom";

export default function Addnew() {

  let navigate = useNavigate();
  const data = JSON.parse(localStorage.getItem("token")) !== null;
  if (!data) {
    navigate("/login", { replace: true });
  }

  useEffect(() => {
    document.title = "AddNew";
  }, []);

  return (
    <React.Fragment>
      <HeaderComponent />
      <AddNewPersonal />
      <MenuLeft />
    </React.Fragment>
  );
}
