import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import ROUTES, { RenderRoutes } from "../routes";
import theme from '../theme'

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <RenderRoutes routes={ROUTES} />
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

export default App;
