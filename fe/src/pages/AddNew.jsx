import React from "react";
import { useEffect, useState } from "react";

import HeaderComponent from "../components/HeaderComponent";
import MenuLeft from "../components/MenuLeft";
import AddNewPersonal from "../components/AddNewPersonal";
import { Navigate } from "react-router-dom";

export default function Addnew() {
  const token = JSON.parse(localStorage.getItem("token"));
  const [data, setData] = useState(false);

  useEffect(() => {
    document.title = "AddNew";

    const test = token !== null ? true : false;
    setData(test);
  }, []);

  return (
    <React.Fragment>
      {data ? (
        <React.Fragment>
          <HeaderComponent />
      <AddNewPersonal />
      <MenuLeft />
        </React.Fragment>
      ) : (
        <Navigate to="/login" replace="true" />
      )}
      
    </React.Fragment>
  );
}
