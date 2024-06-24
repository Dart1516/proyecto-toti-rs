import React from "react";
import Header from "../Components/Header-NavMenu";
import '../assets/styles/App.css';
import '../assets/styles/HomePage.css'
import psicologa from '../assets/images/psicologa.jpg'; 
import educador from "../assets/images/educador-social.jpg";
import lideres from "../assets/images/lideres.png";
import { Typography } from "@mui/material";
import Footer from "../Components/Footer";
 
function Principal() {
  return (
    <div className="App">
    
        <Header/>
     
      <body className="body">
        <div className="background-main">
          <div className='main'>
            <div className='text-home'>
              <div className='titulo-home'>
                <h2>TOTERS do BEM</h2>
                <p> <i>Somos a maior comunidade de imigrantes profissionais de tecnologia do Brasil.</i></p>
                <h1> SOS rio grande do sul</h1>
              </div>
              <h3>Plataforma para conectar voluntarios e recursos, visando oferecer ajuda prática e esperança áqueles afetados pelas inundações no RS,disponibilizando serviços como ajuda emocional gratuita e online  com Psicologos prontros para ajudar e socorrer seus refugiados, e educadores sociais que caminharão lado a lado,  juntos na jornada de recuperação dos mais afetados</h3>  
                <div className='sub-text-home'>
                  <a href="./demo">Liderança Emigrante </a>
                  <a href='./JoinUs'>Quero ser voluntário</a>
                </div>
                </div>
            </div>
          </div>
          <div className="voluntariado">
          <div className='tipo-vo-texto'>
              <Typography variant="h3"><strong>Como você pode ajudar?</strong></Typography>
              <p>sua ajuda é crucial para fornecer apoio emergencial às comunidades afetadas, há várias maneiras pelas quais você pode contribuir:</p>
            </div>
            <div className="card-container">
        <div className="card-item">
          <div className="card-img">
          <img src={psicologa} alt="Voluntariado Psicológico" />
          </div>
          <div className="card-text">
          <h2>Voluntariado Psicológico</h2>
          <p>O especialista capaz de oferecer ajuda psicologica, dando as ferramentas para lidar com traumas, fornecerá suporte emocional, tratará estresse pós-traumático e ajudara na recuperação mental. </p>
          <a href="./JoinUs">Junte-se a causa</a>
          
          </div>
        </div>
        <div className="card-item">
        <div className="card-img">
        <img src={educador} alt="Educadores Sociais" />
        </div>
           
        <div className="card-text">
            <h2>Educadores Sociais</h2>
            <p>Profissionais que trabalham para promover o bem-estar e a inclusão social de individuos e comunidades afetadas pela enchente e que precisam começar do zero.</p>
            <a href="./JoinUs">Junte-se a causa</a>
       </div>
        </div>
        <div className="card-item">
         
        <div className="card-img">
        <img src={lideres} alt="Líderes Comunitários" />
        </div>
        <div className="card-text">
            <h2>Líderes Comunitários</h2>
            <p>pessoas que organizam e mobilizam ações de apoio em situações de crise, capazes de orientar e direcionar personas em alto nivel de estresse.</p>
            <a href="./JoinUs">Junte-se a causa</a>
         </div>
        </div>
      </div>
            
          </div>
          
    <div id="registro-processo">
    <div className="proceso-voluntariado">
      <h1>processo de voluntariado</h1>
      <div className="proceso-texto">
        <h2 className="h2-processo-voluntariado">registro</h2>
        <p>complete o <a href="./JoinUs">formulário</a> de inscrição com seus dados pessoais e experiência.</p>
      </div>
      <div className="proceso-texto"> 
        <h2 className="h2-processo-voluntariado">para onde vão meus dados?</h2>
        <p> iram ao banco de dados que estará disponivel para os lideres dos refugiados, que necessitam da ajuda de você</p>
      </div>
      <div className="proceso-texto"> 
        <h2 className="h2-processo-voluntariado">depois do cadastro</h2>
        <p>o lider do refugiado que precise da sua ajuda entrará em contato, e você será designado para uma área específica, com base na suas habilidades e disponibilidade.</p>
      </div>
      <div className="proceso-texto contato"> 
        <h2 className="h2-processo-voluntariado">depois do contato</h2>
        <p>Começe a oferecer seu apoio às comunidades afetadas. O líder fornecerá os detalhes do serviço.</p>
      </div>
      

    </div>
    <div className="proceso-voluntariado lideranca">
      <h1>processo de liderança</h1>
      <div className="proceso-texto-lideranca">
        <h2  className="h2-processo-voluntariado">registro</h2>
        <p>complete o <a href="./JoinUs">formulário</a> de inscrição com seus dados pessoais</p>
      </div>
      <div className="proceso-texto-lideranca"> 
        <h2  className="h2-processo-voluntariado">para onde vão meus dados?</h2>
        <p> só você terá acesso a seus dados</p>
      </div>
      <div className="proceso-texto-lideranca"> 
        <h2 className="h2-processo-voluntariado">depois do cadastro</h2>
        <p>com o email e a senha que você cadastrou, terá acesso a lista dos voluntarios disponiveis para atentimento dos seus refugiados</p>
      </div>
      <div className="proceso-texto-lideranca"> 
        <h2 className="h2-processo-voluntariado">contato</h2>
        <p>Será disponivilizado telefone e email do voluntario para você entrar en contato e receber a ajuda que necessitam o mais rápido possivel</p>
      </div>
      

    </div>
    </div>  
   
      </body>
      <footer>
         <Footer/>
      </footer>
     
    </div>
  );
}

export default Principal;
