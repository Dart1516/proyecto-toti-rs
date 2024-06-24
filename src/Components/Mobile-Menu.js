import React, { useState } from "react";
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
        {/* Header */}
        <nav className={mobileStyles["nav-container-mobile"]}>
          <div className={mobileStyles["menu-left"]}>
            <Link to="/Principal" className={mobileStyles["mobile-logo"]}>
            </Link>
            <span className={mobileStyles["name"]}>Comunidade Toti</span>
          </div>
          {/* Icono del menú hamburguesa */}
          <div className={mobileStyles["icone-menu-hamburguer"]} onClick={toggleMenu}>
            {menuOpen ? <IoCloseOutline size={30} /> : <IoMenu size={30} />}
          </div>
        </nav>
        {/* Contenido del menu Mobile */}
        {menuOpen && (
          <div className={mobileStyles["menu-dropdown"]}>
            <div className={mobileStyles["overlay"]} onClick={toggleMenu}></div>
            <div className={mobileStyles["menu"]}>
              <ul>
                <li>
                  <Link to="/Principal">Home</Link>
                </li>
                <li>
                  <Link to="/AboutUs">Sobre Nós</Link>
                </li>
                <li>
                  <Link to="/JoinUs">Seja Voluntario</Link>
                </li>
                <li>
                  <Link to="/Accesso">Login</Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    );
  }
  

export default MobileMenu;
