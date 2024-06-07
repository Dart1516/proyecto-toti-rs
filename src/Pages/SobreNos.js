/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import Header from "../Components/Header-NavMenu";
import {Grid, Container, Typography, styled, Card, CardContent, CardMedia, CardActions, Button} from "@mui/material"
import imgenchente from "../assets/images/imgsobrenos3.jpg"
import imgComunidade from "../assets/images/voluntarios.jpg"
import imgToters from "../assets/images/totersimagen.png"
import "../../src/Pages/MaterialDeApoio"
import "../../src/Pages/Accesso"
import { Link } from "react-router-dom";
const About = () => {


  const StyledAbout = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.secondary,
    height: "100vh",
    width: "100%",
    marginTop:"3rem",
      [theme.breakpoints.up('xs')]: { // <= mobile
          paddingTop: "1rem",

      },
      [theme.breakpoints.up('md')]: { // >=mobile
          paddingTop: "2rem",
      }
  }))
  const StyledText = styled("div")(() => ({
      display:"flex",
      gap:"1rem",
      width:"100%",
      padding:"1rem",
      color:"black",
      justifyItems:"space-between",
      flexDirection:"column",
      wordBreak:"break-word",
height:"100%"
  }))
  const StyledImg = styled("img")(() => ({
    width: "100%",
    maxWidth:"800px",
    alignItems: "center",
    borderRadius: "2%",
    display: "flex",
    height:"auto"
  }));
  const Styledbutton = styled("a")(() => ({
    alignItems: "center",
    borderRadius: "10px",
   textDecoration:"none",
   padding:"0.7rem 3rem",
   fontSize:"1rem",
   backgroundColor:"#FFB30B",
   color:"black",
   fontWeight:"600"

  }));
  const StyledbuttonVoluntario = styled("a")(() => ({
    alignItems: "center",
    borderRadius: "10px",
   textDecoration:"none",
   padding:"0.7rem 3rem",
   fontSize:"1rem",
   backgroundColor:"#084f54",
   color:"#ffff",
   fontWeight:"600"
  }));
  return (
      <>
       <Header  className="App-header"/>
      
                    <Container maxWidth="lg">             
                    <StyledAbout>
 {/* conteudo da primeira div ---------------------------------------------------- */}
                    <Grid container spacing={2} justifyContent="space-around" alignItems="center" display="flex"  paddingRight={10} paddingLeft={10} marginTop={10}>
                    <Grid item xs={12} md={6}>
                    <StyledText>
                    <Typography  pt={3}  textAlign="start" justifyContent="center" variant="h4" color="black" fontWeight={700} >
                                Quem Somos?
                                      </Typography>
                                     <hr style={{ border: "0",  margin: "0",height:"3px" ,maxWidth:'50%',  backgroundColor:"#FFB30B"}} />
                    <Typography  textAlign="start" justifyContent="center" variant="body">
                             A Comunidade Toti é um coletivo de profissionais imigrantes de tecnologia no Brasil, unidos pelo desejo de crescer profissionalmente e de apoiar uns aos outros. Nossa missão é oferecer um espaço de acolhimento, onde o conhecimento e as experiências se entrelaçam para criar oportunidades de desenvolvimento e integração.
                                      </Typography>
                                      </StyledText>
                    </Grid>
                    {/* img da primeira div -------------------- */}
                    <Grid item xs={12} md={6} display="flex" justifyContent="center" alignItems="center" padding={0}>
                    <StyledImg src={imgToters} />
</Grid> 
                    </Grid>
                   
  {/* conteudo da segunda div -------------------------------------- */}
  <Grid container spacing={2} justifyContent="space-around" alignItems="center" display="flex"  paddingRight={10} paddingLeft={10} marginTop={10} direction={{ xs: 'column-reverse', md: 'row' }}>
                      {/* img da segunda div--------------------- */}
                    <Grid item xs={12} md={6} display="flex" justifyContent="space-beetwen" alignItems="center" >
                    <StyledImg  src={imgComunidade} />
                    </Grid>
                    <Grid item xs={12} md={6} >
                      <StyledText>
                      <Typography   textAlign="start" variant="h4" color="black" fontWeight={700}  >
                  Nossa visão
                                      </Typography>
                                      <hr style={{ border: "0",  margin: "0",height:"3px" ,maxWidth:'50%', backgroundColor:"#FFB30B"}} />
                    <Typography  textAlign="start" variant="body" >
                    Em resposta a os recentes eventos no Rio Grande do Sul, nossa comunidade está mobilizada para fazer a diferença.</Typography>

                    <Typography  textAlign="start"  variant="body">
                     Com empatia e solidariedade, lançamos esta plataforma para conectar voluntários e recursos, visando oferecer ajuda prática e esperança àqueles afetados pelas inundações.</Typography>

                     <Typography  textAlign="start"  variant="body">
                      O intuito dessa plataforma é oferecer apoio psicosocial às famílias afetadas pela tragédia no RS, disponibilizando serviços com psicólogos e educadores sociais. Esses profissionais estão prontos para atender e auxiliar no processo de recuperação emocional e social das pessoas impactadas, garantindo um suporte integral e humanizado.
                                      </Typography>
                                      </StyledText>
</Grid></Grid>

 {/* conteudo da terceira div ---------------------------------------------------- */}
 <Grid container spacing={2} justifyContent="space-around" alignItems="start" display="flex"  paddingRight={10} paddingLeft={10} marginTop={10}>
                    <Grid item xs={12} md={6}>
                    <StyledText>
                    <Typography   textAlign="start" variant="h4" color="black" fontWeight={700} >
                                Faça parte você também
                                      </Typography>
                                     <hr style={{ border: "0",  margin: "0",height:"3px" ,maxWidth:'50%',  backgroundColor:"#FFB30B"}} />
                    <Typography  textAlign="start"  variant="body">
                    Convidamos profissionais de todas as áreas a se juntarem a este movimento humanitário, contribuindo com seu tempo e habilidades em apoio às vítimas das inundações no RS. Esperamos que muitos se juntem a nós neste esforço coletivo, pois juntos somos mais fortes. Todos juntos pelo Rio Grande do Sul.
                                      </Typography>
                                      </StyledText>
                    </Grid>
                    {/* img da primeira div -------------------- */}
                    <Grid item xs={12} md={6} display="flex" justifyContent="center" alignItems="center" padding={6}>
                    <StyledImg src={imgenchente}/>
</Grid> 
                    </Grid>
                     <Grid container spacing={2} justifyContent="space-between" alignItems="center" display="flex"  padding={{ xs: '0', md: '1.5rem' }} marginBottom={10}>
 <Grid item xs={12} md={12} display="flex" gap={2} alignItems="center" padding={{ xs: '0', md: '1rem' }} justifyContent="space-evenly" direction={{ xs: 'column-reverse', md: 'row' }}>
                    <Styledbutton href="./demo">Liderança Emigrante </Styledbutton>
                 <StyledbuttonVoluntario 
                  href='./JoinUs'>Quero ser voluntário
                </StyledbuttonVoluntario>
 </Grid>
 </Grid>
{/* ================================ */}


<div  >
  <Typography   textAlign="start" justifyContent="center" variant="h4" color="black" fontWeight={700} >
                                Nossos valores
                                      </Typography>
                                      <div  display="flex" >
     <Card sx={{ maxWidth: 345 }} >
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div></div>



























                                      <Link to="/material-de-apoyo">
    <button justifyContent="center" alignItems="center">Material de apoio ao volutario</button>
  </Link>        
           
  </StyledAbout>         
                    </Container>
           



            </>

 
  );
}

export default About;
