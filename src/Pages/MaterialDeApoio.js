import React from "react";
import Header from "../Components/Header-NavMenu";
import img from "../../src/assets/images/rs.jpg"
import imagen from "../../src/assets/images/pfd1.png"
import imagenDos from "../../src/assets/images/img1.png"
import imagenTres from "../../src/assets/images/situation.webp"
import imagenCuatro from "../../src/assets/images/psicologa.jpg"
import imagenCinco from "../../src/assets/images/lideres.png"
import imagenSeis from "../../src/assets/images/voluntariado 1.jpeg"
import {Box, Grid, Container, Typography, styled} from "@mui/material"
const MaterialDeApoio = () => {


  const StyledMaterialDeApoio = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.secondary,
      height: "100vh",

      [theme.breakpoints.up('xs')]: { // <= mobile
          paddingTop: "100px",

      },
      [theme.breakpoints.up('md')]: { // >=mobile
          paddingTop: "50px",
      }
  }))
  const StyledTextMaterialDeApoio = styled("div")(() => ({
      width:"100%",
      alignItems:"start"
  }))
  
  const StyledImg = styled("img")(() => ({
    width: "60%",
    display: "flex",
    justifyContent: "flex-start", // Cambia "start" a "flex-start"
    alignItems: "start"
}));
const StyledGrid = styled(Grid)(({ theme }) => ({
  borderBottom: '1px solid #E0E0E0', borderLeft: '1px solid #E0E0E0', borderRight: '1px solid #E0E0E0'
}));
  return (
      <>
       <Header/>
       <StyledMaterialDeApoio>
                    <Container maxWidth="lg" gap={6}>
                    <Typography color="secondary.main" variant="h2" textAlign="center" pt={6}>Orientações para Psicologos</Typography>

                    <Grid container spacing={2} gap={1} textAlign="start" justifyContent="start" pb={5}>

                    <Grid item xs={12} md={12} >
                    <StyledTextMaterialDeApoio>
                    <Typography  pt={3} pb={4}  textAlign="start" justifyContent="center" variant="h6">
                   Entendemos a importância crucial do apoio psicológico, especialmente em momentos de crise e dificuldades.Sabemos que os profissionais da saúde mental desempenham um papel crucial no bem-estar das pessoas afetadas.

Nosso espaço foi criado especificamente para fornecer orientação e suporte aos psicólogos e orientadores. Valorizamos seu compromisso e conhecimento, e estamos aqui para apoiá-los em sua missão. Juntos, esperamos ajudar até onde estiver ao nosso alcance, fornecendo recursos, estratégias e um espaço de colaboração.

Agradecemos profundamente seu esforço e dedicação em meio a esses momentos desafiadores. A saúde mental é um pilar fundamental para a , e seu trabalho faz toda a diferença.
                                   </Typography>
                                      </StyledTextMaterialDeApoio>
                    </Grid>
                                      <Grid item xs={12} md={12}  alignItems="start" >
                                      <Typography pt={3} pb={4}  textAlign="start" justifyContent="center" variant="h6">
                           Links de Materiais De Apoio ao profissional
                                      </Typography>
                    </Grid>
                                                 {/* enlaces ----------------------------------------------------------- */}
            
                    <StyledGrid item xs={12} md={8} >
                    <StyledImg src={imagenTres} />
                    <StyledTextMaterialDeApoio>
                 

                            <Typography pt={3} pb={4}  textAlign="start" justifyContent="center" variant="h6">
                            Cartilha de capacitação para atencao-basica na saude-mental quando desastre de origem natural.  <a href="https://www.saude.sc.gov.br/index.php/documentos/atencao-basica/saude-mental/desastre-deorigem-natural/2961-cartilha-catastrofes-2009/file" download>Documento em PDF</a>

                                      </Typography>
                                      </StyledTextMaterialDeApoio>
</StyledGrid>
 

<StyledGrid item xs={12} md={8}>
<StyledImg src={imagen} />
                    <StyledTextMaterialDeApoio>
                          
                            <Typography pt={3} pb={4}  textAlign="start" justifyContent="center" variant="h6">
                          
Coêlho, A. E. L. (2011). A Prática da Psicologia em Emergências e Desastres: Perspectivas Sociais e Preventivas [La Práctica de la Psicología en Emergencias y Desastres: Perspectivas

Sociales y Preventiva]. Centro Universitário de João Pessoa.  <a href="https://emergenciasedesastres.cfp.org.br/wp-content/uploads/sites/17/2011/10/TEXTO-ANGELA-COELHO.pdf" download>Documento em PDF</a>
                                      </Typography>
                                      </StyledTextMaterialDeApoio>

</StyledGrid>

   


          <StyledGrid item xs={12} md={8}>
          <StyledImg src={imagenDos} />
                    <StyledTextMaterialDeApoio>
                          
                            <Typography pt={3} pb={4}  textAlign="start" justifyContent="center" variant="h6">
                          
                            Alves, R. B., Lacerda, M. A. D. C., & Legal, E. J. (2012). A autação do psicólogo diante dos desastres naturais: uma revisão .El papel del psicólogo ante los desastres naturales: una revisión.
Psicologia em estudo, 17(2), 307-315. <a href="  https://www.scielo.br/j/pe/a/5wCT3zj4Bg9XBrmL3wfct8D/abstract/?lang=pt" download>Documento em PDF</a>
                                      </Typography>
                                      </StyledTextMaterialDeApoio>
                                      
</StyledGrid>
<StyledGrid item xs={12} md={8} alignItems="start">
            <StyledImg src={imagenCuatro} />
            <StyledTextMaterialDeApoio>
                          
                          <Typography pt={3} pb={4}  textAlign="start" justifyContent="center" variant="h6">
                        
                          MATERIAL DE APOIO PARA VOLUNTÁRIOS E PROFISSIONAIS DE SAÚDE.  <a href=" https://www.ufrgs.br/saudemental/?page_id=1655" download>Link da plataforma</a>
                                    </Typography>
                                    </StyledTextMaterialDeApoio>
          </StyledGrid>   


      

          <StyledGrid item xs={12} md={8} alignItems="start">
            <StyledImg src={imagenCinco} />
                    <StyledTextMaterialDeApoio>
                          
                            <Typography pt={3} pb={4}  textAlign="start" justifyContent="center" variant="h6">
                          
                            Protocolos para Organização do Cuidado Local em Emergências ou desastres.  <a href=" https://www.ufrgs.br/saudemental/wp-content/uploads/2024/05/telepsi_desastres-guia-completo.pdf " download>Documento em PDF</a>
                                      </Typography>
                                      </StyledTextMaterialDeApoio>
                                      
</StyledGrid>


          <StyledGrid item xs={12} md={8} alignItems="start">
            <StyledImg src={imagenSeis} />
                    <StyledTextMaterialDeApoio>
                          
                            <Typography pt={3} pb={4}  textAlign="start" justifyContent="center" variant="h6">
                          
                            A PUCRS e o Conselho Regional de Psicologia criaram um curso rápido em vídeo com orientações para quem está atuando no resgate e acolhida às pessoas atingidas pelas enchentes no Rio Grande do Sul. Acesse aqui: 
                           
                                      </Typography>
                                      <Typography pt={3} pb={4}  textAlign="start" justifyContent="center" variant="h6">
                        
                          Parte 1      <a href="https://youtu.be/sODo-ua0iWI?si=2GBx1gd5t0b4mrA4" > https://youtu.be/sODo-ua0iWI?si=2GBx1gd5t0b4mrA4</a>
                         
                                    </Typography> <Typography pt={3} pb={4}  textAlign="start" justifyContent="center" variant="h6">
                          
                        
                          Parte 2       <a href="  https://www.youtube.com/watch?v=g_ykM9tcbpk " >  https://www.youtube.com/watch?v=g_ykM9tcbpk</a>
                                    </Typography>
                                      </StyledTextMaterialDeApoio>
                                      
</StyledGrid>
</Grid>

                    </Container>
           
</StyledMaterialDeApoio>


            </>

 
  );
}

export default MaterialDeApoio;