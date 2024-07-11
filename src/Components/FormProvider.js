// Components/FormProvider.js
import React, { createContext, useState, useContext } from 'react';

const FormContext = createContext();

export const useFormContext = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    name: "",
    cpf: "",
    birthDate: "",
    phoneNumber: "",
    email: "",
    verifyEmail: "",
    password: "",
    verifyPassword: "",
    state: "",
    notes: "",
    termos: false,
    // Campos específicos
    certificate: "",
    profession: "",
    insta: "",
    city: "",
    neighborhood: "",
    availability: "",
    additionalDays: [{ day: "", hour: "" }],
    organization: "",
    cnpj: "",
    area: "",
    address: "",
    rede_social: "",
    crp: "",
    specialization: "",
    day: "",
    hour: "",
    termos1: false,
  });

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};
