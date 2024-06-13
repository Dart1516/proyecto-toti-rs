import React, { useState, useEffect } from 'react';
import Header from '../Components/Header-NavMenu';
import { Api } from '../services/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBuilding, faEllipsisH, faSearch } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/interfazLider.css';
import '../assets/styles/App.css';

function InterfazLider() {
  // Fetch voluntarios
  const [psicologos, setPsicologos] = useState([]);
  const [educadorSocial, setEducadorSocial] = useState([]);
  
  // Añade esta línea para definir el estado del filtro
  const [filter, setFilter] = useState({
    name: '',
    specialization: '',
    state: ''
  });

  useEffect(() => {
    async function Voluntarios() {
      try {
        let response = await Api.get('/voluntarios');
        setEducadorSocial(response.data.educador);
        setPsicologos(response.data.psicologo);
      } catch (error) {
        console.error('Error al cargar los datos de los psicólogos:', error);
      }
    }

    Voluntarios();
  }, []);

  // Calcular los conteos
  const psicologosCount = psicologos.length;
  const educadoresCount = educadorSocial.length;
  const total = psicologosCount + educadoresCount;

  // Filtrar voluntarios
  const filteredPsicologos = psicologos.filter(psicologo =>
    psicologo.name.toLowerCase().includes(filter.name.toLowerCase()) &&
    psicologo.specialization.toLowerCase().includes(filter.specialization.toLowerCase()) &&
    psicologo.state.toLowerCase().includes(filter.state.toLowerCase())
  );

  const filteredEducadores = educadorSocial.filter(educador =>
    educador.name.toLowerCase().includes(filter.name.toLowerCase()) &&
    educador.state.toLowerCase().includes(filter.state.toLowerCase())
  );

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <div className="App-body">
        <h2 className="titulo-table">Cadastro especialidades</h2>
        <div className="cards-container">
          <div className="card">
            <FontAwesomeIcon icon={faUser} className="icon-table"/>
            <p>{psicologosCount}</p>
            <h3>Psicólogos</h3>
          </div>
          <div className="card">
            <FontAwesomeIcon icon={faBuilding} className="icon-table"/>
            <p>{educadoresCount}</p>
            <h3>Educadores</h3>
          </div>
          <div className="card">
            <FontAwesomeIcon icon={faEllipsisH} className="icon-table"/>
            <p>{total}</p>
            <h3>Total</h3>
          </div>
        </div>
        
        <h2 className="titulo-table">Voluntarios</h2>
        
        <div className="filter-container">
        <div className='input-space'>
  <h4>Buscar</h4>
  <div className='input-icon'>
    <FontAwesomeIcon icon={faSearch} className="icon-lupa" />
    <input
      type="text"
      placeholder="Nome"
      value={filter.name}
      onChange={(e) => setFilter({...filter, name: e.target.value})}
      className='input-filter'
    />
  </div>
</div>
        <div className='input-space'>
          <h4>Especialidade</h4>
          <input
            type="text"
            placeholder="Especialidade"
            value={filter.specialization}
            onChange={(e) => setFilter({...filter, specialization: e.target.value})}
            className='input-filter'
          />
        </div>
        <div className='input-space'>
          <h4>Estado/Cidade</h4>
          <input
            type="text"
            placeholder="Estado/Cidade"
            value={filter.state}
            onChange={(e) => setFilter({...filter, state: e.target.value})}
            className='input-filter'
          />
        </div>
        </div>
        <h2 className='title-count'>Todos <span className='background-total'>{total}</span></h2>
        <div className='table-container'>
          <table className='professional-table'>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Día</th>
                <th>Especialidade</th>
                <th>Teléfone</th>
                <th>Email</th>
                <th>Estado/Cidade</th>
              </tr>
            </thead>
            <tbody>
              {filteredPsicologos.map(psicologo => (
                <tr key={psicologo.id}>
                  <td>{psicologo.name}</td>
                  <td>{psicologo.day}</td>
                  <td>{psicologo.specialization}</td>
                  <td>{psicologo.phoneNumber}</td>
                  <td>{psicologo.email}</td>
                  <td>{psicologo.state}</td>
                </tr>
              ))}
              {filteredEducadores.map(educador => (
                <tr key={educador.id}>
                  <td>{educador.name}</td>
                  <td>{educador.day}</td>
                  <td>{educador.specialization}</td>
                  <td>{educador.phoneNumber}</td>
                  <td>{educador.email}</td>
                  <td>{educador.state}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div> 
      </div> 
    </div>
  );
}

export default InterfazLider;
