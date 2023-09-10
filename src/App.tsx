import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import { DarkTheme, LightTheme } from './theme/DarkLightTheme';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';

function App() {
    const [isDarkTheme, setIsDarkTheme] = useState<boolean>(true);

    const handleChangeTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };
    return (
        <ThemeProvider theme={isDarkTheme ? DarkTheme : LightTheme}>
            <CssBaseline />
            <Header handleChangeTheme={handleChangeTheme} isDarkTheme={isDarkTheme} />
            <Profile />
            <About />
            <Experience />
            <Footer />
        </ThemeProvider>
    );
}

export default App;
