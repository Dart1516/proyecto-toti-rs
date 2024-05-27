import React, { useState } from 'react';
import {  Button,  Typography } from '@mui/material';
import {Grid, styled} from "@mui/material"
import { FormGroup, FormControl, InputLabel, Input,  } from '@mui/material';

// Resto de tu código...


const Accesso = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
  }
      const StyledContainer = styled("div")(() => ({
        height: "100vh",
        width:"100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }));
      
      const StyledLogin = styled("div")(() => ({
        width:"100%",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        background: "#f9f9f9",
        padding: "40px",
        alignItems:"center",
        justifyContent:"center",
        border: "1px solid #4CAF50",
      }));
      const StyledButton = styled("button")(() => ({
        width:"100%",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        background: "#4CAF50",
        padding: "4px",
        alignItems:"center",
        justifyContent:"center",
        margin:'1rem 0',
        cursor:"pointer"
      }));
      const StyledButtonGoogle = styled("button")(() => ({
        width:"100%",
        background: "white",
        border:"1px solid blue",
        padding: "4px",
        alignItems:"center",
        justifyContent:"center",
        margin:'1rem 0',
        cursor:"pointer",
        transition: "background-color 0.3s ease-in-out",
        "&:hover": {
          backgroundColor:'rgba(0, 0, 255, 0.3)',
        },
      }));
      const StyledLinks = styled("a")(() => ({
      textDecoration: 'none',
      color: 'black',
      cursor:"pointer"
    }));
      
        return (
<StyledContainer>
<Grid container spacing={2} textAlign="center" justifyContent="center" columnGap={6} >
<StyledLogin>
<Grid item xs={12} md={12}>
 
            <Typography variant="h4" padding={4}>Seja bem-vindo(a) de volta</Typography>
            </Grid>
            <Grid item xs={12} md={12} >
            <FormGroup >
              <FormControl style={{ marginTop: '20px' }}>
                <InputLabel >Email</InputLabel>
                <Input
                
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required  autoFocus  
          />
        
              </FormControl>
              <FormControl  style={{ marginTop: '20px' }}>
                <InputLabel >Password</InputLabel>
                <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required  autoFocus 
          />
        
              </FormControl>
              <StyledButton>
              <Button onClick={handleLogin} >
                  Entrar
                </Button>
              </StyledButton>           
            </FormGroup>
                </Grid>
{/* ------------------------------------------------------- */}
                <Grid item xs={12} md={12}>
 
            <Typography variant="body">Ou</Typography>
            
</Grid>
<Grid item xs={12} md={12}>
            <StyledButtonGoogle>
            <Button >
            <StyledLinks href="https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?include_granted_scopes=true&state=J7lRWb1z3YV6eA88hfNDaXUTwf-VFcp3aUVOF1AM9bkWaLPWyP-7pgJjDNXq6tjutNHRxa0iHHZh1VACnotBBQ.1gN6i8F9wLDUR6p95pfbOw.XO4Bi8ystPzUtw4JhHQAfnY0Jv26n3DH6Du2l0rZGaVKJkPmvUh_glT4NWrM8ofNbB2e_e0nx7T7btUHH4KCNg1S_da5pexzndHT67ED23bG_gnYsbk6_CliExoA7XVHiOiAXjHGqG4zx0My0FdRXcxa42QhFnmVbv4eMw4uuvQ61jmat29b3-aIHT7SbWOuWDbrAXJ4pgVWcjeSSGA748Nu9skRLxSioIMoEKF6IE8&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&redirect_uri=https%3A%2F%2Fdart1516.github.io%2Fproyecto-toti-rs%2F&client_id=672984054134-dk85on9as32e3nccuc4lutvu7hl2nafr.apps.googleusercontent.com&access_type=offline&response_type=code&service=lso&o2v=2&ddm=0&flowName=GeneralOAuthFlow" target="_blank" rel="noopener noreferrer">
   Entrar com Google

 </StyledLinks>

                </Button>
            </StyledButtonGoogle>
    </Grid>
       
    <Grid item xs={12} md={12} flexDirection="row" display="flex" alignItems="end" justifyContent="space-between" mt={4}>
            <Typography variant="h4">Novo por aqui?</Typography>
            <StyledLinks to="/Login">
              Cadastre-se

            </StyledLinks>
          
          
           
            </Grid>
            </StyledLogin>
     </Grid>
</StyledContainer>
         
        );
      };
      
      export default Accesso;