import React, { useState, useEffect } from 'react';
import Header from "../Components/Header-NavMenu";
import '../assets/styles/App.css';
import '../assets/styles/HomePage.css';
import psicologa from '../assets/images/psicologa.jpg'; 
import educador from "../assets/images/educador-social.jpg";
import lideres from "../assets/images/lideres.png";
import { Typography } from "@mui/material";
import Footer from "../Components/Footer";
import Video1 from "../assets/videos/home.mp4";
import Banner1 from "../assets/images/Banner1.jpeg";
import Banner2 from "../assets/images/Banner2.jpeg";
import Banner3 from "../assets/images/Banner3.jpeg";
import Banner4 from "../assets/images/Banner4.jpeg";
import Banner5 from "../assets/images/Banner5.jpeg";
import Banner6 from "../assets/images/Banner6.jpeg";
import Banner7 from "../assets/images/Banner7.jpeg";
import Banner8 from "../assets/images/Banner8.jpeg";

function Banner() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        Banner1,
        Banner2,
        Banner3,
        Banner4,
        Banner5,
        Banner6,
        Banner7,
        Banner8
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    return (
        <div className="banner-container">
            <div className="slideshow" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {slides.map((slide, index) => (
                    <div className="banner-slide" key={index}>
                        <img
                            src={slide}
                            alt={`rotative banner ${index + 1}`}
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
            <div className="button-container">
                <button onClick={prevSlide} className="button-galeria"> &lt; </button>
                <button onClick={nextSlide} className="button-galeria"> &gt; </button>
            </div>
        </div>
    );
}


function Principal() {
    return (
        <div className="App">
            <Header />
            <div className="body">
                <div className="background-main">
                    <div className='main'>
                        <div className='text-home'>
                            <div className='titulo-home'>
                                <h2>TOTERS do BEM,</h2>
                                <h2>SOS RIO GRANDE DO SUL</h2>
                            </div>
                            <p>Uma plataforma para conectar voluntários e recursos, visando oferecer ajuda prática e esperança àqueles afetados pelas inundações no RS, disponibilizando serviços com psicólogos e educadores sociais</p>  
                            <div className='sub-text-home'>
                                <a href="./demo">quero ser voluntário </a>
                                <a href='./JoinUs'>quero ser atendido</a>
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
                                <p>O especialista capaz de oferecer ajuda psicologica, dando as ferramentas para lidar com traumas, fornecerá suporte emocional, tratará estresse pós-traumático e ajudara na recuperação mental.</p>
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
                <div className='video-espacio'>
                        <div className='video'>
                        <video src={Video1} controls/>
                        </div>
                        <div className='text-video'>
                            <div className='titulo-video'>
                                <h2>Estragos no Rio Grande do Sul</h2>
                            </div>
                            <p>As chuvas que atingem o Rio Grande do Sul causam muita destruição. O governo do estado já considera a tragédia como a pior da história</p>  
                            <div className='sub-text-video'>
                                <a href="/Cadastro">quero ser voluntário </a>
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
                            <h2 className="h2-processo-voluntariado">registro</h2>
                            <p>complete o <a href="./JoinUs">formulário</a> de inscrição com seus dados pessoais</p>
                        </div>
                        <div className="proceso-texto-lideranca">
                            <h2 className="h2-processo-voluntariado">para onde vão meus dados?</h2>
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
                <div className='banner-espacio'>
                  <div className='texto-video'>
                  <h2 >Faça parte dos que fazem a diferença</h2>
                  </div>
                <section className="desplazarImagenes">
      <div className="contenedorImagenes">
        <img src={Banner1} alt='galeria de fotos'></img>
        <img src={Banner2} alt='galeria de fotos'></img>
        <img src={Banner3} alt='galeria de fotos'></img>
        <img src={Banner4} alt='galeria de fotos'></img>
        <img src={Banner5} alt='galeria de fotos'></img>
        <img src={Banner6} alt='galeria de fotos'></img>
        <img src={Banner7} alt='galeria de fotos'></img>
        <img src={Banner8} alt='galeria de fotos'></img>
        <img src={Banner1} alt='galeria de fotos'></img>
        <img src={Banner2} alt='galeria de fotos'></img>
        <img src={Banner3} alt='galeria de fotos'></img>
      </div>
    </section>
                </div>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default Principal;
