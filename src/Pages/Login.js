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



      </div>
        
    </div>
</body>
 

      <footer>

      </footer>
    </div>
  );
}
export default Login;