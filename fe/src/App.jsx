import React from "react";
import { Routes, Route } from "react-router-dom";

import "./index.css";

import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import Requests from "./pages/Requests";
import Personnel from "./pages/Personnel";
import AddNew from "./pages/AddNew";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="homepage" element={<HomePage />} />
        <Route path="requests" element={<Requests />} />
        <Route path="personnel" element={<Personnel />} />
        <Route path="addnew" element={<AddNew />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
