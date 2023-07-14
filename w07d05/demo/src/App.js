import {useReducer} from 'react';

import './App.css';

import Header from './components/Header';
import TodoList from './components/TodoList';

const initialTodos = [
  {
    id: 'zyx',
    task: 'finish PhotoLabs'
  },
  {
    id: 'vut',
    task: 'learn React'
  },
  {
    id: 'srq',
    task: 'walk the dog'
  }
];

const initialState = {
  todos: initialTodos,
  completedTodos: []
};

// is to update state AND return it
const reducer = (state, action) => {
  // action => { type: string; data: anything; }
  if (action.type === 'REMOVE_TODO') {
    const todoId = action.data;
    const filteredTodos = state.completedTodos.filter((id) => id !== todoId);
    return {
      ...state,
      completedTodos: filteredTodos
    }
  }
  
  if (action.type === 'ADD_TODO') {
    const todoId = action.data;
    const copyCompletedTodos = [
      ...state.completedTodos,
      todoId,
    ];
    return {
      ...state,
      completedTodos: copyCompletedTodos
    };
  }
};

const App = () => {
  // const [todos, setTodos] = useState(initialTodos);
  // const [completedTodos, setCompletedTodos] = useState([]);

  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleTodo = (todoId) => {
    if (!todoId) return;

    // is this todoId already in the array?
    if (state.completedTodos.includes(todoId)) {
      return dispatch({ type: 'REMOVE_TODO', data: todoId });
    }

    // if it isn't, add it
    dispatch({ type: 'ADD_TODO', data: todoId });
  };

  return (
    <div className="App">
      <Header
        numTodos={state.todos.length} 
        numCompletedTodos={state.completedTodos.length}
      />
      <TodoList 
        todos={state.todos} 
        toggleTodo={toggleTodo} 
        completedTodos={state.completedTodos} 
      />
    </div>
  );
};

export default App;
