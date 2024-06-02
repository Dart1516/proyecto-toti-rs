import React, { useState } from "react";
import InputMask from "react-input-mask";
import Header from "../Components/Header-NavMenu";
import '../assets/styles/App.css';
import '../assets/styles/SejaVoluntario.css';
import { FaTrash, FaPlus } from 'react-icons/fa';

function FormularioLiderImigrante() {
  const [additionalDays, setAdditionalDays] = useState([{ day: "", hour: "" }]);
  const [formData, setFormData] = useState({
    name: "",
    cpf: "",
    birthDate: "",
    phone: "",
    email: "",
    organization: "",
    area: "",
    state: "",
    additionalDays: [{ day: "", hour: "" }],
    password: "",
    verifyPassword: "",
    verifyEmail: ""
  });
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [passwordMatchError, setPasswordMatchError] = useState("");
  const [emailMatchError, setEmailMatchError] = useState("");

  const handleTermsChange = (event) => {
    setIsTermsAccepted(event.target.checked);
  };

  const handleDayChange = (index, event) => {
    const values = [...additionalDays];
    values[index][event.target.name] = event.target.value;
    setAdditionalDays(values);
    setFormData({ ...formData, additionalDays: values });
  };

  const addDay = () => {
    const newDays = [...additionalDays, { day: "", hour: "" }];
    setAdditionalDays(newDays);
    setFormData({ ...formData, additionalDays: newDays });
  };

  const removeDay = (index) => {
    const values = [...additionalDays];
    values.splice(index, 1);
    setAdditionalDays(values);
    setFormData({ ...formData, additionalDays: values });
  };

  const handleSubmit = (event) => {
    if (!isTermsAccepted) {
      event.preventDefault();
      alert("Por favor, aceite os termos e condições antes de enviar o formulário.");
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (name === "password") {
      validatePassword(value);
    }

    if (name === "verifyPassword") {
      setPasswordMatchError(value !== formData.password ? "Las contraseñas no coinciden." : "");
    }

    if (name === "verifyEmail") {
      setEmailMatchError(value !== formData.email ? "Los correos electrónicos no coinciden." : "");
    }
  };

  const validatePassword = (password) => {
    let error = "";
    if (!/(?=.*[a-z])/.test(password)) error += "Falta minúscula. ";
    if (!/(?=.*[A-Z])/.test(password)) error += "Falta mayúscula. ";
    if (!/(?=.*\d)/.test(password)) error += "Falta número. ";
    if (!/(?=.*[@#$%^&+=])/.test(password)) error += "Falta símbolo. ";
    setPasswordError(error);
  };

  return (
    <div className="App SV">
      <div className="App-header">
        <Header />
      </div>
      <div className="background-image"></div>
      <div className="container">
        <div className="container-titulo">
        <h2>SOS Rio Grande do Sul </h2>
        <h2> Cadastro de Liderança Para Emigrantes Voluntário</h2>
        </div>
        <form className="general-inputs" onSubmit={handleSubmit}>
          <div className="inputs">
          <div className="input-field">
            <h4>1. Nome Completo<span>*</span></h4>
            <input
              className="input-text"
              type="text"
              name="name"
              placeholder="Digite seu nome"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-field">
            <h4>2. CPF<span>*</span></h4>
            <InputMask
              mask="999.999.999-99"
              value={formData.cpf}
              onChange={handleInputChange}
              placeholder="Digite seu CPF O valor deve ser numérico"
              required
              className="input-text"
              name="cpf"
            />
          </div>
          <div className="input-field">
            <h4>3. Data de Nascimento<span>*</span></h4>
            <input
              className="input-text"
              type="date"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-field">
            <h4>4. Número do WhatsApp para contato<span>*</span></h4>
            <InputMask
              mask="(99) 99999-9999"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="(DDD) Digite o número"
              required
              className="input-text"
              name="phone"
            />
          </div>
          <div className="input-field">
            <h4>5. E-mail para contato<span>*</span></h4>
            <input
              className="input-text"
              type="email"
              name="email"
              placeholder="Digite o e-mail"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-field">
            <h4>Nome da organização para a qual trabalha<span>*</span></h4>
            <input
              type="text"
              name="organization"
              value={formData.organization}
              onChange={handleInputChange}
              placeholder="Digite o nome da organização"
              required
              className="input-text"
            />
          </div>
          <div className="input-field">
            <h4>Área em que trabalha<span>*</span></h4>
            <input
              type="text"
              name="area"
              value={formData.area}
              onChange={handleInputChange}
              placeholder="Digite a área em que trabalha"
              required
              className="input-text"
            />
          </div>
          <div className="form-group">
            <h4>Estado <span>*</span></h4>
            <select className="form-select" name="state" value={formData.state} onChange={handleInputChange} required>
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
          </div>
          {additionalDays.map((additionalDay, index) => (
            <div className="form-group" key={index}>
              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <div className="form-group" key={index}>
              <div className="dia-disponible">
                <div>
                  <h4>Dia Disponivel {index + 1}<span>*</span></h4>
                  <select
                    className="form-select"
                    name="day"
                    value={additionalDay.day}
                    onChange={(e) => handleDayChange(index, e)}
                    required
                  >
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
                  <h4>Hora Disponivel {index + 1}<span>*</span></h4>
                  <select
                    className="form-select"
                    name="hour"
                    value={additionalDay.hour}
                    onChange={(e) => handleDayChange(index, e)}
                    required
                  >
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
                {index > 0 && (
                  <FaTrash onClick={() => removeDay(index)} className="borrar" />
                )}
                {index === additionalDays.length - 1 && (
                  <button type="button" onClick={() => addDay()}><FaPlus /></button>
                )}
              </div>
            </div>
              </div>
            </div>
          ))}
          <div className="inputs">
          <div className="input-field">
            <h4>Email para registrarse<span>*</span></h4>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Ingrese su correo electrónico"
              required
              className="input-text"
            />
          </div>
          <div className="input-field">
            <h4>Verificação de Email<span>*</span></h4>
            <input
              type="email"
              name="verifyEmail"
              value={formData.verifyEmail}
              onChange={handleInputChange}
              placeholder="Confirme su correo eletrônico"
              required
              className="input-text"
            />
            {emailMatchError && <p style={{ color: 'red' }}>{emailMatchError}</p>}
          </div>
          <div className="input-field">
            <h4>Contraseña<span>*</span></h4>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Ingrese su contraseña"
              required
              className="input-text"
            />
            {passwordError && <p>{passwordError}</p>}
          </div>
          <div className="input-field">
            <h4>Verificación de Contraseña<span>*</span></h4>
            <input
              type="password"
              name="verifyPassword"
              value={formData.verifyPassword}
              onChange={handleInputChange}
              placeholder="Confirme su contraseña"
              required
              className="input-text"
            />
            {passwordMatchError && <p style={{ color: 'red' }}>{passwordMatchError}</p>}
          </div>
          </div>
          <div className="opcional">
            <h4>Observação (opcional)</h4>
            <textarea
              name="message"
              cols="60"
              rows="10"
              placeholder="Sua mensagem"
              className="contact-inputs"
            ></textarea>
          </div>
          <div className="legal">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              onChange={handleTermsChange}
              required
            />
            <label htmlFor="terms">
              Ao marcar esta caixa e clicar em Enviar, aceito o tratamento de meus dados pessoais por <a href="/avisoLegal" target="_blank">[Nome da sua organização]</a> conforme explicado no seu <a href="/avisoLegal" target="_blank">Aviso Legal de Proteção de Dados</a>, que inclui: 1) a coordenação e gestão de voluntários, e 2) a comunicação sobre atividades e oportunidades relacionadas.
            </label>
          </div>
          <button className="SV" type="submit">Enviar</button>
        </form>
      </div>
      <footer className="App-footer"></footer>
    </div>
  );
}

export default FormularioLiderImigrante;
