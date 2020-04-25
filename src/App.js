import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'

import { GlobalStyle } from './components/global-styles';
import Header from './components/header';
import Main from './components/main';
import { theme } from './components/theme';

function App() {
  const initialState = {
    visibleContact: false,
    visiblePortfolio: true,
    navToggle: true,
  }

  const [state, setState] = useState(initialState);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Header state={state} setState={setState} />
          <Main state={state} setState={setState} />
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
