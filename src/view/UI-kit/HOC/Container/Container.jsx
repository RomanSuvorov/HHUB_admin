import React from 'react';

import { ContainerWrapper } from './Container.styled';

export default function Container({
  children,
  className,
  id,
  fullWidth,
  noGutter,
  width,
  styles = null,
}) {
  const allClasses = ['container'];

  if (className) {
    allClasses.push(className);
  }

  return (
    <ContainerWrapper
      styles={styles}
      id={id}
      className={allClasses.join(' ')}
      fullWidth={fullWidth}
      noGutter={noGutter}
      width={width}
    >
      {children}
    </ContainerWrapper>
  )
}
