import 'styled-components';
interface IPalette {
  main: string;
  mainSemiTransparent?: string;
  contrastText: string;
}
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    palette: {
      common: {
        black: string;
        white: string;
        red: string;
        green: string;
        blue: string;
        primary: string;
        secondary: string;
        darkText: string;
      };
      primary: IPalette;
      secondary: IPalette;
    };
  }
}
