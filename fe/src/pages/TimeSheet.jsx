import React, { useState } from "react";
import { useEffect } from "react";

import HeaderComponent from "../components/HeaderComponent";
import MenuLeft from "../components/MenuLeft";
import ListTimeSheet from "../components/ListTimeSheet";
import { Navigate } from "react-router-dom";

export default function TimeSheet() {
  const token = JSON.parse(localStorage.getItem("token"));
  const [data, setData] = useState(false);

  useEffect(() => {
    document.title = "TimeSheet";

    const test = token !== null ? true : false;
    setData(test);
  });

  return (
    <React.Fragment>
      {data ? (
        <React.Fragment>
          <HeaderComponent />
          <ListTimeSheet />
          <MenuLeft />
        </React.Fragment>
      ) : (
        <Navigate to="/login" replace="true" />
      )}
    </React.Fragment>
  );
}