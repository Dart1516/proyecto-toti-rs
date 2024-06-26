
import React from "react";
import { Link } from "react-router-dom";
import '../assets/styles/App.css';
import '../assets/styles/ThankYou.css';
import Header from "../Components/Header-NavMenu";
import Footer from "../Components/Footer";
import "../../src/assets/styles/Button.css";
const ThankYou = () => {
  return (
    <div className="body-thank">
          <Header/>
    <div className="thank-you-page">
      <h2>¡Grato Por Te Registrares!</h2>
      <p>Seu Registro foi Feito com Exito.</p>
      <div className="thank-you-buttons">
        <Link to="./Accesso.js" className="buttom0 buttom1">Fazer Login</Link>
        <Link to="./Home.js" className="buttom0 buttom2">Voltar ao Início</Link>
      </div>
    </div>
<Footer className="footer-thank"/>
    </div>

  );
}

export default ThankYou;
