import React from "react";
import Header from "../Components/Header-NavMenu";
import '../assets/styles/App.css';
import '../assets/styles/HomePage.css'
import HomePage from '../assets/images/home.svg'

function Principal() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <body>
          <div className='main'>
            <div className='text-home'>
              <div className='titulo-home'>
                <h2>unidos pelo</h2>
                <h1>rio grande do sul</h1>
              </div>
              <h3>uma rede de apoio para você. não está sozinho</h3>  
                <div className='sub-text-home'>
                  <a href="./demo">Quero ser atendido</a>
                  <a href='./JoinUs'>Quero ser voluntário</a>
                </div>
            </div>
              <img src={HomePage} className="HomePage" alt="Imagem de home" width='500px'/>
          </div>
      </body>
      <footer>

      </footer>
    </div>
  );
}

export default Principal;
