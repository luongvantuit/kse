import React from "react";
import { useEffect } from "react";

import HeaderComponent from "../components/HeaderComponent";
import MenuLeft from "../components/MenuLeft";
import ListTimeSheet from "../components/ListTimeSheet";
import { useNavigate } from "react-router-dom";

export default function TimeSheet() {
  let navigate = useNavigate();
  const data = JSON.parse(localStorage.getItem("token")) !== null;
  if (!data) {
    navigate("/login", { replace: true });
  }

  useEffect(() => {
    document.title = "TimeSheet";
  }, []);

  return (
    <React.Fragment>
      <HeaderComponent />
      <ListTimeSheet />
      <MenuLeft />
    </React.Fragment>
  );
}
