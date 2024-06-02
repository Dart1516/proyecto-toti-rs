import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Principal from "./Pages/Home";
import AboutUs from "./Pages/SobreNos";
import FormularioPsicologo from "./Pages/FormularioPsicologo";
import FormularioEducadorSocial from "./Pages/FormularioEducadorSocial";
import FormularioLiderImigrante from "./Pages/FormularioLiderImigrante";
import Accesso from "./Pages/Accesso";
import AvisoLegal from "./Pages/avisoLegal";
import MaterialDeApoio from "./Pages/MaterialDeApoio";
import InterfazLider from "./Pages/interfazLider";
import Cadastro from "./Pages/cadastro";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Principal" element={<Principal />} />
        <Route path="/Demo" element={<Principal />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/FormularioPsicologo" element={<FormularioPsicologo />} />
        <Route path="/FormularioEducadorSocial" element={<FormularioEducadorSocial />} />
        <Route path="/FormularioLiderImigrante" element={<FormularioLiderImigrante />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/material-de-apoyo" element={<MaterialDeApoio />} />
        <Route path="/avisoLegal" element={<AvisoLegal />} />
        <Route path="/Accesso" element={<Accesso />} />
        <Route path="/interfazLider" element={<InterfazLider />} />
        <Route path="/cadastro" element={<Cadastro/>} />

        {/* Ruta predeterminada */}
        <Route path="/*" element={<Navigate to="/Principal" />} />
      </Routes>
    </Router>
  );
}

export default App;

