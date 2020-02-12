import React from 'react';

import {
  Route,
  Switch,
} from 'react-router-dom';

import PrivateLayout from '../container/PrivateLayout';
import { Login, Dashboard } from '../view/pages';

const ROUTES = [
  {
    path: '/',
    key: 'APP',
    exact: true,
    component: Login,
  },
  {
    path: '/login',
    key: 'APP_LOGIN',
    exact: true,
    component: Login,
  },
  {
    path: '/home',
    key: 'APP_DASHBOARD',
    component: PrivateLayout,
    routes: [
      {
        path: '/home/',
        key: 'APP_HOME_DASHBOARD',
        exact: true,
        component: Dashboard,
      },
      {
        path: '/home/dashboard',
        key: 'APP_HOME_DASHBOARD',
        exact: true,
        component: Dashboard,
      },
      {
        path: '/home/profile',
        key: 'APP_HOME_PROFILE',
        exact: true,
        component: () => <h1>Profile</h1>,
      },
    ],
  },
];

export default ROUTES;

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
      <Route component={() => <h1>Not Found!</h1>} />
    </Switch>
  )
}
