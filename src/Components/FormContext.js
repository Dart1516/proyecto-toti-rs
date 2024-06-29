import React, { createContext, useState } from 'react';
import '../assets/styles/App.css';
import '../assets/styles/SejaVoluntario.css';
export const FormContext = createContext();

export const FormProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        personalData: {},
        specificData: {},
        authData: {},
    });

    const updateFormData = (step, data) => {
        setFormData((prevData) => ({
            ...prevData,
            [step]: data,
        }));
    };

    return (
        <FormContext.Provider value={{ formData, updateFormData }}>
            {children}
        </FormContext.Provider>
    );
};
