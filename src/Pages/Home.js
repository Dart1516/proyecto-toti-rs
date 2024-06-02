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
                <p> <i>Somos a maior comunidade de imigrantes profissionais de tecnologia do Brasil.</i></p>
                <h1> SOS rio grande do sul</h1>
              </div>
              <h3>nosso objetivo é encaminhá-lo à ajuda emocional gratuita e online</h3>  
                <div className='sub-text-home'>
                  <a href="./demo">Liderança Emigrante </a>
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
          
      <div className="card-container">
        <div className="card-item">
            
            <img src={psicologa} alt="Voluntariado Psicológico" />
            <h2>Voluntariado Psicológico</h2>
         
        </div>
        <div className="card-item">
        
           
            <img src={educador} alt="Educadores Sociais" />
            <h2>Educadores Sociais</h2>
       
        </div>
        <div className="card-item">
         
           
            <img src={lideres} alt="Líderes Comunitários" />
            <h2>Líderes Comunitários</h2>
         
        </div>
      </div>
    <div id="registro-processo">
    <div className="proceso-voluntariado">
      <h1>processo de voluntariado</h1>
      <div className="proceso-texto">
        <h2>registro</h2>
        <p>complete o <a href="./JoinUs">formulário</a> de inscrição com seus dados pessoais e experiência.</p>
      </div>
      <div className="proceso-texto"> 
        <h2>para onde vão meus dados</h2>
        <p> iram ao banco de dados que estará disponivel para os lideres dos refugiados, que necessitam da ajuda de você</p>
      </div>
      <div className="proceso-texto"> 
        <h2>depois do cadastro</h2>
        <p>o lider do refugiado que precise da sua ajuda entrará em contato, e você será designado para uma área específica, com base na suas habilidades e disponibilidade.</p>
      </div>
      <div className="proceso-texto"> 
        <h2>depois do contato</h2>
        <p>Começe a oferecer seu apoio às comunidades afetadas. O líder fornecerá os detalhes do serviço.</p>
      </div>
      

    </div>
    <div className="proceso-voluntariado lideranca">
      <h1>processo de liderança</h1>
      <div className="proceso-texto-lideranca">
        <h2>registro</h2>
        <p>complete o <a href="./JoinUs">formulário</a> de inscrição com seus dados pessoais</p>
      </div>
      <div className="proceso-texto-lideranca"> 
        <h2>para onde vão meus dados</h2>
        <p> só você terá acesso a seus dados</p>
      </div>
      <div className="proceso-texto-lideranca"> 
        <h2>depois do cadastro</h2>
        <p>com o email e a senha que você cadastrou, terá acesso a lista dos voluntarios disponiveis para atentimento dos seus refugiados</p>
      </div>
      <div className="proceso-texto-lideranca"> 
        <h2>contato</h2>
        <p>Será disponivilizado telefone e email do voluntario para você entrar en contato e receber a ajuda que necessitam o mais rápido possivel</p>
      </div>
      

    </div>
    </div>
   
      </body>
    </div>
  );
}

export default Principal;
