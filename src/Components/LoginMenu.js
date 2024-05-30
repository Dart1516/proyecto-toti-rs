// src/Components/LoginMenu.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/LoginMenu.css';
import profileImage from '../assets/images/login/login3.png';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'; // Importa el icono de la flecha hacia abajo

function LoginMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="login-menu">
      <div className="login-info" onClick={toggleMenu}>
        <img src={profileImage} alt="Profile" className="profile-image" />
        <span className="username">David</span>
        <ArrowDropDownIcon className="dropdown-icon" />
      </div>
      {isMenuOpen && (
        <div className="dropdown-menu">
          <ul>
            <li>
              <Link to="/profile">Mi Perfil</Link>
            </li>
            <li>
              <Link to="/volunteers">Lista de Voluntarios</Link>
            </li>
            <li>
              <Link to="/logout">Salir de la Sesión</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default LoginMenu;
