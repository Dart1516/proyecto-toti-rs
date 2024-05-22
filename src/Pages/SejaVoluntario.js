import React from "react";
import Header from "../Components/Header-NavMenu";
import '../assets/styles/App.css';

function Principal() {
  return (
    <div className="App">
      <div className="App-header">
        <Header />
      </div>

      <div className="container">
        <h2>SOS Rio Grande do Sul - Cadastro de profissionais de saúde e intérpretes voluntários</h2>

        <form className="inputs">
          <div className="input-field">
            <h4>1. Nome Completo</h4>
            <input type="text" placeholder="Digite seu nome" required />
          </div>

          <div className="input-field">
            <h4>2. CPF</h4>
            <input type="text" placeholder="O valor deve ser numérico" required />
          </div>

          <div className="input-field">
            <h4>3. Data de Nascimento</h4>
            <input type="date" required />
          </div>

          <div className="input-field">
            <h4>4. Número do WhatsApp</h4>
            <input type="text" placeholder="(DDD) Digite o número" required />
          </div>

          <div className="input-field">
            <h4>5. E-mail</h4>
            <input type="email" placeholder="Digite o e-mail" required />
          </div>

          <div className="form-group">
            <h4>6. Tipo de voluntário</h4>
            <select className="form-select" name="voluntario" required>
              <option value="">Selecione</option>
              <option value="Educador social">Educador(a) Social</option>
              <option value="Psicólogo">Psicólogo(a)</option>
              <option value="Liderança Para Emigrantes, refugiados e apátridas">Liderança Para Emigrantes, refugiados e apátridas</option>
            </select>
          </div>

          <div className="form-group">
            <h4>7.Estado</h4>
            <select className="form-select" name="estado" required>
              <option value="">Selecione</option>
              <option value="SP">SP</option>
              <option value="MT">MT</option>
              <option value="MG">MG</option>
              <option value="CE">CE</option>
              <option value="AC">AC</option>
              <option value="AM">AM</option>
              <option value="RS">RS</option>
              <option value="MA">MA</option>
              <option value="MS">MS</option>
              <option value="RJ">RJ</option>
              <option value="RO">RO</option>
              <option value="SC">SC</option>
            </select>
          </div>

          <div className="form-group">
            <h4>8. Disponibilidade</h4>
            <select className="form-select" name="disponibilidade" required>
              <option value="">Selecione</option>
              <option value="Manhã">Manhã</option>
              <option value="Tarde">Tarde</option>
              <option value="Noite">Noite</option>
            </select>
          </div>

          <button type="submit">Enviar</button>
        </form>
      </div>
      
      <footer className="App-footer">
        
      </footer>
    </div>
  );
}

export default Principal;

