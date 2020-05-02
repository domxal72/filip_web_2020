import React from 'react';
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Content from './components/content';
import { theme } from './components/theme';

import AppProvider from './components/app-context';

import Web2018 from './web-2018/web-2018';
import JQPlugin from './jq-plugin';

function App() {
  return (
    <div className="App">
      <AppProvider>
        <ThemeProvider theme={theme}>
          <Router>
            <Switch>
              <Route exact path="/web-2018">
                <JQPlugin />
                <Web2018 />
              </Route>
              <Route path="/">
                <Content />
              </Route>
            </Switch>
          </Router>
        </ThemeProvider>
      </AppProvider>
    </div>
  );
}

export default App;
