import { ThemeProvider } from 'styled-components';
import Routers from './Routers';
import themeDefault from './config/themes/Default';
import GlobalStyles from './config/styles/GlobalStyles';


export default function App() {   
    return (
        <ThemeProvider theme={themeDefault}>
            <GlobalStyles fontFamily='Marvel' />
            <Routers/>
        </ThemeProvider>
    );
};