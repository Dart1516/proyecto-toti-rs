import React, { useState } from "react";
import logo from "../assets/images/logos/logo1.png";
import "../assets/styles/Header-NavMenu.css";
import MobileMenu from "../Components/Mobile-Menu";
import { Link } from "react-router-dom";

function HeaderAndMenu() {

  return (
    <div>
       <MobileMenu/>
        {/* Icono del menú hamburguesa */}

        <nav className="contenedor_de_opciones">
          <ul className="opciones-izquierda">
            <li>
              <Link to="/Principal" className="home-logo">
                <img className="home-logo" src={logo} alt="Home Logo" /> Home
              </Link>
            </li>
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
          <ul className="opciones-derecha">
            <li className="menu-option-right">
              <Link to="/JoinUs" className="menu-option-name">
                Seja Voluntario
              </Link>
            </li>
            <li className="menu-option-right">
              <Link to="/Login" className="menu-option-name">
                Login
              </Link>
            </li>
          </ul>
        </nav>
    </div>
  );
}

export default HeaderAndMenu;
