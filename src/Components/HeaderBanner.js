import React from "react";

import "../assets/styles/HeaderBanner.css";
import { Button } from "./Button";
import { YellowLine } from "./YellowLine";

export function HeaderBanner() {
  return (
    <div className="background-main">
      <div className="main">
        <div className="text-home">
          <div className="titulo-home">
            <h1>TOTERS DO BEM,</h1>
            <h1>SOS RIO GRANDE DO SUL</h1>
            <YellowLine />
            {/* <p> <i>Somos a maior comunidade de imigrantes profissionais de tecnologia do Brasil.</i></p> */}
          </div>
          <div className="subtitulo-home">
            <p>
              Uma plataforma para conectar voluntários e recursos, visando
              oferecer ajuda prática e esperança àqueles afetados pelas
              inundações no RS, disponibilizando serviços com psicólogos e
              educadores sociais.
            </p>
          </div>
          <Button />
        </div>
      </div>
    </div>
  );
}
