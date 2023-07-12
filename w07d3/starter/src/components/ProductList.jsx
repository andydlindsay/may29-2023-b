import ProductListItem from "./ProductListItem";

const ProductList = (props) => {

 const productList = props.products.map((product, index) => {
  return <li>
    <ProductListItem 
    name={ product.name }
    price={ product.price }
    description={ product.description }
    key={index}
  />
  </li>
 });

  return (
    <ul>
      { productList }
    </ul>
  );
};

export default ProductList;

ProductList.defaultProps = {
  products: [
    {
      name: 'Lightsaber',
      price: "987.65",
      description: 'Super sharp hot thing.'
    },
    {
      name: 'Droid',
      price: "1987.65",
      description: 'Super smart helpful thing.'
    },
    {
      name: 'Land Cruiser',
      price: "99,987.65",
      description: 'These are the hover cars we were promised all along!'
    },
  ]
};
