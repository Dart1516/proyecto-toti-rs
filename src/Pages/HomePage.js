import React from "react";
import Header from "../Components/Header-NavMenu";
import '../assets/styles/App.css';
import '../assets/styles/HomePage.css'
import psicologa from '../assets/images/psicologa.jpg'; 
import educador from "../assets/images/educador-social.jpg";
import lideres from "../assets/images/lideres.png";
import voluntario from '../assets/images/voluntariado 1.jpeg';
 
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
          <div className="voluntariado">
          <div className='tipo-vo-texto'>
              <h1>Como você pode ajudar?</h1>
              <p>sua ajuda é crucial para fornecer apoio emergencial às comunidades afetadas, há várias maneiras pelas quais você pode contribuir:</p>
            </div>
            <div className="voluntariado-img"></div>
          </div>
          <div className="accordion">
      <div className="accordion-container">
        <div className="accordion-item">
          <div className="accordion-content">
            <h2>Voluntariado</h2>
            <img src={psicologa} alt="Voluntariado Psicológico" />
            <h2>Psicológico</h2>
          </div>
        </div>
        <div className="accordion-item">
          <div className="accordion-content">
            <h2>Educadores</h2>
            <img src={educador} alt="Educadores Sociais" />
            <h2>Sociais</h2>
          </div>
        </div>
        <div className="accordion-item">
          <div className="accordion-content">
            <h2>Líderes</h2>
            <img src={lideres} alt="Líderes Comunitários" />
            <h2>Comunitários</h2>
          </div>
        </div>
      </div>
    </div>
    <div className="proceso-voluntariado">
      <h1>processo de voluntariado</h1>
      <div className="proceso-texto">
        <h2>registro</h2>
        <p>complete o <a href="./JoinUs">formulário</a> de inscrição com seus dados pessoais e experiência.</p>
      </div>
      <div className="proceso-texto"> 
        <h2>capacitação</h2>
        <p>participe de uma breve sessão de capacitação onde forneceremos todas as informações necessárias para sua função.</p>
      </div>
      <div className="proceso-texto"> 
        <h2>atribuição</h2>
        <p>você será designado para uma área específica com base em suas habilidades e disponibilidade três dias após o envio do formulário.</p>
      </div>
      <div className="proceso-texto"> 
        <h2>ação</h2>
        <p>comece a oferecer seu apoio às comunidades afetadas, fazendo uma diferença real e positiva.</p>
      </div>
      

    </div>
      </body>
    </div>
  );
}

export default Principal;
