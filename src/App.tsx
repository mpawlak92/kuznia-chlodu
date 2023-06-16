import { ThemeProvider } from 'styled-components';
import { light, dark } from './theme';

import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './style/GlobalStyle';
import Routing from './Routing/Routing';

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
    // basename={import.meta.env.DEV ? '/' : '/kuznia-chlodu/'}
    <BrowserRouter>
      <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
        <ThemeProvider theme={theme === 'light' ? light : dark}>
          <GlobalStyle />
          <div>XD</div>
          <Routing />
        </ThemeProvider>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
};

export default App;
