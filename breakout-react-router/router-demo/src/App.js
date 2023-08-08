import './App.css';

import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

import About from './components/About';
import Products from './components/Products';
import Home from './components/Home';
import Product from './components/Product';
import Nav from './components/Nav';

const App = () => {
  return (
    <div className="App">
      <h2>React Router Demo</h2>

      <BrowserRouter>
        <Nav />
      
        <Routes>
          <Route path="*" element={<Navigate to="/about" />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<h2>Admin Page</h2>} />
          <Route path="/products/:productId" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
