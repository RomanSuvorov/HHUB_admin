import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import Button from '../../UI-kit/Element/Button';
import Text from '../../UI-kit/Element/Text';
import { ReduxFormInput } from '../../UI-kit/Element/Input';
import { normalizer, validator } from '../../../sdk/utils';

import {
  FormWrapper,
  FieldRow,
  ButtonWrapper,
  SendAgainBox,
} from './LogInForm.styled';

let LogInForm = ({
  mode,
  pristine,
  submitting,
  valid,
  onSubmit,
  handleSubmit,
  onGoBackHandler,
}) => {
  let Form;
  if (mode === 'phone') {
    Form = (
      <>
        <FieldRow>
          <Field
            name="phoneNumber"
            type="tel"
            component={ReduxFormInput}
            infoMessage={"Формат: +380 88 88 88 888"}
            label="Номер телефона"
            normalize={normalizer.phone}
            autoFocus={true}
          />
        </FieldRow>

        <ButtonWrapper>
          <Button
            type="submit"
            label="Получить код"
            bordered={true}
            icon={
              <i className={`
                material-icons
                material-icons-outlined
                md-light
                ${(!valid || pristine || submitting) && 'md-inactive'}
              `}>send</i>
            }
            iconPosition="right"
            disabled={!valid || pristine || submitting}
          />
        </ButtonWrapper>
      </>
    );
  } else if (mode === 'code') {
    Form = (
      <>
        <FieldRow>
          <Field
            name="codeNumber"
            type="text"
            component={ReduxFormInput}
            label="Код с SMS"
            normalize={normalizer.code}
            autoFocus={true}
          />
        </FieldRow>

        <ButtonWrapper>
          <Button
            type="submit"
            label="Вход в систему"
            bordered={true}
            icon={
              <i className={`
                material-icons
                material-icons-outlined
                md-light
                ${(!valid || pristine || submitting) && 'md-inactive'}
              `}>exit_to_app</i>
            }
            iconPosition="right"
            disabled={!valid || pristine || submitting}
          />
          <SendAgainBox>
            <Text
              content="Не пришел код?"
              className="sendAgain_text"
            />
            <Text
              content="Повторить попытку"
              className="sendAgain_button"
              as="button"
              onClick={onGoBackHandler}

            />
          </SendAgainBox>
        </ButtonWrapper>
      </>
    )
  } else {
    return;
  }


  return (
    <FormWrapper onSubmit={handleSubmit((values) => validator(values, mode, onSubmit))}>
      {Form}
    </FormWrapper>
  );
};

LogInForm.propTypes = {
  mode: PropTypes.oneOf(['code', 'phone']),
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  valid: PropTypes.bool,
  onSubmit: PropTypes.func,
  handleSubmit: PropTypes.func,
  onGoBackHandler: PropTypes.func,
};

LogInForm.defaultProps = {
  mode: 'phone',
  onSubmit: () => {},
  handleSubmit: () => {},
  onGoBackHandler: () => {},
};

LogInForm = reduxForm({
  form: 'LogIn',
})(LogInForm);

export default LogInForm;
