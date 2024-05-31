<<<<<<< HEAD
import React, { useState } from 'react';
import { Typography } from '@mui/material';
import {Grid, styled} from "@mui/material"
import { FormGroup, FormControl, InputLabel, Input,  } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { Api } from '../services/api';
import { useNavigate } from 'react-router-dom';
=======
import React, { useState } from "react";
import { Typography } from "@mui/material";
import { Grid, styled } from "@mui/material";
import { FormGroup, FormControl, InputLabel, Input } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { useNavigate } from "react-router-dom"; // esto es para guardar el historial del inicio de sesión falso importarlo usando  npm install react-router-dom
>>>>>>> 4d602a5c3e82e0a101b5905b718f01012dfa1356

const StyledContainer = styled("div")(() => ({
  height: "100vh",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));
const StyledLogin = styled("div")(() => ({
  width: "100%",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  background: "#f9f9f9",
  padding: "40px",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid #4CAF50",
}));
const StyledButton = styled("button")(() => ({
  width: "100%",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  background: "#4CAF50",
  padding: "10px",
  alignItems: "center",
  justifyContent: "center",
  margin: "1rem 0",
  border: "0",
  cursor: "pointer",
  color: "white",
  fontSize: "18px",
  "&:hover": {
    color: "white",
    border: "0",
    backgroundColor: " #45a049",
  },
}));
const StyledLinkGoogle = styled("a")(() => ({
  textDecoration: "none",
  color: "black",
  cursor: "pointer",
}));
const StyledButtonGoogle = styled("a")(() => ({
  width: "100%",
  background: "white",
  border: "1px solid blue",
  padding: "8px",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  margin: "1rem 0",
  fontSize: "18px",
  color: "",
  gap: "30px",
  transition: "background-color 0.3s ease-in-out",
  "&:hover": {
    backgroundColor: "blue",
    border: "0",
    "& > .GoogleIcon": {
      color: "white",
    },
    "& > .StyledLinkGoogle": {
      color: "white",
    },
  },
}));
const StyledLinkCadastro = styled("a")(() => ({
  textDecoration: "none",
  color: "black",
  cursor: "pointer",
}));

const Accesso = () => {
<<<<<<< HEAD
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate(); 
  const handleLogin = async () => {
    try {
      const response = await Api.get(`/login?email=${email}&password=${password}`);
    console.log('Datos del cliente:', response.data);

    // Si el cliente se autentica correctamente, redirige a la página de inicio
    navigate('/home'); 
    } catch (error) {
      console.error('Error al autenticar o cargar los datos del cliente:', error);
      setError('Email o contraseña incorrectos');
    }
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setError(null); // Limpia el mensaje de error al escribir nuevos datos
  };

  // Función para manejar cambios en el campo de contraseña
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setError(null); // Limpia el mensaje de error al escribir nuevos datos
  };
        return (
<StyledContainer>
<Grid container spacing={2} textAlign="center" justifyContent="center" >
<StyledLogin>
<Grid item xs={12} md={12}>
            <Typography variant="h4" padding={4}>Seja bem-vindo(a) de volta</Typography>
            <FormGroup>
            <FormControl>
  <InputLabel  style={{all:"unset", left:"0", justifyContent:"start", display:"flex", textAlign:"left" }}>Email</InputLabel>
  <Input
    type="email"
    value={email}
    onChange={handleEmailChange}
    required
=======
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate(); // Declaramos useNavigate aquí para hacer unas pruebas 30/05/2024

  /* colocaré esto en comentarios para simular un inicio de sesión falso
  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);
  };

*/

// ------------ INICIO DEL CODIGO QUE FINGE EL INICIO DE SESIÓN, ELIMiNAR DESPUES 30/05/2024 -----------------
const handleLogin = async () => {
  try {
    // Simulamos el inicio de sesión (esto es solo temporal)
    await fakeSignIn();
>>>>>>> 4d602a5c3e82e0a101b5905b718f01012dfa1356
    

<<<<<<< HEAD
<FormControl style={{ marginTop: '20px' }}>
  <InputLabel  style={{all:"unset", left:"0", justifyContent:"start", display:"flex", textAlign:"left" }}>Password</InputLabel>
  <Input
    type="password"
    value={password}
    onChange={handlePasswordChange} 
    required
  />
</FormControl>
=======
    // Redireccionamos al usuario a la interfaz de usuario
    Navigate("/interfazLider");
  } catch (error) {
    console.error("Error al iniciar sesión:", error.message);
  }
};
>>>>>>> 4d602a5c3e82e0a101b5905b718f01012dfa1356

// Función para simular el inicio de sesión (temporal)
const fakeSignIn = async () => {
  // Simular un tiempo de espera (por ejemplo, 1 segundo) antes de redirigir al usuario
  await new Promise((resolve) => setTimeout(resolve, 500));
};


              <StyledButton onClick={handleLogin}>
          
                  Entrar
            
              </StyledButton>    
              {error && <p style={{ color: 'red' }}>{error}</p>} {/* Muestra el mensaje de error */}       


  return (
    <StyledContainer>
      <Grid container spacing={2} textAlign="center" justifyContent="center">
        <StyledLogin>
          <Grid item xs={12} md={12}>
            <Typography variant="h4" padding={4}>
              Seja bem-vindo(a) de volta
            </Typography>
            <FormGroup>
              <FormControl>
                <InputLabel
                  style={{
                    all: "unset",
                    left: "0",
                    justifyContent: "start",
                    display: "flex",
                    textAlign: "left",
                  }}
                >
                  Email
                </InputLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </FormControl>

              <FormControl style={{ marginTop: "20px" }}>
                <InputLabel
                  style={{
                    all: "unset",
                    left: "0",
                    justifyContent: "start",
                    display: "flex",
                    textAlign: "left",
                  }}
                >
                  Password
                </InputLabel>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </FormControl>

              <StyledButton onClick={handleLogin}>Entrar</StyledButton>
>>>>>>> 4d602a5c3e82e0a101b5905b718f01012dfa1356
            </FormGroup>
          </Grid>
          {/* ------------------------------------------------------- */}
          <Grid item xs={12} md={12}>
            <Typography variant="body">Ou</Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <StyledButtonGoogle>
              <GoogleIcon className="GoogleIcon" />
              <StyledLinkGoogle
                className="StyledLinkGoogle"
                href="https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?include_granted_scopes=true&state=J7lRWb1z3YV6eA88hfNDaXUTwf-VFcp3aUVOF1AM9bkWaLPWyP-7pgJjDNXq6tjutNHRxa0iHHZh1VACnotBBQ.1gN6i8F9wLDUR6p95pfbOw.XO4Bi8ystPzUtw4JhHQAfnY0Jv26n3DH6Du2l0rZGaVKJkPmvUh_glT4NWrM8ofNbB2e_e0nx7T7btUHH4KCNg1S_da5pexzndHT67ED23bG_gnYsbk6_CliExoA7XVHiOiAXjHGqG4zx0My0FdRXcxa42QhFnmVbv4eMw4uuvQ61jmat29b3-aIHT7SbWOuWDbrAXJ4pgVWcjeSSGA748Nu9skRLxSioIMoEKF6IE8&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&redirect_uri=https%3A%2F%2Fdart1516.github.io%2Fproyecto-toti-rs%2F&client_id=672984054134-dk85on9as32e3nccuc4lutvu7hl2nafr.apps.googleusercontent.com&access_type=offline&response_type=code&service=lso&o2v=2&ddm=0&flowName=GeneralOAuthFlow"
                target="_blank"
                rel="noopener noreferrer"
              >
                Entrar com Google
              </StyledLinkGoogle>
            </StyledButtonGoogle>
          </Grid>

          <Grid
            item
            xs={12}
            md={12}
            flexDirection="row"
            display="flex"
            alignItems="end"
            justifyContent="space-between"
            mt={4}
          >
            <Typography variant="body">Novo por aqui?</Typography>
            <StyledLinkCadastro href="/Login">Cadastre-se</StyledLinkCadastro>
          </Grid>
        </StyledLogin>
      </Grid>
    </StyledContainer>
  );
};

export default Accesso;
