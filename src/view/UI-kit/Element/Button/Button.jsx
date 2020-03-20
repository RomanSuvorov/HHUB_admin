import React from 'react';
import PropTypes from 'prop-types';

import { CustomButton, IconWrapper } from './Button.styled';

export default function Button({
  id,
  className,
  label,
  type,
  disabled,
  icon,
  iconPosition,
  bordered,
  inverseColor,
  onClick,
}) {
  const allClasses = ['button'];

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
      {(iconPosition === 'left' && icon) && (
        <IconWrapper>{icon}</IconWrapper>
      )}
      <span>{label}</span>
      {(iconPosition === 'right' && icon) && (
        <IconWrapper>{icon}</IconWrapper>
      )}
    </CustomButton>
  );
}

Button.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit']).isRequired,
  disabled: PropTypes.bool,
  icon: PropTypes.object,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  bordered: PropTypes.bool,
  inverseColor: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'button',
  disabled: false,
  icon: null,
  iconPosition: 'right',
  bordered: true,
  inverseColor: false,
  onClick: () => {},
};
