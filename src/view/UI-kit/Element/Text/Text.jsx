import React from 'react';
import PropTypes from 'prop-types';

import { TextWrapper } from './Text.styled';

const Text = ({
  id,
  className,
  content,
  as,
  ...props
}) => {
  const allClasses = ['text'];

  if (className) {
    allClasses.push(className);
  }

  return (
    <TextWrapper
      id={id}
      className={allClasses.join(' ')}
      as={as}
      {...props}
    >
      {content}
    </TextWrapper>
  );
};

Text.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  content: PropTypes.string,
  as: PropTypes.oneOf(['span', 'p']),
};

Text.defaultProps = {
  as: 'p',
};

export default Text;
