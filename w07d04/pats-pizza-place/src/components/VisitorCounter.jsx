import {useState} from 'react';

const VisitCounter = () => {
  let [counter, setCounter] = useState(0);

  const clickHandler = () => {
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 100);

    setCounter(prev => prev + 1); // 1
    setCounter((prev) => prev + 1);
    setCounter((prev) => prev + 1);
  };

  return (
    <div>
      <h2>Visitor Counter: {counter}</h2>
      <button onClick={clickHandler}>Click me!</button>
    </div>
  );
};

export default VisitCounter;
