import React, { useContext, useState } from 'react';
import { FormContext } from './FormContext';
import { FaTrash, FaPlus } from 'react-icons/fa';
import '../assets/styles/App.css';
import '../assets/styles/SejaVoluntario.css';
const SpecificDataForm = ({ nextStep, prevStep }) => {
    const { updateFormData } = useContext(FormContext);
    const [additionalDays, setAdditionalDays] = useState([{ day: "", hour: "" }]);
    const [localData, setLocalData] = useState({
        additionalDays: [{ day: "", hour: "" }],
    });

    const handleDayChange = (index, event) => {
        const values = [...additionalDays];
        values[index][event.target.name] = event.target.value;
        setAdditionalDays(values);
        setLocalData({ ...localData, additionalDays: values });
    };

    const addDay = () => {
        const newDays = [...additionalDays, { day: "", hour: "" }];
        setAdditionalDays(newDays);
        setLocalData({ ...localData, additionalDays: newDays });
    };

    const removeDay = (index) => {
        const values = [...additionalDays];
        values.splice(index, 1);
        setAdditionalDays(values);
        setLocalData({ ...localData, additionalDays: values });
    };

    const handleSubmit = () => {
        updateFormData('specificData', localData);
        nextStep();
    };

    return (
        <form>
            {additionalDays.map((additionalDay, index) => (
                <div className="form-group formulario" key={index}>
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
                            <button type="button" onClick={addDay}><FaPlus /></button>
                        )}
                    </div>
                </div>
            ))}
            <button type="button" onClick={prevStep}>Back</button>
            <button type="button" onClick={handleSubmit}>Next</button>
        </form>
    );
};

export default SpecificDataForm;
