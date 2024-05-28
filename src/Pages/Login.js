import React from "react";
import Header from "../Components/Header-NavMenu";
import '../assets/styles/Login.css';
import login2 from "../assets/images/login/login2.png";



function Login () {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
<body>
{ /*login e register*/}

      

<h1 className="title">Iniciar Sessão</h1>

   <div className="Login">
    
      <div className="Login-img">

        <img src={login2} alt="logo" className="img" />
      </div>
      
      <div className="Login-form">
        
          <input id="email" className="btn-email" type="email" placeholder="Usuario" />
          <input id="pswd" className="btn-pwsd" type="email" placeholder="Senha" />

          <button  className="btn-log">Ingresar</button>

          <p> Pedir Horario</p>
          <p> agenda disponivel, dia y hora</p>
          <p> numero de whatsapp si posible </p>
          <p> plataforma que puede usar</p>
          <p> cidade</p>
          <p> tipo de voluntariado </p>
          <h3> Especialidad </h3>
          <h3> Yo autorizo que mis datos sean compartidos </h3>

      </div>
        
    </div>
</body>
 

      <footer>

      </footer>
    </div>
  );
}
export default Login;