import React from "react";
import { useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

import "./index.css";

// import Login from "./pages/Login";
// import HomePage from "./pages/Homepage";
// import Requests from "./pages/Requests";
// import Personnel from "./pages/Personnel";
// import AddNew from "./pages/AddNew";
// import Profile from "./pages/Profile";
// import TimeSheet from "./pages/TimeSheet";
// import EditPersonal from "./pages/EditPersonal";
// import BrowseMenusPage from "./pages/BrowseMenusPage";
// import FormOnLeavePage from "./pages/FormOnLeavePage";
import Login from "./pages/Login";
import AppChild from "./pages/AppChild";

function App() {
  let navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login", { replace: true });
    } else {
      const token = localStorage.getItem("token") === null ? "abcd" : JSON.parse(localStorage.getItem('token'));
      const url = 'http://localhost:8080/api/users/verify-token';
      fetch(url, {
        method: 'POST',
        headers: {
          "content-type": "application/json",
          "Authorization": "Bearer " + token,
        }
      })
        .then(response => response.json())
        .then(data => {
          if (!data.success) {
            localStorage.removeItem('token');
            navigate("/login", { replace: true });
          }
        });
    }

  }, []);

  return (
    // <React.Fragment>
    //   <Routes>
    //     <Route path="/" element={<Navigate to={"/homepage"} />} />
    //     <Route path="login" element={<Login />} />
    //     <Route path="homepage" element={<HomePage />} />
    //     <Route path="requests" element={<Requests />} />
    //     <Route path="personnel" element={<Personnel />} />
    //     <Route path="addnew" element={<AddNew />} />
    //     <Route path="edit-personal/:username" element={<EditPersonal />} />
    //     <Route path="profile" element={<Profile />} />
    //     <Route path="timesheet" element={<TimeSheet />} />
    //     <Route path="browse-menus" element={<BrowseMenusPage />} />
    //     <Route path="form-on-leave" element={<FormOnLeavePage />} />
    //   </Routes>
    // </React.Fragment>
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Navigate to="/app" />} />
        <Route path="app/*" element={<AppChild/>} />
        <Route path="login" element={<Login />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
