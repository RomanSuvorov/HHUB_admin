import React from 'react';

import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import { Login, Dashboard } from '../view/pages';

export const PUBLIC_ROUTES = [
  {
    path: '/',
    key: 'APP_LOGIN_DEFAULT',
    exact: true,
    component: Login,
  },
  {
    path: '/login',
    key: 'APP_LOGIN',
    exact: true,
    component: Login,
  },
];

export const REGISTER_PRIVATE_ROUTES = [
  {
    path: '/',
    key: 'APP_REGISTER',
    exact: true,
    component: Login,
  },
];

export const IS_REGISTERED_PRIVATE_ROUTES = [
  {
    path: '/',
    key: 'APP_HOME_DEFAULT',
    exact: true,
    component: Dashboard,
  },
  {
    path: '/dashboard',
    key: 'APP_HOME_DASHBOARD',
    exact: true,
    component: Dashboard,
  },
  {
    path: '/profile',
    key: 'APP_HOME_PROFILE',
    exact: true,
    component: () => <h1>Profile</h1>,
  },
];

export const IS_ADMIN_PRIVATE_ROUTES = [
  ...IS_REGISTERED_PRIVATE_ROUTES,
  {
    path: '/admin',
    key: 'ADMIN_ROUTES',
    exact: true,
    component: () => <h1>Admin Panel</h1>,
  },
];

export const IS_BANNED_ROUTES = [
  {
    path: '/',
    key: 'BANNED_ROUTES',
    exact: true,
    component: () => <h1>You Are Banned</h1>,
  },
];

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={props => <route.component {...props} routes={route.routes} />}
    />
  );
}

export function RenderRoutes({ routes }) {
  return (
    <Switch>
      {
        routes.map(route => <RouteWithSubRoutes key={route.key}  {...route} />)
      }
      <Redirect to={'/'} />
    </Switch>
  )
}
