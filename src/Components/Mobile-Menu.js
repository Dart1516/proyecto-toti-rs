import React, { useState } from "react";
import logo from "../assets/images/logos/logo1.png";
import mobileStyles from "../assets/styles/Mobile-Menu.module.css";
import { Link } from "react-router-dom";
import { IoMenu, IoCloseOutline } from "react-icons/io5";

function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div>
      <header className={mobileStyles["mobile-header"]}>
        <div className={mobileStyles["logo-y-titulo-a-la-izquierda"]}>
          <Link to="/Principal" className={mobileStyles["Mobile-home-logo"]}>
            <img className={mobileStyles["Mobile-home-logo"]} src={logo} alt="Home Logo" />
          </Link>
          <span className={mobileStyles["company-name"]}>Nombre de la Página</span>
        </div>
        {/* Icono del menú hamburguesa */}
        <div className={mobileStyles["Hamburger-menu-icon"]} onClick={toggleMenu}>
          {menuOpen ? <IoCloseOutline size={30} /> : <IoMenu size={30} />}
        </div>
      </header>
      {/* Fondo desenfocado */}
      {menuOpen && <div className={mobileStyles["overlay"]} onClick={toggleMenu}></div>}
      {/* Contenido del menu Mobile */}
      {menuOpen && (
        <div className={mobileStyles["Mobile-menu"]}>
          <ul>
            <li>
              <Link to="/Principal">Como Funciona</Link>
            </li>
            <li>
              <Link to="/Demo">Home</Link>
            </li>
            <li>
              <Link to="/AboutUs">Sobre Nós</Link>
            </li>
            <li>
              <Link to="/JoinUs">Seja Voluntario</Link>
            </li>
            <li>
              <Link to="/Login">Login</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default MobileMenu;
