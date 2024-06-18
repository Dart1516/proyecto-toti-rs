import React from "react";
import { Link } from 'react-router-dom';
import "../assets/styles/App.css";
import "../assets/styles/Footer.css";
import ToterDoBem from '../assets/images/logos/Juntos pelo RS.svg'; // Asegúrate de que la ruta al logo sea correcta

function Footer() {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().toLocaleString('default', { month: 'long' });

  return (
    <div className="footer-container">
      <div className="footer-columns">
        <div className="footer-column">
          <h4>Sobre nós</h4>
          <ul>
            <li><a href="https://www2.camara.leg.br/legin/fed/lei/1998/lei-9608-18-fevereiro-1998-365398-publicacaooriginal-1-pl.html" target="_blank" rel="noopener noreferrer">Legislação do voluntariado</a></li>
            <li><a href="/avisoLegal" target="_blank">Aviso Legal de Proteção de Dados</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Parceiros</h4>
          <ul>
            <li>Parceiro 1</li>
            <li>Parceiro 2</li>
            <li>Parceiro 3</li>
            <li>Parceiro 4</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Serviço</h4>
          <ul>
            <li>  <Link to="/FormularioPsicologo"> Profissional da saúde</Link></li>
            <li>  <Link to="/FormularioEducadorSocial">Educador social</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Contato</h4>
          <ul>
            <li>Email: adminriograndedosul@totersdobem.com=            </li>
            <li>Telefone: (99) 99999-9999</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-logo-container">
          <img src={ToterDoBem} alt="Toters do bem Logo" className="footer-logo" />
          <p>TODOS OS DIREITOS RESERVADOS - {currentMonth} {currentYear}</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
