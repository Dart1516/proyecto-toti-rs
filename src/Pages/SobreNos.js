/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import Header from "../Components/Header-NavMenu";
import {Box, Grid, Container, Typography, styled} from "@mui/material"
import imgComunidade from "../assets/images/voluntarios.jpg"
import imgToters from "../assets/images/totersimg.png"
import "../../src/Pages/MaterialDeApoio"
import "../../src/Pages/Accesso"
import { Link } from "react-router-dom";
const About = () => {


  const StyledAbout = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.secondary,
      height: "100vh",
      display: "flex",
      flexDirection:"column",
      [theme.breakpoints.up('xs')]: { // <= mobile
          paddingTop: "100px",

      },
      [theme.breakpoints.up('md')]: { // >=mobile
          paddingTop: "50px",
      }
  }))
  const StyledText = styled("div")(() => ({
      alignItems: "center",
      width:"100%",
      padding:"5px"
  }))
  const StyledImgNoRadius = styled("img")(() => ({
    width: "80%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }));
  const StyledImgWithRadius = styled("img")(() => ({
    width: "80%",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }));

  return (
      <>
       <Header/>
       <StyledAbout>
                    <Container maxWidth="lg" gap={6}>
                    <Typography color="secondary.main" variant="h1" textAlign="center" pt={6}>Sobre Nós</Typography>
               




                 
       
 {/* conteudo da primeira div ---------------------------------------------------- */}
                    <Grid container spacing={2} gap={1} textAlign="center" justifyContent="center">
                    <Grid item xs={12} md={6}>
                    <StyledText>
                    <Typography  pt={3} pb={4}  textAlign="Start" justifyContent="center" variant="h6">
                                A Comunidade Toti é um coletivo de profissionais imigrantes de tecnologia no Brasil, unidos pelo desejo de crescer profissionalmente e de apoiar uns aos outros. Nossa missão é oferecer um espaço de acolhimento, onde o conhecimento e as experiências se entrelaçam para criar oportunidades de desenvolvimento e integração.
                                      </Typography>
                                      </StyledText>
                    </Grid>
                    {/* img da primeira div -------------------- */}
                    <Grid item xs={12} md={5} display="flex" justifyContent="center" alignItems="center">
                    <StyledImgNoRadius src={imgToters} />
</Grid> 
                    </Grid>
  {/* conteudo da segunda div -------------------------------------- */}
                    <Grid container spacing={2} gap={1} textAlign="center" justifyContent="center" direction={{ xs: 'column-reverse', md: 'row' }}>
                      {/* img da segunda div--------------------- */}
                    <Grid item xs={12} md={4} display="flex" justifyContent="center" alignItems="center" >
                    <StyledImgWithRadius  src={imgComunidade} />
                    </Grid>
                    <Grid item xs={12} md={7}>
                            <StyledText>
                          
                            <Typography pt={3} pb={4}  textAlign="start" justifyContent="center" variant="h6">Em resposta a os recentes eventos no Rio Grande do Sul, nossa comunidade está mobilizada para fazer a diferença. Com empatia e solidariedade, lançamos esta plataforma para conectar voluntários e recursos, visando oferecer ajuda prática e esperança àqueles afetados pelas inundações.  O intuito dessa plataforma é oferecer apoio psicosocial às famílias afetadas pela tragédia no RS, disponibilizando serviços com psicólogos e educadores sociais. Esses profissionais estão prontos para atender e auxiliar no processo de recuperação emocional e social das pessoas impactadas, garantindo um suporte integral e humanizado.
                                      </Typography>
                                      </StyledText>
</Grid></Grid>
<Box component="div" m={4}>
<Typography  width='100%' textAlign="center"  pt={4} pb={2} variant="h6" >
                                      Convidamos profissionais de todas as áreas a se juntarem a este movimento humanitário, contribuindo com seu tempo e habilidades em apoio às vítimas das inundações no RS. Esperamos que muitos se juntem a nós neste esforço coletivo, pois juntos somos mais fortes. Todos juntos pelo Rio Grande do Sul.
                                      </Typography>
                                      <hr />  
                                      <Link to="/material-de-apoyo">
    <button justifyContent="center" alignItems="center">Material de apoio ao volutario</button>
  </Link>        
  <Link to="/Accesso">
    <button justifyContent="center" alignItems="center">Accesso </button>
  </Link> 
</Box>
                                     
                                     
                                
                    </Container>
           
</StyledAbout>


            </>

 
  );
}

export default About;
