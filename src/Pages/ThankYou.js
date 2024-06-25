
import React from "react";
import { Link } from "react-router-dom";
import '../assets/styles/App.css';
import '../assets/styles/ThankYou.css';

const ThankYou = () => {
  return (
    <div className="thank-you-page">
      <h2>¡Grato Por Te Registrares!</h2>
      <p>Seu Registro foi Feito com Exito.</p>
      <div className="thank-you-buttons">
        <Link to="./Accesso.js" className="btn">Fazer Login</Link>
        <Link to="./Home.js" className="btn">Voltar ao Início</Link>
      </div>
    </div>
  );
}

export default ThankYou;
