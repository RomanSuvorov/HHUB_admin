import React from 'react';
import { connect } from 'react-redux';

import Container from '../../UI-kit/HOC/Container';
import Heading from '../../UI-kit/Element/Heading';
import Text from '../../UI-kit/Element/Text';
import Social from '../../UI-kit/Element/Social';

import LogInForm from '../../components/LogInForm/LogInForm';
// TODO: перенести в админку
import data from '../../../data';

import { checkPhone, checkCode, goToPhoneNumberInput } from '../../../sdk/actions/user';

import {
  BoxWrapper,
  LoginWrapper,
  BlurBackground,
  ContentBox,
  LogoBox,
  Logo,
  HelpBox,
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
          <ContentBox>
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
              as="h4"
            />
            <Text
              content="#HACKATHONHUB  — это платформа для проведения IT-хакатонов и продвижения инноваций. Здесь всего за один 48/72 часовой хакатон проект превращается в продукт. Комьюнити объединяет
 креативных специалистов, стартаперов и инвесторов"
              className="welcomeBox_description"
            />
            <Social links={data.socialLinks} />
          </ContentBox>
        </BoxWrapper>
        <BoxWrapper className="formBox">
          <BlurBackground />
          <ContentBox>
            <LogoBox>
              <Logo />
              <Heading
                content="ПАНЕЛЬ УПРАВЛЕНИЯ ПРОФИЛЕМ"
                className="formBox_title"
                as="h3"
              />
              <Heading
                content="Віддалений контроль 24/7"
                className="formBox_subtitle"
                as="h4"
              />
            </LogoBox>
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
            <HelpBox>
              <Text
                content="Есть вопросы? Пишите нам"
                className="formBox_supportText"
              />
              <Text
                content="support@gliesereum.com"
                className="formBox_supportLink"
                as="a"
                href="mailto:support@gliesereum.com"
              />
            </HelpBox>
          </ContentBox>
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
