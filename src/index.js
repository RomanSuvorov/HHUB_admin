import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import './style/index.css';

import App from './container/App';

ReactDOM.render(
  <App />,
  document.getElementById('root'));

serviceWorker.unregister();
