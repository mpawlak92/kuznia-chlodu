import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 62.5%;
    background-color: transparent;
    
}
/* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: auto;
    scrollbar-color: #1a70c1 #f5f5f5;
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 16px;
  }

  *::-webkit-scrollbar-track {
    background: #f5f5f5;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #1a70c1;
    border-radius: 10px;
    border: 3px solid #ffffff;
  }
`;

export default GlobalStyle;
