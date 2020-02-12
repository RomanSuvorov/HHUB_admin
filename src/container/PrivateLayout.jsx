import React from 'react';
import { Redirect } from 'react-router-dom';

import { RenderRoutes } from "../routes";
import { useHistory } from 'react-router-dom';

export default function PrivateLayout({ component: Component, ...rest }) {
  const history = useHistory();

  function handleLogout() {
    localStorage.removeItem('user');
    history.push('/login');
  }

  if (!localStorage.getItem('user')) {
    return (
      <Redirect
        to={{
          pathname: '/login',
          state: { from: rest.location }
        }}
      />
    );
  }

  // return (
  // <MainLayout>
  // <RenderRoutes {...rest} />
  // </MainLayout>
  // )

  return (
    <div>
      <RenderRoutes {...rest} />
      <button  onClick={handleLogout}>
        LogOut
      </button>
    </div>
  )
}
