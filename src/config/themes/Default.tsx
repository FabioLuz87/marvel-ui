import { createTheme } from '@mui/material'




const theme = createTheme({
    typography: {
        fontFamily: [
          "Marvel",
          "sans-serif"
        ].join(",")
    },
    palette: {
        primary: {
            main: '#96d5a4'
        }
    }
});

export default theme;