import {Link} from 'react-router-dom';

const Products = () => {
  return (
    <div>
      <h2>See all the amazing products for sale!</h2>

      <div>
        <p><Link to="/products/1">Product #1</Link></p>
        <p><Link to="/products/2">Product #2</Link></p>
        <p><Link to="/products/3">Product #3</Link></p>
        <p><Link to="/products/4">Product #4</Link></p>
        <p><Link to="/products/5">Product #5</Link></p>
      </div>
    </div>
  );
};

export default Products;
