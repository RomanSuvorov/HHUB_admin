import React from 'react';
import { connect } from 'react-redux';

import Container from '../../UI-kit/HOC/Container';
import Heading from '../../UI-kit/Element/Heading';
import Text from '../../UI-kit/Element/Text';

import LogInForm from '../../components/LogInForm/LogInForm';

import { checkPhone, checkCode, goToPhoneNumberInput } from '../../../sdk/actions/user';

import {
  BoxWrapper,
  LoginWrapper,
  BlurBackground,
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
      <Container className="loginContainer">
        <BoxWrapper className="welcomeBox">
          <BlurBackground />
          <Heading
            content={"welcome to hackathonhub"}
            className="welcomeBox_heading"
          />
          <iframe
            className="welcomeBox_videoBox"
            title="HackathonHub Promo"
            width="549"
            height="275"
            src="https://www.youtube.com/embed/9-8KYHo_wtc?controls=0&showinfo=0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            frameborder="0"
          />
          <Heading
            content="Как зарабатывать онлайн"
            className="welcomeBox_title"
            as="h3"
          />
          <Text
            content="#HACKATHONHUB  — это платформа для проведения IT-хакатонов и продвижения инноваций. Здесь всего за один 48/72 часовой хакатон проект превращается в продукт. Комьюнити объединяет
 креативных специалистов, стартаперов и инвесторов"
            className="welcomeBox_description"
          />
        </BoxWrapper>
        <BoxWrapper className="formBox">
          <BlurBackground />
          {
            showSide === 1 && (
              <LogInForm
                mode="phone"
                onSubmit={({ phoneNumber }) => checkPhone(phoneNumber)}
              />
            )
          }
          {
            showSide === 2 && (
              <LogInForm
                mode="code"
                onSubmit={({ codeNumber }) => checkCode(phone, codeNumber)}
                onGoBackHandler={goToPhoneNumberInput}
              />
            )
          }
        </BoxWrapper>
      </Container>
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
