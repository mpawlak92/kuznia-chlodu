import { ThemeProvider } from 'styled-components';
import { light, dark } from './theme';

import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './style/GlobalStyle';
import Routing from './Routing/Routing';
// import Menu from './components/Menu/Menu';
import { ThemeContext } from './stores/context';

const App = () => {
  const [theme, setThme] = useState('light');

  const changeTheme = () => {
    if (theme === 'light') {
      setThme('dark');
    } else {
      setThme('light');
    }
  };
  return (
    <BrowserRouter basename={import.meta.env.DEV ? '/' : '/kuznia-chlodu/'}>
      <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
        <ThemeProvider theme={theme === 'light' ? light : dark}>
          <GlobalStyle />
          <Routing />
        </ThemeProvider>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
};

export default App;
