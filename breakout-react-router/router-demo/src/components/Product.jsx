import { useEffect } from 'react';
import {useParams, useNavigate} from 'react-router-dom';

const Product = () => {
  const params = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/about');
    }, 3000);
  }, []);

  // useEffect(() => {
  //   fetch(`http://localhost:8001/api/products/${params.productId}`)
  //     .then()
  // }, [params.productId]);

  return (
    <div>
      <h2>Detail for one product</h2>
      <h2>You are seeing product #{params.productId}</h2>
    </div>
  );
};

export default Product;
