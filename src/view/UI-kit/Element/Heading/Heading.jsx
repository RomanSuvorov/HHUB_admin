import React from 'react';
import PropTypes from 'prop-types';

import { HeadingWrapper } from './Heading.styled';

export default function Heading({
  id,
  className,
  content,
  as,
}) {
  const allClasses = ['container'];

  if (className) {
    allClasses.push(className);
  }

  return (
    <HeadingWrapper
      id={id}
      className={allClasses.join(' ')}
      as={as}
    >
      {content}
    </HeadingWrapper>
  );
}

Heading.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  content: PropTypes.string,
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
};

Heading.defaultProps = {
  as: 'h2',
};
