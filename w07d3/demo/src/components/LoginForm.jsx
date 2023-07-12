import { useState } from 'react';

const LoginForm = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  console.log('LoginForm (re)rendered:', username, password);

  const submitHandler = (event) => {
    event.preventDefault();
    alert(`You are logging in with username: ${username} / pass: ${password}`);
  };

  return (
    <div>
      <h2>Login Form</h2>
      <form>
        <label>Username</label>        
        <input 
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <label>Password</label>        
        <input 
          value={password}
          onChange={event => setPassword(event.target.value)}
          type="password"
        />
        <button type="submit" onClick={submitHandler}>Login!</button>
      </form>
    </div>
  );
};

export default LoginForm;