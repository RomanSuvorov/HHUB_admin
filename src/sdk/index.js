import produce from 'immer';
import { compose, combineReducers, createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import Sdk from './hackathonhubSDK';

// PREPARE REDUCERS
const createReducer = (cases = {}, defaultState = {}) =>
  (state = defaultState, action) => produce(state, draft => {
    if (action && action.type && cases[action.type] instanceof Function) {
      cases[action.type](draft, action.payload)
    }
  });

// PREPARE STORE
function reHydrateStore() {
  if (localStorage.getItem("_cp_storage") !== null) {
    return JSON.parse(localStorage.getItem("_cp_storage"))
  }
}

function localStorageMiddleware({ getState }) {
  return (next) => (action) => {
    const result = next(action);
    localStorage.setItem("_cp_storage", JSON.stringify(
      getState()
    ));
    return result;
  };
}

function _configureStore(reducers) {
  const composeEnhancers = typeof window === 'object'
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

  return createStore(
    combineReducers({
      ...reducers
    }),
    // reHydrateStore(),
    composeEnhancers(applyMiddleware(
      ReduxPromise,
      thunk,
      createLogger,
      localStorageMiddleware,
      )),
  );
}

const createReduxStore = _configureStore;

const hhsdk = Sdk({
  appId: '4ba91ec3-5a50-400f-9d29-08e4f6f022e9',
  hhubApi: 'https://bot.hhub.info/api',
  hhubDevApi: 'http://localhost:8888/api',
  development: true,
  languagePack: "coupler-web",
});

export {
  createReduxStore,
  createReducer,
  hhsdk,
};
