import React, { useState } from "react";
import InputMask from "react-input-mask";
import Header from "../Components/Header-NavMenu";
import "../assets/styles/App.css";
import "../assets/styles/SejaVoluntario.css";
import { Api } from "../services/api";
import { useNavigate } from "react-router-dom";
import Visibility from "@mui/icons-material/VisibilityOutlined";
import VisibilityOff from "@mui/icons-material/VisibilityOffOutlined";
import { InputAdornment, IconButton, Input } from "@mui/material";

function FormularioLiderImigrante() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cpf: "",
    phoneNumber: "",
    organization: "",
    cnpj: "",
    area: "",
    state: "",
    address: "",
    notes: "",
    password: "",
    verifyPassword: "",
    verifyEmail: "",
    termos: false,
  });
  const [passwordError, setPasswordError] = useState("");
  const [passwordMatchError, setPasswordMatchError] = useState("");
  const [emailMatchError, setEmailMatchError] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const validateForm = (form) => {
    delete form.notes;
    const isNotEmpty = Object.keys(form).every((key) => form[key]);
    if (!isNotEmpty) {
      const emptyFields = {};
      if (!form.name) {
          emptyFields.name = true;
      }
      if (!form.organization) {
          emptyFields.ong = true;
      }
      if (!form.cnpj) {
        emptyFields.cnpj = true;
    }
        const errorMessage = 'Campo obrigatorio.';
        setErrorsFields(errorMessage,emptyFields);
        setError( "Por favor, preencha todos os campos.");

    } else if (!form.termos ) {
      setError( "Por favor, aceite os termos e condições antes de enviar o formulário.");
    }

    return isNotEmpty;
  };

  const [errorEmail, setErrorEmail] = useState("");
  const [errorCpf, setErrorCpf] = useState("");
const [errors, setErrorsFields] = useState("")
const [valid, setFieldValid] = useState(false)
  function resetErrorEmailCpf() {
    setErrorEmail("");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const result = validateForm({ ...formData });
    if (!result) {
      setIsLoading(false);
      return;
    }
    const normalizedEmail = formData.email.toLowerCase();
    const dataToSend = {
      ...formData,
      notes: formData.notes || "",
      email: normalizedEmail,
    };

    delete dataToSend.verifyEmail;
    delete dataToSend.verifyPassword;

    try {
      const response = await Api.post("/cadastro/lideres", dataToSend);
      console.log("dados enviados com sucesso:", response.data);
      navigate("/thankyou");
     
    } catch (error) {
      console.error("Error al enviar datos:", error);
      if (error.response?.data?.message?.includes("CPF já cadastrado")) {
          setErrorCpf("Usuario ja existe, CPF ja cadastrado");
          setError("Error al enviar datos: CPF ja existe");
     
      } else if (error.response?.data?.message?.includes("E-mail já cadastrado")) {
        setErrorEmail("Usuario ja existe, Email ja cadastrado");
        setError(
          "Error al enviar datos: Email ja cadastrado"   
        );
      }
      else{
        setError(
          "Error al enviar datos: " +
            (error.response?.data?.message || error.message)
        );
      }
    
    }
   
    setIsLoading(false);
  };

  const handleTermsChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.checked });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "password") {
      validatePassword(value);
    }

    if (name === "verifyPassword") {
      setPasswordMatchError(
        value !== formData.password ? "Las contraseñas no coinciden." : ""
      );
    }

    if (name === "verifyEmail") {
      setEmailMatchError(
        value !== formData.email ? "Os E-mails nao coinciden." : ""
      );
    }
    if (name === "email") {
      validateEmail(value);
    }
  }
  const validatePassword = (password) => {
    let error = "";
    if (!/(?=.*[a-z])/.test(password)) error += "Falta minúscula. ";
    if (!/(?=.*[A-Z])/.test(password)) error += "Falta mayúscula. ";
    if (!/(?=.*\d)/.test(password)) error += "Falta número. ";
    if (!/(?=.*[@#$%^&=])/.test(password)) error += "Falta símbolo.(@#$%&=)";
    if (password.length < 8)
      error += "A senha deve conter pelo menos 8 digitos.";
      if (error) {
        setPasswordError(error);
    } else {
        setPasswordError("");
    }
  };
const validateEmail = (email) => {
  if(email.match(/^[\w-.]+@[\w-.]+\.[a-zA-Z]{2,}$/i)){
    setFieldValid(
      true)
      setErrorEmail(
        "")
  }else{
    setFieldValid(
      false)
    setErrorEmail(
      "email invalido")
     
  }
}
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const [showPasswordVerify, setShowPasswordVerify] = useState(false);
  const handleTogglePasswordVerify = () => {
    setShowPasswordVerify(!showPasswordVerify);
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
          <h2>
            Cadastro de Liderança de ONG para Imigrantes, refugiados e apátridas
          </h2>
        </div>
        <form className="general-inputs">
          <div className="inputs formCadastro">
            <div className="input-field">
              <h4>
                1. Nome da ONG que representa<span>*</span>
              </h4>
              <input
className={`input-text ${errors ? 'invalid' : ''}`}
  type="text"
                name="organization"
                placeholder="Digite o nome da ONG"
                value={formData.organization}
                onChange={handleInputChange}
                required
              />
                             {errors && <p style={{ color: 'red' }}>{errors}</p>}

            </div>
            <div className="input-field">
              <h4>
                2. CNPJ Da ONG<span>*</span>
              </h4>
              <InputMask
                mask="99.999.999/9999-99"
                value={formData.cnpj}
                onChange={handleInputChange}
                placeholder="Digite seu CNPJ O valor deve ser numérico"
                required
                className={`input-text ${errors ? 'invalid' : ''}`}
                name="cnpj"

              />
               {errors && <p style={{ color: 'red' }}>{errors}</p>}

            </div>
            <div className="input-field">
              <h4>
                3. Nome Completo do Representante Legal<span>*</span>
              </h4>
              <input
 className='input-text'
   type="text"
                name="name"
                placeholder="Digite seu nome"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-field">
              <h4>
                4. CPF Do representante Legal <span>*</span>
              </h4>
              <InputMask
                mask="999.999.999-99"
                value={formData.cpf}
                onChange={handleInputChange}
                placeholder="Digite seu CPF O valor deve ser numérico"
                required
                className={`input-text ${errorCpf ? 'invalid' : ''}`}
                name="cpf"
                onFocus={() => resetErrorEmailCpf()}
              />
 {errorCpf && <p style={{ color: 'red' }}>{errorCpf}</p>}
            </div>
            <div className="input-field">
              <h4>
                5. Número do WhatsApp do Representante<span>*</span>
              </h4>
              <InputMask
                mask="(99) 99999-9999"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="(DDD) Digite o número"
                required
                className='input-text'
                                name="phoneNumber"
              />
            </div>
            <div className="input-field">
              <h4>
                6. Área em que trabalha <span>*</span>
              </h4>
              <input
                type="text"
                name="area"
                value={formData.area}
                onChange={handleInputChange}
                placeholder="Digite a área em que trabalha"
                className='input-text'
                                required
              />
            </div>
            <div className="input-field">
              <h4>
                7. Estado em que reside <span>*</span>
              </h4>
              <select
 className='input-text'             
    name="state"
                value={formData.state}
                onChange={handleInputChange}
                required
              >
                <option value="">-Selecione-</option>
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
                <option value="PA">PA</option>
                <option value="PB">PB</option>
                <option value="PE">PE</option>
                <option value="PI">PI</option>
                <option value="RR">RR</option>
                <option value="RN">RN</option>
                <option value="SE">SE</option>
                <option value="TO">TO</option>
                <option value="DF">DF</option>
                <option value="GO">GO</option>
              </select>
            </div>
            <div className="input-field">
              <h4>
                8. Endereço <span>*</span>
              </h4>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Digite o endereço"
                required
                className='input-text'
              />
            </div>
          </div>

          <div className="lembre-text">
            <h1>Lembre-se:</h1>
            <p>
              Seu e-mail e senha cadastrados serão seu login para o acesso na
              plataforma
            </p>
            <p>
              Após preencher todos os seus dados clique em{" "}
              <strong>"Enviar"</strong> e seu cadastro estará completo
            </p>
          </div>
          <div className="inputs formCadastro">
            <div className="input-field">
              <h4>
                Email para cadastro<span>*</span>
              </h4>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Digite seu e-mail"
                required
                toLowercase
                className={`input-text ${errorEmail ? 'invalid' : ''} ${valid ? 'valid' : ''}`}
               
              />
          {errorEmail && <p style={{ color: 'red' }}>{errorEmail}</p>}

            </div>
            <div className="input-field">
              <h4>
                Verificação do Email<span>*</span>
              </h4>
              <input
                type="email"
                name="verifyEmail"
                value={formData.verifyEmail}
                onChange={handleInputChange}
                placeholder="Confirme o  seu e-mail"
                required
                className={`input-text ${emailMatchError ? 'invalid' : ''}`}
              />
              {emailMatchError && (
                <p style={{ color: "red" }}>{emailMatchError}</p>
              )}
            </div>
            <div className="input-field">
              <h4>
                Senha<span>*</span>
              </h4>
              <Input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Crie sua senha"
                required
                className={`input-text ${passwordError ? 'invalid' : ''}${valid ? 'valid' : ''}`}
                inputProps={{
                  pattern:
                    "^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_{}|:;'<>/?~])[A-Za-z0-9!@#$%^&*()_{}|:;'<>/?~]{8}$",
                  maxLength: 8,
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton onClick={handleTogglePassword}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              {passwordError && (
                <p className="error-message">{passwordError}</p>
              )}
            </div>
            <div className="input-field">
              <h4>
                Verificação de Senha<span>*</span>
              </h4>
              <Input
                type={showPasswordVerify ? "text" : "password"}
                name="verifyPassword"
                value={formData.verifyPassword}
                onChange={handleInputChange}
                placeholder="Confirme a sua senha"
                required
                className={`input-text ${passwordMatchError ? 'invalid' : ''}`}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton onClick={handleTogglePasswordVerify}>
                      {showPasswordVerify ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              {passwordMatchError && (
                <p style={{ color: "red" }}>{passwordMatchError}</p>
              )}
            </div>
          </div>
          <div className="opcional">
            <h4>Observação (opcional)</h4>
            <textarea
              name="notes"
              cols="60"
              rows="10"
              placeholder="Sua mensagem"
              className="contact-inputs"
              value={formData.notes}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="legal">
            <input
              type="checkbox"
              id="termos"
              name="termos"
              onChange={handleTermsChange}
              required
              checked={formData.termos}
            />
            <label htmlFor="termos">
              Ao marcar esta caixa e clicar em Enviar, aceito o tratamento de
              meus dados pessoais por{" "}
              <a href="/avisoLegal" target="_blank">
                [Nome da sua organização]
              </a>{" "}
              conforme explicado no seu{" "}
              <a href="/avisoLegal" target="_blank">
                Aviso Legal de Proteção de Dados
              </a>
              , que inclui: 1) a coordenação e gestão de voluntários, e 2) a
              comunicação sobre atividades e oportunidades relacionadas.
            </label>
          </div>
          {error && <p style={{ color: "red", marginBottom:"1rem" }}>{error}</p>}
          <button
            className={`SV${isLoading ? " submit-disabled" : ""}`}
            type="submit"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            Enviar
          </button>
        </form>
      </div>
      <footer className="App-footer"></footer>
    </div>
  );
}

export default FormularioLiderImigrante;
