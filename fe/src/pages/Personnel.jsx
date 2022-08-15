import React from "react";
import { useEffect } from "react";

import HeaderComponent from "../components/HeaderComponent";
import MenuLeft from "../components/MenuLeft";
import ListPersonal from "../components/ListPersonal";
import { useNavigate } from "react-router-dom";

export default function Personnel() {
  let navigate = useNavigate();
  const data = JSON.parse(localStorage.getItem("token")) !== null;
  if (!data) {
    navigate("/login", { replace: true });
  }

  useEffect(() => {
    document.title = "Personnel";
  }, []);

  return (
    <React.Fragment>
      <HeaderComponent />
      <ListPersonal />
      <MenuLeft />
    </React.Fragment>
  );
}
