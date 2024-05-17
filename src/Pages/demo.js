import logo from '../assets/images/logo.svg';
import Header from "../Components/Header-NavMenu";
import '../assets/styles/practicas.module.css';
import React, { useState } from "react";
import styles from "../assets/styles/practicas.module.css";

function Demo() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
    <header>
      <Header />
      {/* Icono del menú hamburguesa */}
      <div className={styles["Hamburger-menu-icon"]} onClick={toggleMenu}>
        <div className={menuOpen ? "open" : ""}></div>
        <div className={menuOpen ? "open" : ""}></div>
        <div className={menuOpen ? "open" : ""}></div>
      </div>
    </header>
    {/* Contenido del menú */}
    {menuOpen && (
      <div className={styles["Mobile-menu"]}>
        <ul>
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
        </ul>
      </div>
    )}

    
      <body className="App-body">
      <img src={logo} className="App-logo" alt="logo" />
       <h2>Demo</h2>
        <p>
       

        </p>
        
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </body>
    </div>
  );
}

export default Demo;
