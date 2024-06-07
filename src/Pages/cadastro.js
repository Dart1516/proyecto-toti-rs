import React from "react";
import { FaUser, FaBuilding, FaBook, FaEllipsisH } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Importa Link desde 'react-router-dom'
import Header from "../Components/Header-NavMenu";
import "../assets/styles/App.css";
import "../assets/styles/Cadastro.css";

function Cadastro() {
  return (
    <div className="App">
      <div className="App-header">
        <Header />
      </div>
      <div className="background">
      </div>
      <div className="cadastro">
        <div className="cadastro-titulo">
          <h1>Cadastro Social</h1>
          <p>selecione para qual formulário você gostaria de ser redirecionado.</p>
        </div>
        <div className="cuadro-opciones">
          <div className="grupo-opciones">
            <div className="opcion">
              <Link to="/FormularioPsicologo"> {/* Enlace a la página de voluntario */}
                <div className="icono">
                  <FaUser />
                </div>
                <div className="opciones-texto">
                  <h2>psicólogo(a) voluntariado</h2>
                  <p>descrição para opção 1</p>
                </div>
              </Link>
            </div>
            <div className="opcion">
              <Link to="/FormularioEducadorSocial"> 
                <div className="icono">
                  <FaBuilding />
                </div>
                <div className="opciones-texto">
                  <h2>educador social voluntariado</h2>
                  <p>descrição para opção 2</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="grupo-opciones">
            <div className="opcion">
              <Link to="/FormularioLiderImigrante">
                <div className="icono">
                  <FaBook />
                </div>
                <div className="opciones-texto">
                  <h2>Liderança ONG de Imigrantes, refugiados e apátridas</h2>
                  <p>descrição para opção 3</p>
                </div>
              </Link>
            </div>
            <div className="opcion">
              <Link to="/Home"> {/* Enlace a la página de otros */}
                <div className="icono">
                  <FaEllipsisH />
                </div>
                <div className="opciones-texto">
                  <h2>outros</h2>
                  <p>descrição para opção 4</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div>
        <Link to="/Home"> {/* Enlace a la página de otros */}
          <button className="boton-cadastro">
            voltar
          </button>
          </Link>
        </div>
      </div>
      </div>
  );
}

export default Cadastro;