import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import ROUTES, { RenderRoutes } from "../routes";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <RenderRoutes routes={ROUTES} />
      </BrowserRouter>
    );
  }
}

export default App;
