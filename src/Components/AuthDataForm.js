import React, { useContext, useState } from 'react';
import { FormContext } from './FormContext';
import { Api } from '../services/api';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/App.css';
import '../assets/styles/SejaVoluntario.css';
const AuthDataForm = ({ prevStep }) => {
    const navigate = useNavigate();
    const { formData } = useContext(FormContext);
    const [localData, setLocalData] = useState({
        email: '',
        password: '',
        verifyPassword: '',
        verifyEmail: '',
    });
    const [passwordError, setPasswordError] = useState("");
    const [passwordMatchError, setPasswordMatchError] = useState("");
    const [emailMatchError, setEmailMatchError] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setLocalData({
            ...localData,
            [e.target.name]: e.target.value,
        });

        if (e.target.name === "password") {
            validatePassword(e.target.value);
        }

        if (e.target.name === "verifyPassword") {
            setPasswordMatchError(e.target.value !== localData.password ? "Las contraseñas no coinciden." : "");
        }

        if (e.target.name === "verifyEmail") {
            setEmailMatchError(e.target.value !== localData.email ? "Los correos electrónicos no coinciden." : "");
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

    const handleSubmit = async () => {
        if (localData.password !== localData.verifyPassword || localData.email !== localData.verifyEmail) {
            return;
        }

        const completeData = {
            ...formData.personalData,
            ...formData.specificData,
            email: localData.email.toLowerCase(),
            password: localData.password,
        };

        try {
            const response = await Api.post('/cadastro/psicologos', completeData);
            console.log('dados enviados com sucesso:', response.data);
            navigate('/thankyou');
        } catch (error) {
            console.error('Error al enviar datos:', error);
            setError('Error al enviar datos: ' + (error.response?.data?.message || error.message));
        }
    };

    return (
        <form>
            <div className="inputs formCadastro">
                <div className="input-field">
                    <h4>Email para cadastro<span>*</span></h4>
                    <input
                        type="email"
                        name="email"
                        value={localData.email}
                        onChange={handleChange}
                        placeholder="Digite o seu e-mail"
                        required
                        className="input-text"
                    />
                </div>
                <div className="input-field">
                    <h4>Verificação do Email<span>*</span></h4>
                    <input
                        type="email"
                        name="verifyEmail"
                        value={localData.verifyEmail}
                        onChange={handleChange}
                        placeholder="Confirme o seu e-mail"
                        required
                        className="input-text"
                    />
                    {emailMatchError && <p style={{ color: 'red' }}>{emailMatchError}</p>}
                </div>
                <div className="input-field">
                    <h4>Senha<span>*</span></h4>
                    <input
                        type="password"
                        name="password"
                        value={localData.password}
                        onChange={handleChange}
                        placeholder="Crie sua senha"
                        required
                        className="input-text"
                    />
                    {passwordError && <p>{passwordError}</p>}
                </div>
                <div className="input-field">
                    <h4>Verificação de Senha<span>*</span></h4>
                    <input
                        type="password"
                        name="verifyPassword"
                        value={localData.verifyPassword}
                        onChange={handleChange}
                        placeholder="Confirme a sua senha"
                        required
                        className="input-text"
                    />
                    {passwordMatchError && <p style={{ color: 'red' }}>{passwordMatchError}</p>}
                </div>
            </div>
            <button type="button" onClick={prevStep}>Back</button>
            <button type="button" onClick={handleSubmit}>Submit</button>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
    );
};

export default AuthDataForm;
