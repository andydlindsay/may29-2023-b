/*
  Props:
    id: string;
    task: string;
  Props:
    isComplete: boolean;
*/
// import {useState} from 'react';
import './TodoListItem.css';

const TodoListItem = (props) => {
  const handleClick = () => {
    props.toggleTodo(props.id);
  };

  return (
    <div className="todo-list-item">
      <h2>Task: {props.task} ({props.id}) 
        <button onClick={handleClick}>{props.isComplete ? '✅' : '🟩'}</button>
      </h2>
    </div>
  );
};

export default TodoListItem;

TodoListItem.defaultProps = {
  id: 'def',
  task: 'do the laundry'
};
