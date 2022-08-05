import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './index.css';
import Requests from './pages/Requests';

import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Login />
      <Routes>
        <Route path="/requests" element={<Requests />} />
      </Routes>
    </div>
     
  );
}

export default App;
