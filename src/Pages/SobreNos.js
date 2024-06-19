/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import Header from "../Components/Header-NavMenu";
import {
  Grid,
  Container,
  Typography,
  styled,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import imgenchente from "../assets/images/imgsobrenos3.jpg";
import imgComunidade from "../assets/images/voluntarios.jpg";
import "../../src/Pages/MaterialDeApoio";
import "../../src/Pages/Accesso";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import SecurityIcon from "@mui/icons-material/Security";
import PeopleIcon from "@mui/icons-material/People";
import StarIcon from "@mui/icons-material/Star";
import david from "../assets/images/toters/toter2.jpg";
import manuel from "../assets/images/toters/toter4.jpg";
import daysi from "../assets/images/toters/toter1.jpg";
import victor from "../assets/images/toters/toter3.jpg";
import cristian from "../assets/images/toters/toter5.jpg";
import henry from "../assets/images/toters/toter6.jpg";
import maria from "../assets/images/toters/toter7.jpg";
import nadi from "../assets/images/toters/toter8.jpg";
import marianela from "../assets/images/toters/Marianela.jpeg";
import natalia from "../assets/images/toters/natalia1.jpg";
import avatar from "../assets/images/toters/avatar.jpeg";
import Footer from '../Components/Footer'
import "../../src/assets/styles/sobrenos.css"
const About = () => {
  
  const StyledImg = styled("img")(() => ({
    width: "100%",
    maxWidth: "800px",
    alignItems: "center",
    borderRadius: "2%",
    display: "flex",
    height: "auto",
  }));
  const Styledbutton = styled("a")(() => ({
    alignItems: "center",
    borderRadius: "10px",
    textDecoration: "none",
    padding: "0.7rem 3rem",
    fontSize: "1rem",
    backgroundColor: "#FFB30B",
    color: "black",
    fontWeight: "600",
  }));
  const StyledbuttonVoluntario = styled("a")(() => ({
    alignItems: "center",
    borderRadius: "10px",
    textDecoration: "none",
    padding: "0.7rem 3rem",
    fontSize: "1rem",
    backgroundColor: "#084f54",
    color: "#ffff",
    fontWeight: "600",
  }));
  return (
    <>
      <Header className="App-header" />
      
      <div id="about">
        <Container maxWidth="xl" alignItems="center" justifyContent="center" display="flex">
          {/* conteudo da primeira div ---------------------------------------------------- */}
          <div
            className="grid-container-main"
          >
           
              <div className="text-main">
                <Typography
                  variant="h4"
                  color="black"
                  fontWeight={700}
                >
                  Quem Somos?<hr className="hr"/>
                </Typography>
               
                <Typography 
                  variant="body"
                >
                  A Comunidade Toti é um coletivo de profissionais imigrantes de
                  tecnologia no Brasil, unidos pelo desejo de crescer
                  profissionalmente e de apoiar uns aos outros. Nossa missão é
                  oferecer um espaço de acolhimento, onde o conhecimento e as
                  experiências se entrelaçam para criar oportunidades de
                  desenvolvimento e integração.
                </Typography>
            
            </div>
            {/* img da primeira div -------------------- */}
            <div className="img-main"
            >
            </div>
          </div>

          {/* conteudo da segunda div -------------------------------------- */}
          <div
           className="grid-container-main reverse"
          >
            {/* img da segunda div--------------------- */}
            <div className="img-main"
            >
              <StyledImg src={imgComunidade} />
            </div>
              <div className="text-main">
                <Typography
                  variant="h4"
                  color="black"
                  fontWeight={700}
                >
                  Nossa visão <hr className="hr"/>
                </Typography>
                <Typography variant="body">
                  Em resposta a os recentes eventos no Rio Grande do Sul, nossa
                  comunidade está mobilizada para fazer a diferença.
                </Typography>

                <Typography variant="body">
                  Com empatia e solidariedade, lançamos esta plataforma para
                  conectar voluntários e recursos, visando oferecer ajuda
                  prática e esperança àqueles afetados pelas inundações.
                </Typography>

                <Typography variant="body">
                  O intuito dessa plataforma é oferecer apoio psicosocial às
                  famílias afetadas pela tragédia no RS, disponibilizando
                  serviços com psicólogos e educadores sociais. Esses
                  profissionais estão prontos para atender e auxiliar no
                  processo de recuperação emocional e social das pessoas
                  impactadas, garantindo um suporte integral e humanizado.
                </Typography>
              </div>
          </div>

          {/* conteudo da terceira div ---------------------------------------------------- */}
          <div
            className="grid-container-main"
            marginTop={10}
          >
          
              <div className="text-main">
                <Typography
                  textAlign="start"
                  variant="h4"
                  color="black"
                  fontWeight={700}
                >
                  Faça parte você também <hr className="hr"/>
                </Typography>
                
                <Typography textAlign="start" variant="body">
                  Convidamos profissionais de todas as áreas a se juntarem a
                  este movimento humanitário, contribuindo com seu
                  tempo e habilidades em apoio às vítimas das inundações no RS.
                  Esperamos que muitos se juntem a nós neste esforço coletivo,
                  pois juntos somos mais fortes. Todos juntos pelo
                  Rio Grande do Sul.
                </Typography>
              
            </div>
            {/* img da primeira div -------------------- */}
            <div
              className="img-main"
             
            >
              <StyledImg src={imgenchente} />
            </div>
          </div>
          <Grid
            container
            spacing={2}
            justifyContent="space-between"
            alignItems="center"
            display="flex"
            padding={{ xs: "0", md: "1.5rem" }}
            marginBottom={10}
            marginTop={2}
          >
            <Grid
              item
              xs={12}
              md={12}
              display="flex"
              gap={2}
              alignItems="center"
              padding={{ xs: "0", md: "1rem" }}
              justifyContent="space-evenly"
              direction={{ xs: "column-reverse", md: "row" }}
            >
              <Styledbutton href="./demo">Liderança Emigrante </Styledbutton>
              <StyledbuttonVoluntario href="./JoinUs">
                Quero ser voluntário
              </StyledbuttonVoluntario>
            </Grid>
          </Grid>

          {/* ============================== NOSSOS VALORES ================================== */}
          <div className="nossoValores">
            <Typography
              textAlign="center"
              justifyContent="center"
              variant="h4"
              color="black"
              fontWeight={700}
            >
              Nossos valores<hr className="hr center"/>
            </Typography>
            <Grid
              container
              spacing={2}
              display="flex"
              alignItems="center"
              padding={{ xs: "0", md: "1rem" }}
              justifyContent="center" 
              direction="row"
              marginBottom={3}
              mt="2rem"
            >
              <Grid item xs={5} md={4} >
                <Card sx={{ maxWidth: '100%' }} style={{}}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Empatia <SentimentSatisfiedAltIcon />
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Compreensão e respeito pelas experiências e desafios dos
                      imigrantes e das comunidades afetadas por enchentes.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={7} md={4}>
                <Card sx={{ maxWidth: '100%' }}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Inclusão <AutorenewIcon />
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Garantir que o site e seus serviços sejam acessíveis e
                      úteis para pessoas de diversas origens, línguas e
                      habilidades.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={7} md={4} >
                <Card sx={{ maxWidth: '100%' }}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Segurança e Privacidade <SecurityIcon />
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Proteger os dados pessoais e sensíveis dos usuários com
                      rigor
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={5} md={4}>
                <Card sx={{ maxWidth:'100%'}}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Resiliência <PeopleIcon />
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Adaptar-se e responder efetivamente a desafios e mudanças,
                      tanto tecnológicas quanto sociais.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                display="flex"
                gap={2}
                alignItems="center"
                padding={{ xs: "0", md: "0" }}
              >
                <Card sx={{ maxWidth: '100%' }}>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      alignItems="center"
                    >
                      Qualidade <StarIcon />
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Entregar um produto confiável, intuitivo e funcional que
                      atende às necessidades dos usuários.Inovação:Investir em
                      pesquisa e desenvolvimento para integrar novas soluções
                      tecnológicas que possam beneficiar os usuários.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </div>
          {/* CARDS DO TIME--------------------------------------*/}
          <div>
            <Typography
              textAlign="center"
              justifyContent="center"
              variant="h4"
              color="black"
              fontWeight={700}
            >
              Nossos Time<hr className="hr center"/>
            </Typography>
            <Grid
              container
              spacing={2}
              display="flex"
              alignItems="center"
              padding={{ xs: "0", md: "1rem" }}
              justifyContent="center"
              direction="row"
              marginTop={3}
              marginBottom={3}
            >
              <Grid item  xs={10} md={3} alignItems="center" padding={{ xs: "0", md: "1rem" }} className="card-grid"
              >
                <Card sx={{ maxWidth: '100%' }} className="card-toter">
                  <CardMedia sx={{ height: 170 }} image={david} title="david" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      David
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Toter
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" style={{ color: "black" }}  target="_blank"  href="https://github.com/Dart1516">
                      Github
                    </Button>
                    <Button size="small" style={{ color: "black" }} target="_blank" href="https://www.linkedin.com/in/david-puche/" >
                      LinkedIn
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid
                item
                xs={6}
                md={3}
                display="flex"
                gap={2}
                alignItems="center"
                padding={{ xs: "0", md: "1rem" }}
              >
                <Card sx={{ maxWidth: 360 }}>
                  <CardMedia
                    sx={{ height: 170 }}
                    image={victor}
                    title="victor"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Víctor 
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Toter
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" style={{ color: "black" }} target="_blank"  href="https://github.com/Dart1516">
                      Github
                    </Button>
                    <Button size="small" style={{ color: "black" }} target="_blank"  href="https://www.linkedin.com/in/alcalamvictor">
                      LinkedIn
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid
                item
                xs={12}
                md={3}
                display="flex"
                gap={2}
                alignItems="center"
                padding={{ xs: "0", md: "1rem" }}
              >
                <Card sx={{ maxWidth: 360 }}>
                  <CardMedia sx={{ height: 170 }} image={maria} title="" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Maria
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Toter
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" style={{ color: "black" }} target="_blank"  href="https://github.com/Dart1516">
                      Github
                    </Button>
                    <Button size="small" style={{ color: "black" }} target="_blank"  href="https://github.com/Dart1516">
                      LinkedIn
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid
                item
                xs={12}
                md={3}
                display="flex"
                gap={2}
                alignItems="center"
                padding={{ xs: "0", md: "1rem" }}
              >
                <Card sx={{ maxWidth: 360 }}>
                  <CardMedia sx={{ height: 170 }} image={cristian} title="" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Cristhian
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Toter
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" style={{ color: "black" }} target="_blank"  href="https://github.com/Dart1516">
                      Github
                    </Button>
                    <Button size="small" style={{ color: "black" }} target="_blank"  href="https://www.linkedin.com/in/cristhian-andres-nunez-gascon-774569168">
                      LinkedIn
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid
                item
                xs={12}
                md={3}
                display="flex"
                gap={2}
                alignItems="center"
                padding={{ xs: "0", md: "1rem" }}
              >
                <Card sx={{ maxWidth: 360 }}>
                  <CardMedia sx={{ height: 170 }} image={henry} title="" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Henry
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Toter
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" style={{ color: "black" }} target="_blank"  href="https://github.com/Dart1516">
                      Github
                    </Button>
                    <Button size="small" style={{ color: "black" }} target="_blank"  href="https://www.linkedin.com/in/henry-luna-0793402a/">
                      LinkedIn
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

              <Grid
                item
                xs={12}
                md={3}
                display="flex"
                gap={2}
                alignItems="center"
                padding={{ xs: "0", md: "1rem" }}
              >
                <Card sx={{ maxWidth: 360 }}>
                  <CardMedia sx={{ height: 170 }} image={daysi} title="" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Daysi
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Toter
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" style={{ color: "black" }} target="_blank"  href="https://github.com/Dart1516">
                      Github
                    </Button>
                    <Button size="small" style={{ color: "black" }} target="_blank"  href="https://www.linkedin.com/in/daysibelcotizpitter">
                      LinkedIn
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid
                item
                xs={12}
                md={3}
                display="flex"
                gap={2}
                alignItems="center"
                padding={{ xs: "0", md: "1rem" }}
              >
                <Card sx={{ maxWidth: 360 }}>
                  <CardMedia sx={{ height: 170 }} image={manuel} title="" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Manuel
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Toter
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" style={{ color: "black" }} target="_blank"  href="https://github.com/Dart1516">
                      Github
                    </Button>
                    <Button size="small" style={{ color: "black" }} target="_blank"  href="hhttps://www.linkedin.com/in/manuel-bernardo-165373208/">
                      LinkedIn
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid
                item
                xs={12}
                md={3}
                display="flex"
                gap={2}
                alignItems="center"
                padding={{ xs: "0", md: "1rem" }}
              >
                <Card sx={{ maxWidth: 360 }}>
                  <CardMedia sx={{ height: 170 }} image={avatar} title="" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Yurisay
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Toter Disenho e Marketing
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" style={{ color: "black" }} target="_blank"  href="https://github.com/Dart1516">
                      Github
                    </Button>
                    <Button size="small" style={{ color: "black" }} target="_blank"  href="https://github.com/Dart1516">
                      LinkedIn
                    </Button>
                  </CardActions>
                </Card>
                
              </Grid>
              <Grid
                item
                xs={12}
                md={3}
                display="flex"
                gap={2}
                alignItems="center"
                padding={{ xs: "0", md: "1rem" }}
              >
                <Card sx={{ maxWidth: 360 }}>
                  <CardMedia sx={{ height: 170 }} image={nadi} title="" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Nadi
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Toter
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" style={{ color: "black" }} target="_blank"  href="https://github.com/Dart1516">
                      Github
                    </Button>
                    <Button size="small" style={{ color: "black" }} target="_blank"  href="https://www.linkedin.com/in/nadiduno/">
                      LinkedIn
                    </Button>
                  </CardActions>
                </Card>
                
              </Grid>
              <Grid
                item
                xs={12}
                md={3}
                display="flex"
                gap={2}
                alignItems="center"
                padding={{ xs: "0", md: "1rem" }}
              >
                <Card sx={{ maxWidth: 360 }}>
                  <CardMedia sx={{ height: 170 }} image={marianela} title="" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Marianela 
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Toter
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" style={{ color: "black" }} target="_blank"  href="https://github.com/Dart1516">
                      Github
                    </Button>
                    <Button size="small" style={{ color: "black" }} target="_blank"  href="https://www.linkedin.com/in/marianela-arana/">
                      LinkedIn
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid
                item
                xs={12}
                md={3}
                display="flex"
                gap={2}
                alignItems="center"
                padding={{ xs: "0", md: "1rem" }}
              >
                <Card sx={{ maxWidth: 360 }}>
                  <CardMedia sx={{ height: 170 }} image={natalia} title="" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Natalia
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Toter
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" style={{ color: "black" }} target="_blank"  href="https://github.com/Dart1516">
                      Github
                    </Button>
                    <Button size="small" style={{ color: "black" }} target="_blank"  href="https://www.linkedin.com/in/nataliaaugustoux/">
                      LinkedIn
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid
                item
                xs={12}
                md={3}
                display="flex"
                gap={2}
                alignItems="center"
                padding={{ xs: "0", md: "1rem" }}
              >
                <Card sx={{ maxWidth: 360 }}>
                  <CardMedia sx={{ height: 170 }} image={avatar} title="" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Barbara 
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Voluntaria Mentor
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" style={{ color: "black" }} target="_blank"  href="https://github.com/Dart1516">
                      Github
                    </Button>
                    <Button size="small" style={{ color: "black" }} target="_blank"  href="https://github.com/Dart1516">
                      LinkedIn
                    </Button>
                  </CardActions>
                </Card>
                
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
      <Footer></Footer>
    </>
  );
};

export default About;
