import React from "react";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";

import HeaderComponent from "../components/HeaderComponent";
import MenuLeft from "../components/MenuLeft";
import ListCheckIn from "../components/ListCheckIn";

export default function Homepage() {
  useEffect(() => {
    document.title = "HomePage";
  }, []);
  const data = JSON.parse(localStorage.getItem("token")) !== null;

  return (
    <React.Fragment>
      {data ? (
        <>
          <HeaderComponent />
          <ListCheckIn />
          <MenuLeft />
        </>
      ) : (
        <Navigate to='/login' replace='true'/>
      )}

    </React.Fragment>
  );
}
