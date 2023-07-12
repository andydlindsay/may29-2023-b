import './ProductListItem.css';

const ProductListItem = (props) => {

  /**
   * Props:
   *  name: string
   *  price: number
   *  description: string
   */

  return (
    <>
      <div className="productListItem">
        <header>
          <span className="productTitle">{ props.name }</span>
          <span className="price">${ props.price }</span>
        </header>
        <p>{ props.description }</p>
      </div>
    </>
  );
};

export default ProductListItem;

ProductListItem.defaultProps = {
  name: 'Land Cruiser',
  price: '34,667.89',
  description: 'Excellent for fast travel over desert terrain.'
};
