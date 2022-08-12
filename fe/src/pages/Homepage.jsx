import React from "react";

import { useEffect } from 'react';

import HeaderComponent from '../components/HeaderComponent';
import MenuLeft from "../components/MenuLeft";
import ListCheckIn from "../components/ListCheckIn";

export default function Homepage() {

    useEffect(() => {
        document.title = 'HomePage';
      });

    return (
        
        <React.Fragment>
            <HeaderComponent />
            <ListCheckIn />
            <MenuLeft />
        </React.Fragment>
    );
}