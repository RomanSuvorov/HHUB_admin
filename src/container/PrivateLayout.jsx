import React from 'react';
import { Redirect } from 'react-router-dom';

import { RenderRoutes } from '../routes';

import MainLayout from '../view/UI-kit/HOC/MainLayout';
import { Header, Footer } from '../view/components';

export default function PrivateLayout({ component: Component, ...rest }) {
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

  return (
    <MainLayout
      headerComponent={<Header />}
      footerComponent={<Footer />}
      asideVisible={false}
      asidePosition="left"
    >
      <RenderRoutes {...rest} />
    </MainLayout>
  );
}
