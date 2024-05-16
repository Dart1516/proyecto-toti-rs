import React from 'react';
import logo from "../assets/images/logos/logo1.png";
import styles from "../assets/styles/Header-NavMenu.css"
import { Link } from 'react-router-dom';

function HeaderAndMenu() {
  return (
    <div>
      <header>
        <nav>
          <ul className="navigation-menu-bar">
            <li>
              <Link to="/Principal" className="menu-option-logo">
                <img className="home-logo" src={logo} alt="Home Logo" /> Home
              </Link>
            </li>
            <li>
              <Link to="/Demo" className="menu-option-name">
                Demo
              </Link>
            </li>
            <li>
              <Link to="/AboutUs" className="menu-option-name">
                Sobre Nós
              </Link>
            </li>
            {/* Coloca la opción 3 a la derecha */}
            <li className="menu-option-right">
              <Link to="/JoinUs" className="menu-option-name">
                Seja Voluntario
              </Link>
            </li>
            <li className="menu-option-right">
              <Link to="/Login" className="menu-option-name">
                Iniciar Sessão
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default HeaderAndMenu;
