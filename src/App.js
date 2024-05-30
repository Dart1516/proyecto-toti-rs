import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Principal from "./Pages/Home";
import AboutUs from "./Pages/SobreNos";
import JoinUs from "./Pages/SejaVoluntario";
import Login from "./Pages/Login";
import NewAccount from "./Pages/NewAccount";
import Accesso from "./Pages/Accesso";
import AvisoLegal from "./Pages/avisoLegal";
import MaterialDeApoio from "./Pages/MaterialDeApoio";
import FormUsuario from "./Pages/FormUsuario";
import InterfazLider from "./Pages/interfazLider";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Principal" element={<Principal />} />
        <Route path="/Demo" element={<Principal />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/JoinUs" element={<JoinUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/material-de-apoyo" element={<MaterialDeApoio />} />
        <Route path="/NewAccount" element={<NewAccount />} />
        <Route path="/avisoLegal" element={<AvisoLegal />} />
        <Route path="/Accesso" element={<Accesso />} />
        <Route path="/interfazLider" element={<InterfazLider />} />
        <Route path="/FormUsuario" element={<FormUsuario/>} />

        {/* Ruta predeterminada */}
        <Route path="/*" element={<Navigate to="/Principal" />} />
      </Routes>
    </Router>
  );
}

export default App;
