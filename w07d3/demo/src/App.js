import './App.css';

import LoginForm from './components/LoginForm';
// import ProductListItem from './components/ProductListItem';
import ProductList from './components/ProductList';

const App = () => {
  return (
    <div className="App">
      <h2>Demo App</h2>
      <LoginForm />
      <ProductList />
    </div>
  );
};

export default App;
