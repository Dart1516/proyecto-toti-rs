import React from "react";
import Header from "../Components/Header-NavMenu";
import '../assets/styles/App.css';
import '../assets/styles/interfazLider.css';

const professionals = [
  {
    name: "Dr. Juan Pérez",
    profession: "Psicólogo",
    availability: "Martes a las 8",
    state: "São Paulo",
    email: "ejemplo1@gmail.com",
    phone: "123-456-7890",
    image: "login/login1.png"
  },
  {
    name: "Sra. Ana Gómez",
    profession: "Educadora Social",
    availability: "Miércoles a las 10",
    state: "Rio de Janeiro",
    email: "ejemplo2@gmail.com",
    phone: "987-654-3210",
    image: "login/login1.png"
  },
  {
    name: "Lic. Carlos Ruiz",
    profession: "Psicólogo",
    availability: "Viernes a las 14",
    state: "Curitiba",
    email: "ejemplo3@gmail.com",
    phone: "456-789-1230",
    image: "login/login1.png"
  }
];

function InterfazLider() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <div className="App-body">
        <h2>Bienvenido Líder</h2>
        <h3>Psicólogos Disponibles</h3>
        <div className="professional-list">
          {professionals.map((professional, index) => (
            <div key={index} className="professional-card">
              <div className="left-section">
                <img src={require(`../assets/images/${professional.image}`)} alt={professional.name} className="profile-image" />
                <div className="professional-info">
                  <h4>{professional.name}</h4>
                  <p>{professional.profession}</p>
                </div>
              </div>
              <div className="right-section">
                <p><strong>Disponibilidad:</strong> {professional.availability}</p>
                <p><strong>Estado:</strong> {professional.state}</p>
                <p><strong>Email:</strong> {professional.email}</p>
                <p><strong>Teléfono:</strong> {professional.phone}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InterfazLider;
