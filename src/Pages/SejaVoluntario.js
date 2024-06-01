import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputMask from "react-input-mask";
import Header from "../Components/Header-NavMenu";
import '../assets/styles/App.css';
import '../assets/styles/SejaVoluntario.css';
import { FaTrash, FaPlus } from 'react-icons/fa';

function Principal() {
  const [voluntario, setVoluntario] = useState("");
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const [phone, setPhone] = useState("");
  const [cpf, setCpf] = useState("");
  const [additionalDays, setAdditionalDays] = useState([{ day: "", hour: "" }]);

  const handleVoluntarioChange = (event) => {
    setVoluntario(event.target.value);
  };

  const handleTermsChange = (event) => {
    setIsTermsAccepted(event.target.checked);
  };

  const handlePhoneChange = (event) => {
    const input = event.target.value;
    setPhone(input);
  };

  const handleCpfChange = (event) => {
    const input = event.target.value;
    setCpf(input);
  };

  const handleDayChange = (index, event) => {
    const values = [...additionalDays];
    values[index][event.target.name] = event.target.value;
    setAdditionalDays(values);
  };

  const addDay = () => {
    setAdditionalDays([...additionalDays, { day: "", hour: "" }]);
  };

  const removeDay = (index) => {
    const values = [...additionalDays];
    values.splice(index, 1);
    setAdditionalDays(values);
  };

  const handleSubmit = (event) => {
    if (!isTermsAccepted) {
      event.preventDefault();
      alert("Por favor, aceite os termos e condições antes de enviar o formulário.");
    }
  };

  return (
    <div className="App SV">
      <div className="App-header">
        <Header />
      </div>
      <div className="container">
        <h2>SOS Rio Grande do Sul - Cadastro de profissionais de saúde e intérpretes voluntários</h2>
        <form className="inputs" onSubmit={handleSubmit}>
          <div className="input-field">
            <h4>1. Nome Completo<span>*</span></h4>
            <input className="input-text" type="text" placeholder="Digite seu nome" required />
          </div>
          <div className="input-field">
            <h4>2. CPF<span>*</span></h4>
            <InputMask
              mask="999.999.999-99"
              value={cpf}
              onChange={handleCpfChange}
              placeholder="Digite seu CPF O valor deve ser numérico"
              required
              className="input-text"
            />
          </div>
          <div className="input-field">
            <h4>3. Data de Nascimento<span>*</span></h4>
            <input className="input-text" type="date" required />
          </div>
          <div className="input-field">
            <h4>4. Número do WhatsApp<span>*</span></h4>
            <InputMask
              mask="(99) 99999-9999"
              value={phone}
              onChange={handlePhoneChange}
              placeholder="(DDD) Digite o número"
              required
              className="input-text"
            />
          </div>
          <div className="input-field">
            <h4>5. E-mail<span>*</span></h4>
            <input className="input-text" type="email" placeholder="Digite o e-mail" required />
          </div>
          <div className="form-group">
            <h4>6. Tipo de voluntário<span>*</span></h4>
            <select className="form-select" name="voluntario" onChange={handleVoluntarioChange} required>
              <option value="">Selecione</option>
              <option value="Educador social">Educador(a) Social</option>
              <option value="Psicólogo">Psicólogo(a)</option>
              <option value="Liderança Para Emigrantes, refugiados e apátridas">Liderança Para Emigrantes, refugiados e apátridas</option>
            </select>
          </div>
          {voluntario === "Psicólogo" && (
            <>
              <div className="input-field">
                <h4>CRP<span>*</span></h4>
                <input type="text" placeholder="Digite seu CRM" required />
              </div>
              <div className="input-field">
                <h4>Especialidade<span>*</span></h4>
                <input type="text" placeholder="Digite sua especialidade" required />
              </div>
            </>
          )}
          {(voluntario === "Educador social" || voluntario === "Liderança Para Emigrantes, refugiados e apátridas") && (
            <div className="input-field">
              <h4>Área em que pode ajudar<span>*</span></h4>
              <input type="text" placeholder="Digite a área em que pode ajudar" required />
            </div>
          )}
          <div className="form-group">
            <h4>7. Estado <span>*</span></h4>
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
  <div style={{ display: "flex", gap: "10px" }}>
    <div>
      <h4>8. Dia Disponivel<span>*</span></h4>
      <select className="form-select" name="day" value={additionalDays[0].day} onChange={(e) => handleDayChange(0, e)} required>
        <option value="">Selecione</option>
        <option value="Segunda">Segunda</option>
        <option value="Terça">Terça</option>
        <option value="Quarta">Quarta</option>
        <option value="Quinta">Quinta</option>
        <option value="Sexta">Sexta</option>
        <option value="Sabado">Sabado</option>
        <option value="Domingo">Domingo</option>
      </select>
    </div>
    <div>
      <h4>9. Hora Disponivel<span>*</span></h4>
      <select className="form-select" name="hour" value={additionalDays[0].hour} onChange={(e) => handleDayChange(0, e)} required>
        <option value="">Selecione</option>
        <option value="09:00">09:00</option>
        <option value="10:00">10:00</option>
        <option value="11:00">11:00</option>
        <option value="12:00">12:00</option>
        <option value="13:00">13:00</option>
        <option value="14:00">14:00</option>
        <option value="15:00">15:00</option>
        <option value="16:00">16:00</option>
        <option value="17:00">17:00</option>
        <option value="18:00">18:00</option>
        <option value="19:00">19:00</option>
        <option value="20:00">20:00</option>
        <option value="21:00">21:00</option>
      </select>
    </div>
    {additionalDays.length === 1 && (
      <button type="button" onClick={() => addDay(0)}><FaPlus /></button>
    )}
  </div>
</div>
{additionalDays.slice(1).map((additionalDay, index) => (
  <div className="form-group" key={index + 1}>
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <div>
        <h4>Dia Disponivel {index + 2}<span>*</span></h4>
        <select className="form-select" name="day" value={additionalDay.day} onChange={(e) => handleDayChange(index + 1, e)} required>
          <option value="">Selecione</option>
          <option value="Segunda">Segunda</option>
          <option value="Terça">Terça</option>
          <option value="Quarta">Quarta</option>
          <option value="Quinta">Quinta</option>
          <option value="Sexta">Sexta</option>
          <option value="Sabado">Sabado</option>
          <option value="Domingo">Domingo</option>
        </select>
      </div>
      <div>
        <h4>Hora Disponivel {index + 2}<span>*</span></h4>
        <select className="form-select" name="hour" value={additionalDay.hour} onChange={(e) => handleDayChange(index + 1, e)} required>
          <option value="">Selecione</option>
          <option value="09:00">09:00</option>
          <option value="10:00">10:00</option>
          <option value="11:00">11:00</option>
          <option value="12:00">12:00</option>
          <option value="13:00">13:00</option>
          <option value="14:00">14:00</option>
          <option value="15:00">15:00</option>
          <option value="16:00">16:00</option>
          <option value="17:00">17:00</option>
          <option value="18:00">18:00</option>
          <option value="19:00">19:00</option> 
          <option value="20:00">20:00</option>
          <option value="21:00">21:00</option>
        </select>
      </div>
      <FaTrash onClick={() => removeDay(index + 1)} style={{ cursor: "pointer" }} />
      {index === additionalDays.length - 2 && (
        <button type="button" onClick={() => addDay(index + 1)}><FaPlus /></button>
      )}
    </div>
  </div>
))}

          <div>
            <h4>Observação (opcional)</h4>
            <textarea name="message" cols="60" rows="10" placeholder="Sua mensagem" className="contact-inputs"></textarea>
          </div>
          <div className="form-group">
            <input type="checkbox" id="terms" name="terms" onChange={handleTermsChange} required />
            <label htmlFor="terms">
              Ao marcar esta caixa e clicar em Enviar, aceito o tratamento de meus dados pessoais por <Link to="/avisoLegal" target="_blank">[Nome da sua organização]</Link> conforme explicado no seu <Link to="/avisoLegal" target="_blank">Aviso Legal de Proteção de Dados</Link>, que inclui: 1) a coordenação e gestão de voluntários, e 2) a comunicação sobre atividades e oportunidades relacionadas.
            </label>
          </div>
          <button className="SV" type="submit">Enviar</button>
        </form>
      </div>
      <footer className="App-footer"></footer>
    </div>
  );
}

export default Principal;
