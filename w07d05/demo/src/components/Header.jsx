const Header = (props) => {
  return (
    <div>
      <h2>Todo List App! {props.numCompletedTodos}/{props.numTodos}</h2>
    </div>
  );
};

export default Header;
