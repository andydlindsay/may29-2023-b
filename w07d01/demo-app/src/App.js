import React from 'react';
import './App.css';

import Header from './components/Header';

const App = () => {
  // const myArr = [
  //   <h3 key="abc">First element</h3>,
  //   <p key="def">Second element</p>,
  //   <aside key="ghi">Third element</aside>
  // ];

  return (
    <div className="App">
      <h2>App component</h2>

      <Header heading="this is the about page" className="yellow" /> 
      <Header heading="add product to cart" />
      { /* above is same as: Header({ heading: 'add product to cart' }) */}
      <Header heading="invest now!" />
    </div>
  );
};

export default App;
