import React from 'react';
import Header from "../Components/Header-NavMenu";
import '../assets/styles/App.css';
import '../assets/styles/SejaVoluntario.css';
import "../assets/styles/avisolegal.css"

function TermoResponsabilidadeInstituicoes() {
  return (
    <div className="App">
      <div className="App-header">
        <Header />
      </div>
      <div className='container-body'>
       <div className="aviso-legal">
        <h2>Termo de Responsabilidade para Instituições</h2>
        
        <div className="legal-content">
          <p>
            Ao marcar a caixa abaixo, a instituição [Nome da Instituição] concorda com os seguintes termos ao utilizar a plataforma de conexão da [Nome da sua instituição] para encontrar psicólogos voluntários:
          </p>

          <h3>1. Acordos de Sessões</h3>
          <p>Os acordos sobre a quantidade e periodicidade das sessões serão estabelecidos diretamente entre os pacientes e os psicólogos, de acordo com a abordagem terapêutica e a autonomia do profissional.</p>

          <h3>2. Sessões Remotas</h3>
          <p>As sessões serão realizadas exclusivamente de forma online, utilizando ferramentas de comunicação adequadas.</p>

          <h3>3. Esclarecimento Importante</h3>
          <p>A [Nome da sua instituição] atua apenas como um divulgador de oportunidades para o serviço voluntário de psicologia. Não nos responsabilizamos pela atuação ou comportamento dos psicólogos.</p>

          <h3>4. Denúncias e Conduta Ética</h3>
          <p>Instituições que identificarem psicólogos que não seguem as normas técnicas de conduta e as normas éticas devem reportar à [Nome da sua instituição], que tomará medidas apropriadas, incluindo a retirada do psicólogo da plataforma.</p>

          <p>
            Ao marcar a caixa, confirmo que li e aceito os termos acima:
          </p>
          <input type="checkbox" id="acceptTerms" name="acceptTerms" />
          <label htmlFor="acceptTerms">Eu aceito os termos de responsabilidade</label>
        </div>
      </div> 
      </div>
      

      <footer className="App-footer"></footer>
    </div>
  );
}

export default TermoResponsabilidadeInstituicoes;
