import React, { useState } from "react";
import { useEffect } from "react";

import HeaderComponent from "../components/HeaderComponent";
import MenuLeft from "../components/MenuLeft";
import ListPersonal from "../components/ListPersonal";
import { Navigate } from "react-router-dom";

export default function Personnel() {
  const token = JSON.parse(localStorage.getItem("token"));
  const [data, setData] = useState(false);

  useEffect(() => {
    document.title = "Personnel";

    const test = token !== null ? true : false;
    setData(test);
  });

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
