import React, { useState } from 'react';
import { useHistory, Redirect } from 'react-router-dom';

import MainLayout from '../../UI-kit/HOC/MainLayout';
import OneFieldCard from '../../UI-kit/HOC/OneFieldCard';
import { Header, Footer } from '../../components';

import {
  loginCardStyle,
  loginCardContentStyle,
  LoginWrapper,
} from './Login.styled';

export default function Login() {
  const [user, updateUser] = useState('');
  const history = useHistory();

  function handleLogin() {
    localStorage.setItem('user', user);
    history.push('/home');
  }

  if (localStorage.getItem('user')) {
    return <Redirect to={'/home'} />
  }

  return (
    <MainLayout
      headerComponent={<Header />}
      footerComponent={<Footer />}
      asideVisible={false}
    >
      <LoginWrapper>
        <OneFieldCard
          heading={<h1>Log In Page</h1>}
          containerStyles={loginCardStyle}
          contentStyles={loginCardContentStyle}
          description={<label>User (anything will work)</label>}
          inputField={<input value={user} onChange={e => updateUser(e.target.value)} />}
          buttons={
            <button disabled={!user} onClick={handleLogin}>
              Log In
            </button>
          }
        />
      </LoginWrapper>
    </MainLayout>
  )
}
