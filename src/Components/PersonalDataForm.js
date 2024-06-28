import React, { useContext, useState } from 'react';
import { FormContext } from './FormContext';
import InputMask from 'react-input-mask';
import '../assets/styles/App.css';
import '../assets/styles/SejaVoluntario.css';
const PersonalDataForm = ({ nextStep }) => {
    const { updateFormData } = useContext(FormContext);
    const [localData, setLocalData] = useState({
        name: '',
        cpf: '',
        birthDate: '',
        phoneNumber: '',
        rede_social: '',
        crp: '',
        specialization: '',
        state: '',
    });

    const handleChange = (e) => {
        setLocalData({
            ...localData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = () => {
        updateFormData('personalData', localData);
        nextStep();
    };

    return (
        <form>
            <div className="input-field">
              <h4>1. Nome Completo<span>*</span></h4>
              <input
                className="input-text"
                type="text"
                name="name"
                placeholder="Digite seu nome"
                value={localData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-field">
              <h4>2. CPF<span>*</span></h4>
              <InputMask
                mask="999.999.999-99"
                value={localData.cpf}
                onChange={handleChange}
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
                value={localData.birthDate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-field">
              <h4>4. Número do WhatsApp para contato<span>*</span></h4>
              <InputMask
                mask="(99) 99999-9999"
                value={localData.phoneNumber}
                onChange={handleChange}
                placeholder="(DDD) Digite o número"
                required
                className="input-text"
                name="phoneNumber"
              />
            </div>
            <div className="input-field">
              <h4>5. Instagram(opcional)</h4>
              <input
                className="input-text"
                type="text"
                name="rede_social"
                placeholder="digite o nome de usuário"
                value={localData.rede_social}
                onChange={handleChange}
              />
            </div>
            <div className="input-field">
              <h4>CRP<span>*</span></h4>
              <InputMask
                mask="**/******"
                value={localData.crp}
                onChange={handleChange}
                placeholder="Digite seu CRP no formato XX/XXXXX"
                required
                className="input-text"
                name="crp"
              />
            </div>
            <div className="input-field">
              <h4>Área de especialização<span>*</span></h4>
              <select className="form-select" name="specialization" value={localData.specialization} onChange={handleChange} required>
                <option value="">-Selecione-</option>
                <option value="Aconselhamento Psicológico">Acolhimento Psicológico</option>
                <option value="Neuropsicologia">Neuropsicologia</option>
                <option value="Psicologia Clínica">Psicologia Clínica</option>
                <option value="Psicologia Comunitária">Psicologia Comunitária</option>
                <option value="Psicologia do Desenvolvimento">Psicologia do Desenvolvimento</option>
                <option value="Psicologia do Esporte">Psicologia do Esporte</option>
                <option value="Psicologia Educacional">Psicologia Educacional</option>
                <option value="Psicologia Experimental">Psicologia Experimental</option>
                <option value="Psicologia Forense">Psicologia Forense</option>
                <option value="Psicologia Infantil">Psicologia Infantil</option>
                <option value="Psicologia Organizacional e do Trabalho">Psicologia Organizacional e do Trabalho</option>
                <option value="Psicologia da Saúde">Psicologia da Saúde</option>
                <option value="Psicologia Social">Psicologia Social</option>
                <option value="Psicoterapia">Outros</option>
              </select>
            </div>
            <div className="input-field">
              <h4>Estado <span>*</span></h4>
              <select className="form-select" name="state" value={localData.state} onChange={handleChange} required>
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
            <button type="button" onClick={handleSubmit}>Next</button>
        </form>
    );
};

export default PersonalDataForm;
