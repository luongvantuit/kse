import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AddNewPersonal from "../components/AddNewPersonal";
import CheckIn from "../components/CheckIn";
import BrowseMenus from "../components/BrowseMenus";
import EditPersonal from "../components/EditPersonal";
import FormOnLeave from "../components/FormOnLeave";
import FormRequest from "../components/FormRequest";
import HeaderComponent from "../components/HeaderComponent";
import ListPersonal from "../components/ListPersonal";
import ListTimeSheet from "../components/ListTimeSheet";
import MenuLeft from "../components/MenuLeft";
import PersonalInformation from "../components/PersonalInformation";
export default function AppChild() {
    return (
        <React.Fragment>
            <HeaderComponent/>
            <Routes>
                <Route path="/" element={<Navigate to="homepage" />} />
                <Route path="homepage" element={<CheckIn />} />
                <Route path="requests" element={<FormRequest />} /> 
                <Route path="personnel" element={<ListPersonal />} />
                <Route path="addnew" element={<AddNewPersonal />} />
                <Route path="edit-personal/:username" element={<EditPersonal />} />
                <Route path="profile" element={<PersonalInformation />} />
                <Route path="timesheet" element={<ListTimeSheet />} />
                <Route path="browse-menus" element={<BrowseMenus />} />
                <Route path="form-on-leave" element={<FormOnLeave />} />
            </Routes>
            <MenuLeft />
        </React.Fragment>
    );
}