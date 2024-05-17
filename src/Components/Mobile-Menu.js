import React, { useState } from "react";
import logo from "../assets/images/logos/logo1.png";
import mobileStyles from "../assets/styles/Mobile-Menu.module.css";
import { Link } from "react-router-dom";

function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div>
      <header>
        {/* Icono del menú hamburguesa */}
        <div className={mobileStyles["Hamburger-menu-icon"]} onClick={toggleMenu}>
          <div className={menuOpen ? "open" : ""}></div>
          <div className={menuOpen ? "open" : ""}></div>
          <div className={menuOpen ? "open" : ""}></div>
        </div>
      </header>
      {/* Contenido Mobile */}
      {menuOpen && (
        <div className={mobileStyles["Mobile-menu"]}>
          <ul>
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
        </div>
      )}
    </div>
  );
}

export default MobileMenu;
