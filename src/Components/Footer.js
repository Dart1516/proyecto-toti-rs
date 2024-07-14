import React from "react";
import { Link } from 'react-router-dom';
import "../assets/styles/App.css";
import "../assets/styles/Footer.css";
import logo from "../../src/assets/images/logos/toters-logo-green-dark.svg" // Asegúrate de que la ruta al logo sea correcta
import { FaEnvelope, FaPhone } from 'react-icons/fa';

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
           
            <li><a href="/avisoLegal" target="_blank">Proteção de dados</a></li>
            <li> <a href="/TermoPsicologo" target="_blank">                 Termo de Responsabilidade Pisicologos              </a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Parceiros</h4>
          <ul className="parceiros">
            <li>Parceiro 1</li>
            <li>Parceiro 2</li>
            <li>Parceiro 3</li>
            <li>Parceiro 4</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Serviço</h4>
          <ul>
            <li>  <Link to="/FormularioPsicologo"> Profissionais de saúde</Link></li>
            <li>  <Link to="/FormularioEducadorSocial">Educador social</Link></li>
          </ul>
        </div>
        <div className="footer-column">
        <h4>Contato</h4>
      <ul>
        <li className="contato-footer">
          <FaEnvelope className="icon-footer"/>{' '}
          <a href="mailto:adminriograndedosul@totersdobem.com">Email</a>
        </li>
        <li className="contato-footer">
          <FaPhone className="icon-footer"/>{' '}
          <a href="tel:+559999999999">Telefone</a>
        </li>
      </ul>
        </div>
      </div>
     <hr></hr>
        <div className="footer-logo-container">
          <img src={logo} alt="Toters do bem Logo" className="footer-logo" />
          <p>Todos os direitos reservados - {currentMonth} {currentYear}</p>
        </div>
     
    </div>
  );
}

export default Footer;
