import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/LoginMenu.css';
import profileImage from '../assets/images/login/login3.png';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function LoginMenu() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para manejar si el usuario está logueado
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para manejar si el menú está abierto
  const menuRef = useRef(null); // Referencia para el menú desplegable

  // Función para manejar el clic en el botón de login
  const handleLoginClick = () => {
    setIsLoggedIn(true); // Cambia el estado a logueado
  };

  // Función para alternar el menú desplegable
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Alterna el estado del menú desplegable
  };

  // Función para manejar el cierre de sesión
  const handleLogout = () => {
    setIsLoggedIn(false); // Cambia el estado a no logueado
    setIsMenuOpen(false); // Cierra el menú desplegable
  };

  // useEffect para manejar clics fuera del menú
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false); // Cierra el menú si se hace clic fuera de él
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div className="login-menu">
      {isLoggedIn ? (
        <div className="login-info" onClick={toggleMenu}>
          <img src={profileImage} alt="Profile" className="profile-image" />
          <span className="username">David</span>
          <ArrowDropDownIcon className="dropdown-icon" />
        </div>
      ) : (
        <button className="login-button" onClick={handleLoginClick}>
          Login
        </button>
      )}
      {isLoggedIn && isMenuOpen && (
        <div className="dropdown-menu" ref={menuRef}>
          <ul>
            <li>
              <Link to="/profile">Mi Perfil</Link>
            </li>
            <li>
              <Link to="/volunteers">Lista de Voluntarios</Link>
            </li>
            <li onClick={handleLogout}>
              <Link to="/logout">Salir de la Sesión</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default LoginMenu;
