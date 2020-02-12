import React, { useState } from 'react';
import { useHistory, Redirect } from 'react-router-dom';

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
    <div>
      <h1>Log In Page</h1>
      <label>User (anything will work)</label>
      <input value={user} onChange={e => updateUser(e.target.value)} />
      <button disabled={!user} onClick={handleLogin}>
        Log In
      </button>
    </div>
  )
}
