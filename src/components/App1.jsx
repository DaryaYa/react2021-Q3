import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const [sum, setSum] = useState(0);
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customer = useSelector((state) => state.customer.customer);

  const handleChange = (e) => {
    setSum(Number(e.target.value));
  };

  const addSum = (val) => {
    dispatch({ type: 'ADD', payload: val });
  };

  const removeSum = (val) => {
    dispatch({ type: 'REMOVE', payload: val });
  };

  return (
    <div>
      <input type='text' onChange={handleChange} />
      <button type='button' onClick={() => addSum(sum)}>
        Add number +{' '}
      </button>
      <button type='button' onClick={() => removeSum(sum)}>
        Subtract number -{' '}
      </button>
      <div>{cash}</div>
    </div>
  );
};

export default App;
