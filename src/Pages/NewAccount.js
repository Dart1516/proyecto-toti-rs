import React from "react";

import "../assets/styles/FormUsuario.css";
import Header from "../Components/Header-NavMenu";

export default function FormUsuario() {
  return (
    <body>

      {/* Cambiar el formulario con los siguiente
      Agregar el campo organizacion a la que perteneces
      quitar el genero y el tipo de servicio
      agregar cpf
      y iniciar sesión
            */}
      <header className="App-header">
        <Header />
      </header>
      <div className="forUSario">
        <div className="forContac">
          <h1 className="titleform">quero ser atendido</h1>
          <form className="contacto">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="nome e sobrenome"
            />
            <input type="email" id="email" name="email" placeholder="email" />
            <input type="tel" id="phone" name="phone" placeholder="telefone" />
          </form>
        </div>

        <div className="Genero-orientação">
          <div className="forGenero">
            <select id="gene" name="genero" className="genero">
              <option value="morning">Genero</option>
              <option value="morning">Homem (cisgênero)</option>
              <option value="afternoon">Mulher (cisgênero)</option>
              <option value="night">Homem trans</option>
              <option value="flexible">Não binário</option>
              <option value="flexible">Gênero fluido</option>
              <option value="flexible">Agênero</option>
              <option value="flexible">Bigênero</option>
              <option value="flexible">Prefiro não dizer</option>
              <option value="flexible">Outro</option>
            </select>
          </div>

          <div className="forOrSexual">
            <select id="gene" name="genero" className="oriSex">
              <option value="morning">Orientação Sexual</option>
              <option value="morning">Heterossexual</option>
              <option value="afternoon">Homossexual</option>
              <option value="night">Bissexual</option>
              <option value="flexible">Assexual</option>
              <option value="flexible">Pansexual</option>
              <option value="flexible">Agênero</option>
              <option value="flexible">Bigênero</option>
              <option value="flexible">Prefiro não dizer</option>
              <option value="flexible">Outro</option>
            </select>
          </div>
        </div>
        <div className="servicio">
          <h2>serviços de interesse:</h2>
          <div className="forServ">

            <input
              type="checkbox"
              id="interestPsico"
              name="interests[]"
              value="education"
            />
            <label htmlFor="interest_education" className="psico">
              psicólogos
            </label>

            <input
              type="checkbox"
              id="interestEduca"
              name="interests[]"
              value="health"
            />
            <label htmlFor="interest_health" className="eduSoc">
              educadores sociais
            </label>

            <input
              type="checkbox"
              id="interestVol"
              name="interests[]"
              value="environment"
            />
            <label htmlFor="interest_environment" className="liderV">
              lideranças voluntários
            </label>
          </div>

          <div className="forTexTarea">
            <textarea
              id="comments"
              name="comments"
              rows="15"
              cols={580}
              className="comments"
            ></textarea>
          </div>
        </div>

        <div className="forhor">
          <select id="availability" name="availability">
            <option value="morning">Mañana</option>
            <option value="afternoon">Tarde</option>
            <option value="night">Noche</option>
          </select>
        </div>

        <button type="submit" className="btnEnviar">
          Enviar formulario
        </button>
      </div>
    </body>
  );
}