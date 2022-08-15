import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import HeaderComponent from "../components/HeaderComponent";
import MenuLeft from "../components/MenuLeft";
import ListCheckIn from "../components/ListCheckIn";

export default function Homepage() {
  let navigate = useNavigate();
  const data = JSON.parse(localStorage.getItem("token")) !== null;
  if (!data) {
    navigate("/login", { replace: true });
  }
  useEffect(() => {
    document.title = "HomePage";
  }, []);

  return (
    <React.Fragment>
      <HeaderComponent />
      <ListCheckIn />
      <MenuLeft />
    </React.Fragment>
  );
}
