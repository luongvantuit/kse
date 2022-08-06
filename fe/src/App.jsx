import React from 'react';
import { Routes, Route } from "react-router-dom";
import './index.css';
import Requests from './pages/Requests';

import Login from './pages/Login';

//import Calendar from './components/Calendar'

function App() {
  
  return (
    <React.Fragment>
       <Routes>
        <Route path="login" element={<Login />} />
        <Route path="request" element={<Requests />} /> 
      </Routes>
     </React.Fragment>
    //<Requests />
  );
}

export default App;
