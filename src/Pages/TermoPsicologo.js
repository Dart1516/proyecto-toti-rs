import React from 'react';
import Header from "../Components/Header-NavMenu";
import '../assets/styles/App.css';
import '../assets/styles/SejaVoluntario.css';
import "../assets/styles/avisolegal.css"

function TermoResponsabilidadePsicologos() {
  return (
    <div className="App">
      <div className="App-header">
        <Header />
      </div>
      <div className='container-body'>
       <div className="aviso-legal">
        <h2>Termo de Responsabilidade para Psicólogos Voluntários</h2>
        
        <div className="legal-content">
          <p>
            Ao marcar a caixa abaixo, eu, [Nome do Psicólogo], registro profissional [Número do Registro], concordo com os seguintes termos de responsabilidade como psicólogo voluntário da [Nome da Instituição]:
          </p>

          <h3>1. Acordos de Sessões</h3>
          <p>Os acordos sobre a quantidade e periodicidade das sessões serão estabelecidos diretamente entre os pacientes e os psicólogos, de acordo com a abordagem terapêutica e a autonomia do profissional.</p>

          <h3>2. Sessões Remotas</h3>
          <p>As sessões serão realizadas exclusivamente de forma online, utilizando ferramentas de comunicação adequadas.</p>

          <h3>3. Confidencialidade</h3>
          <p>Manterei total confidencialidade sobre todas as informações compartilhadas pelos pacientes durante as sessões, conforme o código de ética profissional.</p>

          <h3>4. Pontualidade e Compromisso</h3>
          <p>Cumprirei os horários agendados e avisarei com antecedência mínima de 24 horas em caso de necessidade de reagendamento.</p>

          <h3>5. Esclarecimento Importante</h3>
          <p>A [Nome da sua instituição] atua apenas como um divulgador de oportunidades para o serviço voluntário de psicologia. Os acordos serão estabelecidos entre os pacientes e psicólogos. Não nos responsabilizamos pela atuação ou comportamento dos psicólogos.</p>

          <h3>6. Denúncias e Conduta Ética</h3>
          <p>Psicólogos que não seguirem as normas técnicas de conduta e as normas éticas serão retirados da plataforma caso haja alguma denúncia.</p>

          <h3>7. Conformidade com o CRP</h3>
          <p>Confirmo que estou sem nenhum problema com o CRP, que meu registro no CRP está ativo e sem pendências. Também estou cadastrado no Cadastro e-Psi, permitindo a psicoterapia no formato online.</p>

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

export default TermoResponsabilidadePsicologos;
