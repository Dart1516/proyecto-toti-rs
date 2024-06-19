import React, { useState } from 'react';
import "../assets/styles/HeaderMinhaconta.css";
import { Link } from "react-router-dom";
import Logo from '../assets/images/logos/Juntos pelo RS.svg'; // Importación de la imagen en la parte superior



function Headerminhaconta() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const username = 'Usuario';
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div>
      <nav className="menu-conta">
        <div className="espacio-imagen">
          <img src={Logo} alt="Logo" className="imagen-menu" />
        </div>
        <div className="dropdown">
          <button className="dropbtn" onClick={toggleDropdown}>
            Olá, <span>{username}</span>
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