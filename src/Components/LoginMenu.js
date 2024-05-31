import React, { useState, useRef, useEffect } from 'react';
import '../assets/styles/LoginMenu.css';
import profileImage from '../assets/images/login/login3.png';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Components/AuthContext';

function LoginMenu() {
  const { isLoggedIn, login, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    login();
    navigate('/Accesso');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
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
            <li onClick={logout}>
              <Link to="/">Salir de la Sesión</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default LoginMenu;
