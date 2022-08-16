import React from "react";
import { useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

import "./index.css";

import Login from "./pages/Login";
import HomePage from "./pages/Homepage";
import Requests from "./pages/Requests";
import Personnel from "./pages/Personnel";
import AddNew from "./pages/AddNew";
import Profile from "./pages/Profile";
import TimeSheet from "./pages/TimeSheet";

function App() {
  let navigate = useNavigate();
  useEffect(() => {
    if(!JSON.parse(localStorage.getItem('token'))) {
      navigate("/login", { replace: true });
    }
  },[]);
  return (
    
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Navigate to={"/homepage"} />}/>
        <Route path="login" element={<Login />} />
        <Route path="homepage" element={<HomePage />} />
        <Route path="requests" element={<Requests />} />
        <Route path="personnel" element={<Personnel />} />
        <Route path="addnew" element={<AddNew />} />
        <Route path="profile" element={<Profile/>} />
        <Route path="timesheet" element={<TimeSheet/>}/>
      </Routes>
    </React.Fragment>

    
    // <Personnel />
    
  );
}

export default App;
