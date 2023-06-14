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
      darkText: '#0d1117',
    },
    primary: {
      main: '#fff',
      contrastText: '#5a6777',
    },
    secondary: {
      main: '#fff',
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
      contrastText: '#f0f6fc',
    },
  },
};
