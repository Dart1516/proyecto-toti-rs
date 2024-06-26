import React, { useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import Logo from '../assets/images/logos/Juntos pelo RS.svg';
import "../assets/styles/HeaderMinhaconta.css";
import { useNavigate, useLocation } from 'react-router-dom';

function Headerminhaconta() {
  const navigate = useNavigate();
  const location = useLocation();

  const username = location.state?.username;

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Función para manejar el click en cualquier parte del documento
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  // Agregar un event listener cuando el componente monta
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };


  return (
    <div>
      <nav className="menu-conta">
        <div className="espacio-imagen">
          <img src={Logo} alt="Logo" className="imagen-menu" />
        </div>
        <div className="dropdown" ref={dropdownRef}>
          <button className="dropbtn" onClick={toggleDropdown}>
            Olá, <span> {username}!</span>
          </button>
          {dropdownOpen && (
            <div className="dropdown-content show">
              <Link to="/Principal">Início</Link>
              <Link to="/interfazLider">Lista de Voluntariados</Link>
              <Link to="/Principal">Sair</Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Headerminhaconta;
