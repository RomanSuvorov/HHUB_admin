import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  FormControl,
  BasedControl,
  LabelControl,
  InfoControl,
  ErrorControl,
} from './Input.styled';

function Input({
  className,
  label,
  type,
  icon,
  iconPosition,
  readOnly,
  disable,
  errorMessage,
  infoMessage,
  defaultValue,
  value,
  pattern,
  autoFocus,
  required,
  passwordShowHide,
  onIconClick,
  onChange,
  onFocus,
  onBlur,
  ...props
}) {
  const [state, setState] = useState({
    focus: false,
  });

  const handleOnFocus = event => {
    setState({
      ...state,
      focus: true,
    });
    onFocus(event);
  };

  const handleOnBlur = event => {
    setState({
      ...state,
      focus: false,
    });
    onBlur(event);
  };

  const getInputStatus = () => {
    if (state.focus || value) {
      className = 'isFocused';
    }

    if (disable) {
      className = className + ' isDisabled';
    }

    if (errorMessage) {
      className = className + ' isError';
    }

    return className;
  };

  let inputElement, htmlFor;

  const allClasses = ['form-control'];

  if (className) {
    allClasses.push(className);
  }

  if (label) {
    htmlFor = label.replace(/\s+/g, '_').toLowerCase();
  }

  const LabelField = label && (
    <LabelControl htmlFor={htmlFor}>
      {label}
    </LabelControl>
  );

  const InfoField = infoMessage && (
    <InfoControl>
      {infoMessage}
    </InfoControl>
  );

  const ErrorField = errorMessage && (
    <ErrorControl>
      {errorMessage}
    </ErrorControl>
  );

  switch (type) {
    case 'tel':
      inputElement = (
        <BasedControl>
          <input
            type={type}
            id={htmlFor}
            name={htmlFor}
            value={value}
            autoFocus={autoFocus}
            onChange={onChange}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            {...props}
          />
          <fieldset aria-hidden={true} className="input-fieldset">
            <legend className="input-fieldset-legend">
              <span>{label}</span>
            </legend>
          </fieldset>
        </BasedControl>
      );
      break;
    case 'password':
      break;
    case 'email':
      break;
    default:
      inputElement = (
        <BasedControl>
          <input
            type={type}
            id={htmlFor}
            name={htmlFor}
            value={value}
            readOnly={readOnly}
            disabled={disable}
            autoFocus={autoFocus}
            onChange={onChange}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            {...props}
          />
          <fieldset aria-hidden={true} className="input-fieldset">
            <legend className="input-fieldset-legend">
              <span>{label}</span>
            </legend>
          </fieldset>
        </BasedControl>
      )
  }

  return (
    <FormControl
      className={`${allClasses.join(' ')} ${getInputStatus()}`}
    >
      {LabelField}
      {inputElement}
      {InfoField}
      {ErrorField}
    </FormControl>
  );
}

function ReduxFormInput ({
  input,
  type,
  label,
  meta,
  infoMessage,
  ...props
}) {
  return (
    <Input
      type={type}
      label={label}
      value={input.value}
      errorMessage={meta.error}
      infoMessage={infoMessage}
      onChange={input.onChange}
      {...props}
    />
  )
}

Input.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['tel', 'password', 'email', 'text']),
  icon: PropTypes.object,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  readOnly: PropTypes.bool,
  disable: PropTypes.bool,
  errorMessage: PropTypes.string,
  infoMessage: PropTypes.string,
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  pattern: PropTypes.instanceOf(RegExp),
  autoFocus: PropTypes.bool,
  required: PropTypes.bool,
  passwordShowHide: PropTypes.bool,
  onIconClick: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
};

Input.defaultProps = {
  className: '',
  label: '',
  type: 'text',
  icon: null,
  iconPosition: 'right',
  readOnly: false,
  disable: false,
  errorMessage: undefined,
  infoMessage: undefined,
  defaultValue: undefined,
  value: undefined,
  pattern: /^$/g,
  autoFocus: false,
  required: false,
  passwordShowHide: false,
  onIconClick: () => {},
  onChange: () => {},
  onFocus: () => {},
  onBlur: () => {},
};

export default Input;
export { ReduxFormInput };
