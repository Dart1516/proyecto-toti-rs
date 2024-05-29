import React, { useState } from "react";
import "../assets/styles/FormUsuario.css";
import Header from "../Components/Header-NavMenu";

export default function FormUsuario() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    genero: '',
    oriSex: '',
    interests: [],
    comments: '',
    availability: 'morning',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        interests: checked
          ? [...prevData.interests, value]
          : prevData.interests.filter((interest) => interest !== value),
      }));
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Nome é obrigatório";
    if (!formData.email) newErrors.email = "Email é obrigatório";
    if (!formData.phone) newErrors.phone = "Telefone é obrigatório";
    if (!formData.genero) newErrors.genero = "Gênero é obrigatório";
    if (!formData.oriSex) newErrors.oriSex = "Orientação Sexual é obrigatório";
    if (formData.interests.length === 0) newErrors.interests = "Selecione pelo menos um serviço de interesse";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      console.log("Form submitted successfully", formData);
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <body>
      <header className="App-header">
        <Header />
      </header>
      <div className="forUSario">
        <div className="forContac">
          <h1 className="titleform">Quero ser Atendido</h1>
          <form className="contacto" onSubmit={handleSubmit}>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="nome e sobrenome"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span className="error">{errors.name}</span>}

            <input
              type="email"
              id="email"
              name="email"
              placeholder="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}

            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="telefone"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <span className="error">{errors.phone}</span>}

            <div className="Genero-orientação">
              <div className="forGenero">
                <select id="gene" name="genero" className="genero" value={formData.genero} onChange={handleChange}>
                  <option value="">Genero</option>
                  <option value="Homem (cisgênero)">Homem (cisgênero)</option>
                  <option value="Mulher (cisgênero)">Mulher (cisgênero)</option>
                  <option value="Homem trans">Homem trans</option>
                  <option value="Não binário">Não binário</option>
                  <option value="Gênero fluido">Gênero fluido</option>
                  <option value="Agênero">Agênero</option>
                  <option value="Bigênero">Bigênero</option>
                  <option value="Prefiro não dizer">Prefiro não dizer</option>
                  <option value="Outro">Outro</option>
                </select>
                {errors.genero && <span className="error">{errors.genero}</span>}
              </div>

              <div className="forOrSexual">
                <select id="oriSex" name="oriSex" className="oriSex" value={formData.oriSex} onChange={handleChange}>
                  <option value="">Orientação Sexual</option>
                  <option value="Heterossexual">Heterossexual</option>
                  <option value="Homossexual">Homossexual</option>
                  <option value="Bissexual">Bissexual</option>
                  <option value="Assexual">Assexual</option>
                  <option value="Pansexual">Pansexual</option>
                  <option value="Agênero">Agênero</option>
                  <option value="Bigênero">Bigênero</option>
                  <option value="Prefiro não dizer">Prefiro não dizer</option>
                  <option value="Outro">Outro</option>
                </select>
                {errors.oriSex && <span className="error">{errors.oriSex}</span>}
              </div>
            </div>

            <div className="servicio">
              <h2>serviços de interesse:</h2>
              <div className="forServ">
                <input
                  type="checkbox"
                  id="interestPsico"
                  name="interests"
                  value="psicólogos"
                  checked={formData.interests.includes("psicólogos")}
                  onChange={handleChange}
                />
                <label htmlFor="interestPsico" className="psico">psicólogos</label>

                <input
                  type="checkbox"
                  id="interestEduca"
                  name="interests"
                  value="educadores sociais"
                  checked={formData.interests.includes("educadores sociais")}
                  onChange={handleChange}
                />
                <label htmlFor="interestEduca" className="eduSoc">educadores sociais</label>

                <input
                  type="checkbox"
                  id="interestVol"
                  name="interests"
                  value="lideranças voluntários"
                  checked={formData.interests.includes("lideranças voluntários")}
                  onChange={handleChange}
                />
                <label htmlFor="interestVol" className="liderV">lideranças voluntários</label>
              </div>
              {errors.interests && <span className="error">{errors.interests}</span>}

              <div className="forTexTarea">
                <textarea
                  id="comments"
                  name="comments"
                  rows="15"
                  cols={580}
                  className="comments"
                  value={formData.comments}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>

            <div className="forhor">
              <select id="availability" name="availability" value={formData.availability} onChange={handleChange}>
                <option value="morning">Mañana</option>
                <option value="afternoon">Tarde</option>
                <option value="night">Noche</option>
              </select>
            </div>

            <button type="submit" className="btnEnviar">Enviar formulario</button>
          </form>
        </div>
      </div>
    </body>
  );
}
