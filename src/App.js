import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Demo from "./Pages/demo";
import Principal from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUs";
import JoinUs from "./Pages/SejaVoluntario";
import FormUsuario from "./Pages/FormUsuario";
import Login from "./Pages/Login";
import NewAccount from "./Pages/NewAccount";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Principal" element={<Principal />} />
        <Route path="/Demo" element={<Demo />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/JoinUs" element={<JoinUs />} />
        <Route path="/NewAccount" element={<NewAccount />}/>
        <Route path="/Login" element={<Login />} />
        <Route path="/FormUsuario" element={<FormUsuario />} />
        
        {/* Ruta predeterminada */}
        <Route path="/*" element={<Navigate to="/Principal" />} />
      </Routes>
    </Router>
  );
}

export default App;
