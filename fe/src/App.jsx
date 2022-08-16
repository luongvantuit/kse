import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import "./index.css";

import Login from "./pages/Login";
import HomePage from "./pages/Homepage";
import Requests from "./pages/Requests";
import Personnel from "./pages/Personnel";
import AddNew from "./pages/AddNew";
import Profile from "./pages/Profile";
import TimeSheet from "./pages/TimeSheet";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Navigate to={"/login"} />}/>
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
