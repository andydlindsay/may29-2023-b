/*
  Props:
    todos: array;
  State:
    none;
*/

import TodoListItem from "./TodoListItem";

const TodoList = (props) => {
  const mappedTodos = props.todos.map((todo) => {
    return <TodoListItem
      key={todo.id} 
      id={todo.id} 
      task={todo.task} 
      toggleTodo={props.toggleTodo}
      isComplete={props.completedTodos.includes(todo.id)}
    />;
  });

  return (
    <div>
      { mappedTodos }
    </div>
  );
};

export default TodoList;

TodoList.defaultProps = {
  todos: [
    {
      id: 'ghi',
      task: 'brush the cats',
    },
    {
      id: 'jkl',
      task: 'pick up dry cleaning'
    }
  ]
};
