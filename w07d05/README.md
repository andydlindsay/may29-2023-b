# W07D05 - React Review

### To Do
* [x] Review
  * [x] Building Components
  * [x] Props
  * [x] Immutable Patterns
* [x] `useReducer` demo
* [x] Q and A

### Component Planning
- App - state: todos, completedTodos, setCompletedTodos
  - Header - props: todos
  - TodoList - props: todos
    - TodoListItem - props: todo, props: isComplete, setCompletedTodos
  - NewTodoForm - props: todos, setTodos, state: formData

### useReducer
* hook that helps us manage state
* all state modifications are made in one file
* pass down helper functions to the rest of our code

* useReducer
  * reducer function (update state)
  * initial state
* returns
  * state
  * dispatch function
