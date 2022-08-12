import React from "react";
import { useEffect } from 'react';

import HeaderComponent from '../components/HeaderComponent';
import MenuLeft from "../components/MenuLeft";
import ListTimeSheet from "../components/ListTimeSheet";

export default function TimeSheet() {

    useEffect(() => {
        document.title = 'TimeSheet';
      });

    return(
        <React.Fragment>
            <HeaderComponent />
            <ListTimeSheet />
            <MenuLeft />
        </React.Fragment>

    );
}