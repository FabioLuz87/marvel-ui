import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: ["Marvel", "sans-serif"].join(","),
    h5: {
      fontFamily: "Marvel",
    },
  },
  palette: {
    primary: {
      main: "#96d5a4",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
            font-family: 'Marvel'
        `,
    },
    MuiTypography: {
      defaultProps: {
        fontFamily: "Marvel",
      },
    },
  },
});

export default theme;