import { useState} from 'react';

const LoginForm = (props) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (event) => {
    console.log('submit Handler ran!');
    event.preventDefault();
    // alert(`You tried to log in with username=${username} and password=${password}`);
    props.setLoggedIn(true);
  };

  return (
    <form onSubmit={ submitHandler }>
      <label>Username:</label>
      <input 
        value={ username }
        onChange={ (event) => { setUsername(event.target.value) } }
      />
      <br/>
      <label>Password:</label>
      <input 
        type="password"
        value={ password }
        onChange={ (event) => { setPassword(event.target.value) } }
      />
      <br/>
      <button>Login!</button>
    </form>
  );
};

export default LoginForm;