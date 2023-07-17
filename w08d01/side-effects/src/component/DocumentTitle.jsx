import {useEffect, useState} from 'react';

const DocumentTitle = () => {
  const [counter, setCounter] = useState(0);
  const [username, setUsername] = useState('');

  useEffect(() => {
    // if (counter > 10) return;

    console.log('setting the document title');
    document.title = `the counter is ${counter}`;
  }, [counter]);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      console.log('inside the interval', counter);
    }, 3000);

    const cleanup = () => {
      clearInterval(intervalRef);
    };

    return cleanup; 
  });

  const handleClick = () => {
    // setCounter(counter + 1);
    setCounter(prev => prev + 1);
  };

  return (
    <div>
      <h2>DocumentTitle component</h2>
      <h2>Count: {counter}</h2>
      <button onClick={handleClick}>Click me!</button>

      <div>
        <label>Username:</label>
        <input 
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
    </div>
  );
};

export default DocumentTitle;
