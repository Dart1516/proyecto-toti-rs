
import React from "react";
import { Link } from "react-router-dom";
import '../assets/styles/App.css';
import '../assets/styles/ThankYou.css';

const ThankYou = () => {
  return (
    <div className="thank-you-page">
      <h2>¡Gracias por registrarte!</h2>
      <p>Tu registro ha sido exitoso.</p>
      <div className="thank-you-buttons">
        <Link to="./Accesso.js" className="btn">Hacer Login</Link>
        <Link to="./Home.js" className="btn">Volver a Inicio</Link>
      </div>
    </div>
  );
}

export default ThankYou;
