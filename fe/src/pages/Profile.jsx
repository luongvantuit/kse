import React from "react";
import { useEffect } from 'react';

import HeaderComponent from "../components/HeaderComponent";
import MenuLeft from "../components/MenuLeft";
import PersonalInformation from "../components/PersonalInformation";
export default function Profile() {

  useEffect(() => {
    document.title = 'Profile';
  });

  return (
    <React.Fragment>
      <HeaderComponent />
      <PersonalInformation />
      <MenuLeft />
    </React.Fragment>
  );
}
