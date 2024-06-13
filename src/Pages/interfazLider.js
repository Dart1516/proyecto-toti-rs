import React, { useState, useEffect } from 'react';
import Header from '../Components/Header-NavMenu';
import { Api } from '../services/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBuilding, faEllipsisH, faPlus } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/interfazLider.css'
import '../assets/styles/App.css'
function InterfazLider() {
  // fech voluntarios
  const [psicologos, setPsicologos] = useState([]);
  const [educadorSocial, setEducadorSocial] = useState([])
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

  // ==================================
  // Calcular los conteos
  
  const psicologosCount = psicologos.length;
  const educadoresCount = educadorSocial.length;
  const total = psicologosCount + educadoresCount;
  //========================================
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
        {psicologos.map(psicologo => (
            <tr key={psicologo.id}>
              <td>{psicologo.name}</td>
              <td>{psicologo.day}</td>
              <td>{psicologo.specialization}</td>
              <td>{psicologo.phoneNumber}</td>
              <td>{psicologo.email}</td>
              <td>{psicologo.state}</td>
            </tr>
          ))}
           {educadorSocial.map(educador => (
            <tr key={educador.id}>
              <td>{educador.name}</td>
              <td>{educador.day}</td>
              <td>{educador.phoneNumber}</td>
              <td className='contato-table'>{educador.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div> 
{/* tabela */}
      </div> 
      {/* left seccion */}
 </div>
      
  )}


export default InterfazLider;


