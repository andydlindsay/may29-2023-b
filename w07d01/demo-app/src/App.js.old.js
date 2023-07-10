import React from 'react';
import './App.css';

const App = () => {

  const textArea = React.createElement('textarea', { name: 'tweet-text' });
  const form = React.createElement('form', {
    method: 'GET',
    id: 'new-form', 
    action: '/login', 
    className: 'new-tweet-form'
  }, textArea);

  <form method="GET" action="/login" ></form>
  
  const h2 = React.createElement('h2', null, 'About us!'); // <h2>About us!</h2>
  const div = React.createElement('div', null, h2); 
  // <div><h2>About us!</h2></div>


  return (
    <div className="App">
      {/* <h2>Welcome to our site!</h2> */}
      {/* { div } */}
      { form }
    </div>
  );
};

export default App;
