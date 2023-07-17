# W08D01 - Data Fetching & Other Side Effects

### To Do
- [x] Pure Functions and Side Effects
- [x] `useEffect`
- [x] Cleanup
- [x] _useEffect_ Flow
- [x] Dependencies
- [x] Data Fetching

### Pure Function
* doesn't rely on outside values
* given the same arguments, returns the same value
* do not have side effects

```js
let addition = 2;
let user = null;

const addTwo = (num) => {
  const total = num + addition;
  user = {username: 'alice'};
  // console.log(total);
  return total;
};
```

### Most Common Side Effects
* writing to standard out
* modifying the DOM directly
* data fetching!
* setting timers and intervals
* connecting to web socket servers

### useEffect hook
* control when and how often our side effects run

```js
useEffect(() => { /* side effect code */ }) // runs on every render
useEffect(() => {}, [counter]) // only runs if something in the array changes
useEffect(() => {}, []) // only called on initial render
```















