import React, { useState } from "react";
import "../assets/styles/Header-NavMenu.css";
import MobileMenu from "../Components/Mobile-Menu";
import { Link } from "react-router-dom";
import { styled} from "@mui/material"
import LoginMenu from "../Components/LoginMenu"; // Importa el nuevo componente

function HeaderAndMenu() {
  const StyledHeader = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary,
    color:theme.palette.secondary,
  }))
  return (
    <div>
      <StyledHeader>
      <MobileMenu/>
        {/* Icono del menú hamburguesa */}
        <nav className="contenedor_de_opciones">
          <div className="menu-left">
          <Link to="/Principal" className="home-logo">
          </Link>
          <ul className="opciones-izquierda">
            
            <li>
              <Link to="/Demo" className="menu-option-name">
                Home
              </Link>
            </li>
            <li>
              <Link to="/AboutUs" className="menu-option-name">
                Sobre Nós
              </Link>
            </li>
          </ul>
          </div>
          <ul className="opciones-derecha">
            <li className="menu-option-right">
              <Link to="/JoinUs" className="menu-option-name">
              Quero Ser voluntario
                
              </Link>
            </li>
            <li className="menu-option-right">
              <Link to="/FormUsuario" className="menu-option-name">
              Liderança Emigrante
              </Link>
            </li>
            <li className="menu-option-right">
              <LoginMenu /> {/* Incluye el componente LoginMenu */}
            </li>
          </ul>
        </nav>
      </StyledHeader>
     
    </div>
  );
}

export default HeaderAndMenu;
