import React from "react";
import Header from "../Components/Header-NavMenu";
import '../assets/styles/App.css';


function Principal() {
  return (
    <div className="App">
      <div  className="App-header">
        <Header/>
      </div>

      <body >
      <div className = "container">
        <h2> SOS Rio Grande do Sul Cadastro de profissionais de saúde e intérpretes voluntários </h2>
      </div>

      <div className = "inputs">
        <div className="input">
          <h4>1. Nome Completo</h4>
          <input type="text" placeholder="Digite seu nome"></input>
        </div>

        <div className="input">
        <h4>1. CPF</h4>
          <input type="text" placeholder="O valor deve ser número "></input>
        </div>

        <div className="input-field">
        <h4>2. Data de Nascimento</h4>
          <input type="date" placeholder="Didite a data " required></input>
        </div>

        <div className="input-field">
        <h4>3. Número do whatsapp</h4>
          <input type="text" placeholder=" (DDD) Didite o número" required></input>
        </div>

        <div className="input-field">
        <h4>4. E - mail</h4>
          <input type="text" placeholder=" Didite o e-mail" required></input>
        </div>

        <div className="form-group">
        <h4>5. Tipo de voluntário</h4>
          <select className="form-select" name="voluntario">
          <option value="Educador social"> Educador(a) Social</option>
          <option value="Psicólogo">Psícologo(a)</option>
          <option value="Liderança Para Emigrantes, refugiados e apatridas"> Liderança Para Emigrantes, refugiados e apatridas</option>
          </select>
        </div>

        <div className="form-group">
        <h4>6. Estado</h4>
          <select className="form-select" name="Estado">
          <option value="SP"> SP </option>
          <option value="MT"> MT</option>
          <option value="MG"> MG</option>
          <option value="CE"> CE</option>
          <option value="AC"> AC</option>
          <option value="AM"> AM</option>
          <option value="RS"> RS</option>
          <option value="MA"> MA</option>
          <option value="MS"> MS</option>
          <option value="RJ"> RJ</option>
          <option value="RO"> RO</option>
          <option value="SC"> SC</option>
          
          </select>
        </div>

        



      </div> 
       
      </body>
      <footer>

      </footer>
    </div>
  );
}

export default Principal;
