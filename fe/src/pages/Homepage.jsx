import React from 'react';

// import '../components/Homepage.css';
import HeaderComponent from '../components/HeaderComponent';
import MenuLeft from "../components/MenuLeft";
import ListCheckIn from "../components/ListCheckIn";



export default function Homepage() {
    return (
        <React.Fragment>
            <HeaderComponent />
            <MenuLeft />
            <ListCheckIn />

            
        </React.Fragment>
    );
}