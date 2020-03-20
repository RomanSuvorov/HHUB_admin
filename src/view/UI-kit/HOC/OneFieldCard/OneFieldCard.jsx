import React from 'react';

import {
  OneFieldCardWrapper,
  HeadingWrapper,
  ContentWrapper,
  BottomWrapper,
} from './OneFieldCard.styled';

export default function OneFieldCard({
  heading,
  description,
  simpleForm,
  className,
  id,
  width,
  contentClass,
  containerStyles,
  contentStyles,
}) {
  const allClasses = ['oneFieldCard'];

  if (className) {
    allClasses.push(className);
  }

  return (
    <OneFieldCardWrapper
      id={id}
      className={allClasses.join(' ')}
      styles={containerStyles}
      width={width}
    >
      <HeadingWrapper>
        {heading}
      </HeadingWrapper>
      <ContentWrapper
        className={contentClass}
        styles={contentStyles}
      >
        {description}
        {simpleForm}
      </ContentWrapper>
    </OneFieldCardWrapper>
  )
}
