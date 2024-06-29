import React, { useState } from 'react';
import PersonalDataForm from '../Components/PersonalDataForm';
import SpecificDataForm from '../Components/SpecificDataForm';
import AuthDataForm from '../Components/AuthDataForm';
import { FormProvider } from '../Components/FormContext';
import Header from '../Components/Header-NavMenu';
import '../assets/styles/App.css';
import '../assets/styles/SejaVoluntario.css';
const FormularioOtro = () => {
    const [step, setStep] = useState(1);

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    return (
        <FormProvider>
            <div className="App SV">
                <div className="App-header">
                    <Header />
                </div>
                <div className="background-image"></div>
                <div className="container">
                    <div className="container-titulo">
                        <h2>SOS Rio Grande do Sul </h2>
                        <h2>Cadastro de Psicólogos Voluntários</h2>
                    </div>
                    {step === 1 && <PersonalDataForm nextStep={nextStep} />}
                    {step === 2 && <SpecificDataForm nextStep={nextStep} prevStep={prevStep} />}
                    {step === 3 && <AuthDataForm prevStep={prevStep} />}
                </div>
            </div>
        </FormProvider>
    );
};

export default FormularioOtro;
