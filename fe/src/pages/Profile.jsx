import React, { useState } from "react";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";

import HeaderComponent from "../components/HeaderComponent";
import MenuLeft from "../components/MenuLeft";
import PersonalInformation from "../components/PersonalInformation";
export default function Profile() {
  const token = JSON.parse(localStorage.getItem("token"));
  const [data, setData] = useState(false);

  useEffect(() => {
    document.title = "Profile";

    const test = token !== null ? true : false;
    setData(test);
  }, []);

  return (
    <React.Fragment>
      {data ? (
        <React.Fragment>
          <HeaderComponent />
          <PersonalInformation />
          <MenuLeft />
        </React.Fragment>
      ) : (
        <Navigate to="/login" replace="true" />
      )}
    </React.Fragment>
  );
}
