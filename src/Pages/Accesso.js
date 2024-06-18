import React, { useState } from "react";
import { Typography } from "@mui/material";
import {  styled } from "@mui/material";
import { FormGroup, FormControl, InputLabel, Input, Checkbox , FormControlLabel} from "@mui/material";
import { Api } from "../services/api";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header-NavMenu";
import Visibility from '@mui/icons-material/VisibilityOutlined';
import VisibilityOff from '@mui/icons-material/VisibilityOffOutlined';
import {  InputAdornment, IconButton } from '@mui/material';
const StyledContainer = styled("div")(() => ({
  position: "fixed",
  right: 0,
  top:"2rem",
  background: "#fafafa",
  padding: "4rem 6rem",
  zIndex: "1",
  height:"100vh", 
  justifyItems:"center", 
  width:"70%",
  alignItems:"center",
  display:"flex",
  flexDirection:"column"
  
}));
const StyledLogin = styled("div")(() => ({
    gap:"2rem",
    padding:"4rem 0",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    width:"70%",
}));
const StyledButton = styled("button")(() => ({
  width: "100%",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  background: "#084f54",
  padding: "10px",
  alignItems: "center",
  justifyContent: "center",
  margin: "1rem 0",
  border: "0",
  borderRadius:"8px",
  cursor: "pointer",
  color: "white",
  fontSize: "18px",
  "&:hover": {
    color: "white",
    border: "0",
    backgroundColor: " RGB(68, 119,130)",
  },
}));
const StyledLink = styled("a")(() => ({
  color:"#084f54",
  cursor: "pointer",
}));
const StyledItems = styled("a")(() => ({
  display:"flex",
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center",
padding:"1rem"
}));
 let username;

const Accesso = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleLogin = async () => {
    
   

    try {
      if (!email || !password) {
          setError("Por favor, preencha todos os campos");
          return; // Detener la ejecución si los campos están vacíos
      }
  
      const response = await Api.get(`/login?email=${email}&password=${password}`);
      const username = response.data;
      console.log(username);
      navigate("/interfazLider");
  } catch (error) {
      console.error("Error al autenticar o cargar los datos del cliente:", error);
      setError("Email ou senha invalidos");
  }
   
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setError(null);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setError(null);
  };
  // codigo do checkbox
  const [rememberMe, setRememberMe] = useState(false);

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };
  // codigo do icone do password
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
};

  return (
    <div className="App SV">
    <div className="App-header">
      <Header />
    </div>
    <div className="background-image"></div>
    <StyledContainer>
    <Typography variant="h4" color="black">
              Seja bem-vindo(a) de volta
            </Typography>
            <Typography variant="body">Ainda não faz parte da equipe de voluntarios? <StyledLink href="/cadastro">Clique aquí</StyledLink></Typography>
        <StyledLogin>
           
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
                  onChange={handleEmailChange}
                  required
                  className="input-text login"
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
                  Senha
                </InputLabel>
                <Input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={handlePasswordChange}
                    required
                    label="senha"
                    fullWidth
                    className="input-text login"
                    endAdornment={
                      <InputAdornment position="end">
                         
                                <IconButton onClick={handleTogglePassword}>
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                    }
                />
               
               

              </FormControl>
                 <StyledItems>
                 <FormControlLabel
        control={
          <Checkbox
            checked={rememberMe}
            onChange={handleRememberMeChange}
            style={{color:"black", width:"20px", marginRight:"1rem"}}
          />
        }
        label="Lembrar de mim"
      />
<StyledLink href="/home">Esqueceu a senha?</StyledLink>
                 </StyledItems>
             
              <StyledButton onClick={handleLogin}>Entrar</StyledButton>
              {error && <p style={{ color: "red" }}>{error}</p>}{" "}
              {/* Muestra el mensaje de error */}
            </FormGroup>
           
         
        </StyledLogin>
      
            
     
    </StyledContainer>
    </div>
  );
  
};

export default Accesso;

export {username}