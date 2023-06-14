import { DefaultTheme } from 'styled-components';
export const light: DefaultTheme = {
  borderRadius: '4px',
  palette: {
    common: {
      black: 'black',
      white: 'white',
      red: 'red',
      green: 'green',
      blue: 'blue',
      primary: '#bfdef3',
      secondary: '#75b3da',
      darkText: '#5a6777',
    },
    primary: {
      main: '#fff',
      contrastText: '#000',
    },
    secondary: {
      main: '#fff',
      mainSemiTransparent: 'rgba(255,255,255,0.8)',
      contrastText: '#5a6777',
    },
  },
};

export const dark: DefaultTheme = {
  borderRadius: '4px',
  palette: {
    common: {
      black: 'black',
      white: 'white',
      red: 'red',
      green: 'green',
      blue: 'blue',
      primary: '#bfdef3',
      secondary: '#75b3da',
      darkText: '#0d1117',
    },
    primary: {
      main: '#161b22',
      contrastText: '#f0f6fc',
    },
    secondary: {
      main: '#23272d',
      mainSemiTransparent: 'rgba(35, 39, 45,0.8)',
      contrastText: '#f0f6fc',
    },
  },
};
