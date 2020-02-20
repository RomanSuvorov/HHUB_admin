import React from 'react';
import PropTypes from 'prop-types';

import { CustomButton, IconWrapper } from './Button.styled';

export default function Button({
  type = 'button',
  disabled = false,
  icon = null,
  iconPosition = 'right',
  bordered = false,
  className,
  id,
  label,
  inverseColor = false,
  onClick = () => {},
}) {
  const allClasses = ['container'];

  if (className) {
    allClasses.push(className);
  }

  return (
    <CustomButton
      id={id}
      className={allClasses.join(' ')}
      disabled={disabled}
      type={type}
      onClick={onClick}
      bordered={bordered}
      inverseColor={inverseColor}
    >
      {iconPosition === 'left' && (
        <IconWrapper>{icon}</IconWrapper>
      )}
      <span>{label}</span>
      {iconPosition === 'right' && (
        <IconWrapper>{icon}</IconWrapper>
      )}
    </CustomButton>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  icon: PropTypes.object,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  bordered: PropTypes.bool,
  className: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  inverseColor: PropTypes.bool,
  onClick: PropTypes.func,
};
