import React from "react";
import Header from "../Components/Header-NavMenu";
import { HeaderBanner } from "../Components/HeaderBanner";
import { ContainerMain } from "../Components/ContainerMain";
import Footer from "../Components/Footer";


function Principal() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <body>
        <HeaderBanner />
        <ContainerMain />
        </body>
      <Footer />
    </div>
  );
}

export default Principal;
