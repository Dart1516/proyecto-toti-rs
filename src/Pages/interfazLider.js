import React from "react";
import Header from "../Components/Header-NavMenu";
import '../assets/styles/App.css';
import '../assets/styles/interfazLider.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBuilding, faEllipsisH, faPlus } from '@fortawesome/free-solid-svg-icons';

const professionals = [
  {
    name: "Dr. Juan Pérez",
    profession: "Psicólogo",
    availability: "Martes a las 8",
    state: "São Paulo",
    city: "São Paulo",
    email: "ejemplo1@gmail.com",
    phone: "(11) 1234-5678",
    image: "login/login1.png"
  },
  {
    name: "Sra. Ana Gómez",
    profession: "Educadora Social",
    availability: "Miércoles a las 10",
    state: "Rio de Janeiro",
    city: "Rio de Janeiro",
    email: "ejemplo2@gmail.com",
    phone: "(21) 98765-4321",
    image: "login/login1.png"
  },
  {
    name: "Lic. Carlos Ruiz",
    profession: "Psicólogo",
    availability: "Viernes a las 14",
    state: "Curitiba",
    city: "Curitiba",
    email: "ejemplo3@gmail.com",
    phone: "(41) 4567-8910",
    image: "login/login1.png"
  },
  {
    name: "Lic. Carlos Ruiz",
    profession: "Psicólogo",
    availability: "Viernes a las 14",
    state: "Curitiba",
    city: "Curitiba",
    email: "ejemplo3@gmail.com",
    phone: "(41) 4567-8910",
    image: "login/login1.png"
  },
  {
    name: "Lic. Carlos Ruiz",
    profession: "Psicóloga",
    availability: "Viernes a las 14",
    state: "Curitiba",
    city: "Curitiba",
    email: "ejemplo3@gmail.com",
    phone: "(41) 4567-8910",
    image: "login/login1.png"
  }
];

function InterfazLider() {
  // Calcular los conteos
  const psicologosCount = professionals.filter(pro => pro.profession === "Psicólogo" || pro.profession === "Psicóloga").length;
  const educadoresCount = professionals.filter(pro => pro.profession === "Educador Social" || pro.profession === "Educadora Social").length;
  const otrosCount = professionals.filter(pro => pro.profession !== "Psicólogo" && pro.profession !== "Psicóloga" && pro.profession !== "Educador Social" && pro.profession !== "Educadora Social").length;
  const totalCount = professionals.length;

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
            <p>{otrosCount}</p>
            <h3>Otros</h3>
          </div>
          <div className="card">
            <FontAwesomeIcon icon={faPlus} className="icon-table"/>
            <p>{totalCount}</p>
            <h3>Total</h3>
          </div>
        </div>
        <h2 className="titulo-table">Voluntários</h2>
        <div className="table-container">
          <table className="professional-table">
            <thead>
              <tr>
                <th>Imagen</th>
                <th>Nome</th>
                <th>Especialidade</th>
                <th>Contato</th>
                <th>Estado/Cidade</th>
              </tr>
            </thead>
            <tbody>
              {professionals.map((professional, index) => (
                <tr key={index}>
                  <td>
                    <img
                      src={require(`../assets/images/${professional.image}`)}
                      alt={professional.name}
                      className="professional-image-table"
                    />
                  </td>
                  <td>{professional.name}</td>
                  <td>{professional.profession}</td>
                  <td className="contato-table">{professional.email}<br/>{professional.phone}</td>
                  <td>{professional.state}<br/>{professional.city}</td>
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
