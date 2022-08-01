import { createGlobalStyle } from "styled-components";
import { ThemeType } from "../themes/Dark";

type GlobalProps = {
  fontFamily: string;
  theme?: ThemeType;
};

const GlobalStyles = createGlobalStyle<GlobalProps>`
    
    body {
        background: #b64444 ;
        margin: 0px;
        padding: 0px;
        font-family: 'Marvel';
    }
    .css-1u9ugmt-MuiTypography-root {
      font-family: 'Marvel';
    }
    .css-2ulfj5-MuiTypography-root{
      font-family: 'Marvel';
    }
`;

export default GlobalStyles;