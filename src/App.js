import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'

import Content from './components/content';
import { theme } from './components/theme';

import AppProvider, { AppContext } from './components/app-context';

function App() {

  return (
    <div className="App">
      <AppProvider>
        <ThemeProvider theme={theme}>
          <Router>
            <Content />
          </Router>
        </ThemeProvider>
      </AppProvider>
    </div>
  );
}

export default App;
