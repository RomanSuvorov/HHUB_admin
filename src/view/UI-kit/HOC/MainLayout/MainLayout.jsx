import React from 'react';

import {
  MainLayoutWrapper,
  MainContentWrapper,
} from './MainLayout.styled';

export default function MainLayout({
  headerComponent,
  headerVisible,
  navigationComponent,
  navigationVisible,
  asideComponent,
  asideVisible,
  asidePosition,
  footerComponent,
  footerVisible,
  children,
  className,
  id,
}) {
  const allClasses = ['mainLayout'];

  if (className) {
    allClasses.push(className);
  }

  return (
    <MainLayoutWrapper
      h1="h1"
      h2="h2"
      h3="h3"
      h4="h4"
      h5="h5"
      h6="h6"
      subTitle1="p"
      body1="span"
      id={id}
      className={allClasses.join(' ')}
    >
      {headerVisible && headerComponent}
      {navigationVisible && navigationComponent}
      <MainContentWrapper>
        {asideVisible && asidePosition === 'left' && asideComponent}
        {children}
        {asideVisible && asidePosition === 'right' && asideComponent}
      </MainContentWrapper>
      {footerVisible && footerComponent}
    </MainLayoutWrapper>
  );
}

MainLayout.defaultProps = {
  headerComponent: <div />,
  headerVisible: true,

  navigationComponent: <div />,
  navigationVisible: true,

  asideComponent: <div />,
  asideVisible: true,
  asidePosition: 'right',

  footerComponent: <div />,
  footerVisible: true,
};
