import './App.css';
import React, {useState, useEffect} from "react";
import AboutMe from './AboutMe/AboutMe';
import Contact from './Contact/Contact';
import Home from "./Home/Home";
import Footer from './Footer/Footer';
import Projects from './Projects/Projects';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#ffffff',
            main: '#ffffff',
            dark: '#ffffff',
            contrastText: '#000000',
        },
        secondary: {
            light: '#000000',
            main: '#000000',
            dark: '#000000',
            contrastText: '#ffffff',
        },
    },
    typography: {
        fontFamily: [
            'Montserrat',
            'arial',
            'sans-serif'
        ].join(','),
        fontSize: 18,
    },
});

const useStyles = makeStyles(() => ({
    root:{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },

    image: {
        height: '84vh',
    },

}));

function App() {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
                <Home/>
                <AboutMe/>
                <Projects/>
                <Footer/>
            </div>
        </ThemeProvider>
    );
}

export default App;
