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
              <Link to="/Principal" className="menu-option-name">
                Página 2
              </Link>
            </li>
            {/* Coloca la opción 3 a la derecha */}
            <li className="menu-option-right">
              <Link to="/Principal" className="menu-option-name">
                Página 3
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default HeaderAndMenu;
