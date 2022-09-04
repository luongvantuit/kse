import React from "react";
import { useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import AppChild from "./pages/AppChild";
import "./index.css";

function App() {
  const navigate = useNavigate();
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
  }, [navigate]);

  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Navigate to="app/" />} />
        <Route path="app/*" element={<AppChild/>} />
        <Route path="login" element={<Login />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
