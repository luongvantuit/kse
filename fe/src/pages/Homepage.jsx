import React from "react";

import { useEffect, useState } from "react";

import HeaderComponent from "../components/HeaderComponent";
import MenuLeft from "../components/MenuLeft";
import ListCheckIn from "../components/ListCheckIn";
import { Navigate } from "react-router-dom";

export default function Homepage() {
  useEffect(() => {
    document.title = "HomePage";
  }, []);
  const data = JSON.parse(localStorage.getItem("token")) !== null;
  return (
    <React.Fragment>
      {data ? (
        <React.Fragment>
          <HeaderComponent />
          <ListCheckIn />
          <MenuLeft />
        </React.Fragment>
      ) : (
        <Navigate to="/login" replace="true" />
      )}
    </React.Fragment>
  );
}
