import {useState} from 'react';

const Pizza = () => {
  // const [toppings, setToppings] = useState([]);
  // const [crust, setCrust] = useState('stuffed');

  const [pizza, setPizza] = useState({
    toppings: [],
    crust: 'stuffed',
    isGlutenFree: false
  });

  const [newTopping, setNewTopping] = useState('');
  
  const addTopping = () => {
    const newPizza = {
      ...pizza,
      toppings: [
        ...pizza.toppings,
        newTopping
      ]
    };

    setPizza(newPizza);
    setNewTopping('');
  };

  const mappedToppings = pizza.toppings.map((topping) => {
    return <p key={topping}>{topping}</p>;
  });

  const updateCrust = (event) => {
    const crust = event.target.value;
    const newPizza = {
      ...pizza,
      crust: crust
    };
    setPizza(newPizza);
  };

  return (
    <div>
      <h2>Create your own pizza!</h2>

      <div>
        <h2>Crust: {pizza.crust}</h2>
        <input 
          value={pizza.crust}
          onChange={updateCrust}
        />
      </div>

      <div>
        <label>New topping:</label>
        <input 
          value={newTopping}
          onChange={(event) => setNewTopping(event.target.value)}
        />
        <button onClick={addTopping}>Add!</button>
      </div>

      { mappedToppings }
    </div>
  );
};

export default Pizza;
