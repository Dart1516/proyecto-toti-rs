import React from "react";
import "../assets/styles/Header-NavMenu.css";
import MobileMenu from "../Components/Mobile-Menu";
import { Link } from "react-router-dom";
import LoginMenu from "../Components/LoginMenu"; // Importa el nuevo componente
import logo from "../../src/assets/images/logos/toters-logo-green-dark.svg"

function HeaderAndMenu() {




  return (
    <div>
        <MobileMenu />
        {/* Icono del menú hamburguesa */}
        <nav className="contenedor_de_opciones">
          <div className="menu-left">
            
            <ul className="opciones-derecha">
            <Link><img src={logo} className="logo-home"></img></Link>
            </ul>
          </div>
          <ul className="opciones-izquierda">
              <li>
                <Link to="/Demo" className="menu-option-name">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/AboutUs" className="menu-option-name">
                  Sobre nós
                </Link>
              </li>
            <li className="menu-option-right">
              <Link to="/Cadastro" className="menu-option-name">
                Serviços
              </Link>
            </li>
            <li className="menu-option-right">
              <LoginMenu  />
            </li>
          </ul>
        </nav>
    </div>
  );
}

export default HeaderAndMenu;