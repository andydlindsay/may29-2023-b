import './App.css';

import { useState } from 'react';

import LoginForm from './components/LoginForm';
import ProductListItem from './components/ProductListItem';
import ProductList from './components/ProductList';

const App = () => {

  const [loggedIn, setLoggedIn] = useState(false);

  const loading = false;

  const ourOwnListOfProducts = [
    {
      name: 'Data',
      price: "11,987.65",
      description: 'This is me mixing Star Wars and Star Trek!'
    },
    {
      name: 'Enterprise',
      price: "999,987.65",
      description: 'Fast!'
    },
  ];

  return (
    <div className="App">
      <h2>Demo App</h2>
      { !loggedIn && <LoginForm setLoggedIn={setLoggedIn}/> }
      { loggedIn && ( loading && <h4>I am loading the list.</h4> )}
      { loggedIn && ( !loading && <ProductList products={ ourOwnListOfProducts }/> ) }
    </div>
  );
};

export default App;
