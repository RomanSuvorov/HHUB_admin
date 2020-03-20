import React from 'react';
import { connect } from 'react-redux';

import OneFieldCard from '../../UI-kit/HOC/OneFieldCard';
import Heading from '../../UI-kit/Element/Heading';
import Text from '../../UI-kit/Element/Text';

import LogInForm from '../../components/LogInForm/LogInForm';

import { checkPhone, checkCode, goToPhoneNumberInput } from '../../../sdk/actions/user';

import {
  loginCardStyle,
  loginCardContentStyle,
  LoginWrapper,
} from './Login.styled';

function Login({
  showSide,
  phone,
  checkPhone,
  checkCode,
  goToPhoneNumberInput,
}) {
  return (
    <LoginWrapper>
      {
        showSide === 1 && (
          <OneFieldCard
            heading={<Heading content={'Log In Page'}/>}
            containerStyles={loginCardStyle}
            contentStyles={loginCardContentStyle}
            description={<Text content={'Input your phone number'}/>}
            simpleForm={<LogInForm
              mode="phone"
              onSubmit={({ phoneNumber }) => checkPhone(phoneNumber)}
            />}
          />
        )
      }
      {
        showSide === 2 && (
          <OneFieldCard
            heading={<Heading content={'Log In Page'} />}
            containerStyles={loginCardStyle}
            contentStyles={loginCardContentStyle}
            description={<Text content={'Input your code from SMS'} />}
            simpleForm={<LogInForm
              mode="code"
              onSubmit={({ codeNumber }) => checkCode(phone, codeNumber)}
              onGoBackHandler={goToPhoneNumberInput}
            />}
          />
        )
      }
    </LoginWrapper>
  )
}

const mapStateToProps = state => ({
  loading: state.user.login.loading,
  error: state.user.login.error,
  phone: state.user.login.phone,
  showSide: state.user.login.showSide,
});

export default connect(
  mapStateToProps,
  {
    checkPhone,
    checkCode,
    goToPhoneNumberInput,
  },
)(Login);
