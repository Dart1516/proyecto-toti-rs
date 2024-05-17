import React, { useState } from "react";
import logo from "../assets/images/logos/logo1.png";
import styles from "../assets/styles/Header-NavMenu.css";
import { Link } from "react-router-dom";

function HeaderAndMenu() {
  // Estado para controlar si el menú está abierto o cerrado
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para alternar el estado del menú
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header>
        <nav className={`contenedor_de_opciones ${isMenuOpen ? 'open' : ''}`}>
          <div className="menu-button" id="mobile-menu" onClick={toggleMenu}></div>
          <ul className="opciones-izquiera" >
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
      </header>
    </div>
  );
}

export default HeaderAndMenu;
