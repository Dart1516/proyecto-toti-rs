import React from "react";
import Header from "../Components/Header-NavMenu";
import '../assets/styles/App.css';
import '../assets/styles/HomePage.css'

function Principal() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <body>
        <div className="background-main">
          <div className='main'>
            <div className='text-home'>
              <div className='titulo-home'>
                <h2>TOTERS do BEM</h2>
                <h1> SOS rio grande do sul</h1>
              </div>
              <h3>nosso objetivo é encaminhá-lo à ajuda emocional gratuita e online</h3>  
                <div className='sub-text-home'>
                  <a href="./demo">Quero ser atendido</a>
                  <a href='./JoinUs'>Quero ser voluntário</a>
                </div>
                </div>
            </div>
          </div>
      </body>
      <footer>

      </footer>
    </div>
  );
}

export default Principal;
