import { createTheme } from '@mui/material';
import CommonTheme from './CommonTheme';

export const DarkTheme = createTheme({
    ...CommonTheme,
    palette: {
        mode: 'dark',
        primary: {
            main: '#10F0fc',
        },
        secondary: {
            main: '#10637D',
        },
        background: {
            paper: '#1c2025',
            default: '#27282f',
        },
        text: {
            primary: '#B3c3D7',
            secondary: '#F2f2f2',
        },
    },
});

export const LightTheme = createTheme({
    ...CommonTheme,
    palette: {
        mode: 'light',
        primary: {
            main: '#10F0fc',
        },
        secondary: {
            main: '#10637D',
        },
        background: {
            paper: '#F2f2f2',
            default: '#E5E5E5',
        },
        text: {
            primary: '#10637D',
            secondary: '#27282f',
        },
    },
});
