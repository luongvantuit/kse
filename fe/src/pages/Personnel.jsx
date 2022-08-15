import React from "react";
import { useEffect } from "react";

import HeaderComponent from "../components/HeaderComponent";
import MenuLeft from "../components/MenuLeft";
import ListPersonal from "../components/ListPersonal";
import { Navigate } from "react-router-dom";

export default function Personnel() {

  useEffect(() => {
    document.title = "Personnel";
  }, []);
  const data = JSON.parse(localStorage.getItem("token")) !== null;

  return (
    <React.Fragment>
      {data ? (
        <React.Fragment>
          <HeaderComponent />
          <ListPersonal />
          <MenuLeft />
        </React.Fragment>
      ) : (
        <Navigate to="/login" replace="true" />
      )}
    </React.Fragment>
  );
}
