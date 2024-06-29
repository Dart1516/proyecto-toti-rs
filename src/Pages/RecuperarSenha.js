import React, { useState } from "react";
import Header from "../Components/Header-NavMenu";
import "../assets/styles/Button.css";
import "../assets/styles/recuperarsenha.css"
import { Api } from "../services/api";

const RecuperarSenha = () => {
  const [recoveryMethod, setRecoveryMethod] = useState("email");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { recoveryMethod, email, phone } = this.state;

    try {
        const normalizedEmail = email.toLowerCase();
        const response = await Api.get(`/login/usuarios?email=${normalizedEmail}`);
      if (response.data.length === 0) {
        setError("Usuário não encontrado.");
        return;
      }

      // Proceed to Step 2 (code sending)
      this.props.onMoveToStep2(recoveryMethod, email, phone);
    } catch (error) {
      console.error("Error al verificar usuário:", error);
      setError("Ocorreu um erro. Tente novamente.");
    }
  };

  return (
    <div id="container" >
   <Header/>
<div id="body">
      <h2>Recuperar senha</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="recoveryMethod">Método de recuperação:</label>
          <select
            id="recoveryMethod"
            value={recoveryMethod}
            onChange={(e) => setRecoveryMethod(e.target.value)}
          >
            <option value="email">Email</option>
            <option value="sms">SMS</option>
          </select>
        </div>

        {recoveryMethod === "email" && (
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu email"
              required
            />
          </div>
        )}

        {recoveryMethod === "sms" && (
          <div className="form-group">
            <label htmlFor="phone">Número de telefone:</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Digite seu número de telefone"
              required
            />
          </div>
        )}

        <button type="submit" className="btn btn-primary">
          enviar
        </button>
        {error && <div className="error-message">{error}</div>}
      </form>
    </div>
    </div>
  
  );
};

export default RecuperarSenha;
