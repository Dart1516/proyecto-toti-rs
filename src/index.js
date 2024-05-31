import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';
import { AuthProvider } from './Components/AuthContext'; // Importa AuthProvider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider> {/* Envuelve App con AuthProvider */}
        <App />
        <CssBaseline />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
