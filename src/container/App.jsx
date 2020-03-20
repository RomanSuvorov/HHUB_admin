import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import Delegate from './Delegate';
import theme from '../theme';
import { createReduxStore } from '../sdk';
import reducers from '../sdk/reducers';

const store = createReduxStore(reducers);

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <BrowserRouter>
            <Delegate />
          </BrowserRouter>
        </Provider>
      </ThemeProvider>
    );
  }
}

export default App;
