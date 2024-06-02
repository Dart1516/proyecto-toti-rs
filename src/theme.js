import { createTheme, responsiveFontSizes } from "@mui/material";


let theme = createTheme({
  typography:{
    fontFamily:"Times New Roman"
  },
  // color blanco
  palette: {
    primary: {
      main: '#F0F0F0',
    },
    // color verde
    secondary: {
      main:"#085454",
    },
  },
});

theme = responsiveFontSizes(theme)

export default theme;