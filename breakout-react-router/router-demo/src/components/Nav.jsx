import {Link} from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <h2>Top Navigation Bar</h2>

      <Link to="/">Home </Link>
      <Link to="/about">About </Link>
      <Link to="/products">Products </Link>
    </div>
  );
};

export default Nav;
