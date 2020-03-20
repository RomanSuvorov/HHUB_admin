import { user as Types } from '../actionsTypes';
import { SubmissionError } from 'redux-form';

export function handleError({ dispatch, error }) {
  const errorType = error.status;
  const errorMessage = error.message;

  switch (errorType) {
    case 403:
      dispatch({ type: Types.error.ON_UNREGISTERED_USER });
      break;
    case 401:
      dispatch({ type: Types.error.LOG_OUT_USER });
      break;
  }
}

function _validate(values, mode) {
  const errors = {};

  switch (mode) {
    case 'phone':
      if (!values.phoneNumber) {
        errors.phoneNumber = 'phone is required';
        return errors;
      }
      if (!/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/.test(values.phoneNumber)) {
        errors.phoneNumber = 'invalid phone format';
        return errors;
      }
      if (values.phoneNumber.length < 6) {
        errors.phoneNumber = 'invalid phone length';
        return errors;
      }
      break;
    case 'code':
      if (!values.codeNumber) {
        errors.codeNumber = 'code is required';
        return errors;
      }
      if (values.codeNumber.length !== 6) {
        errors.codeNumber = 'code must be 6 characters';
        return errors;
      }
      break;
    default:
      if (!values.phoneNumber) {
        errors.phoneNumber = 'phone is required';
        return errors;
      }
      if (/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/.test(values.phoneNumber)) {
        errors.phoneNumber = 'invalid phone format';
        return errors;
      }
      if (values.phoneNumber.length < 6) {
        errors.phoneNumber = 'invalid phone length';
        return errors;
      }
      break;
  }
}

export function validator(values, mode, onSubmit) {
  return new Promise((resolve, reject) => {
    const errors = _validate(values, mode);
    if (errors) {
      reject(new SubmissionError(errors));
    } else {
      resolve();
      onSubmit(values);
    }
  })
}

export const normalizer = {
  phone: value => {
    if (!value) {
      return value;
    }
    const isHasPlusSymb = (value && value[0] === '+') ? '+' : '';
    const onlyNums = value.replace(/[^\d]/g, '');

    return isHasPlusSymb + onlyNums;
  },
  code: value => {
    if (!value) {
      return value;
    }
    return value.replace(/[^\d]/g, '');
  },
};
