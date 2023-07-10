const Header = (props) => {
  console.log(props);

  return (
    <h2 className={props.className}>{ props.heading }</h2>
  );
};

export default Header;

// ESM ECMAScript modules (export default, export const, import)
// CJS CommonJS syntax (module.exports && require)