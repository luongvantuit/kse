import React from "react";

import { useEffect, useState } from 'react';

import HeaderComponent from '../components/HeaderComponent';
import MenuLeft from "../components/MenuLeft";
import ListCheckIn from "../components/ListCheckIn";
import { Navigate } from "react-router-dom";

export default function Homepage() {

    const token = JSON.parse(localStorage.getItem('token'));
    const [data, setData] = useState(false);
    useEffect(() => {
        document.title = 'HomePage';
        const test = token !== null ? true : false
        setData(test);
    }, []);

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