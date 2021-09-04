import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCustomerAction, removeCustomerAction } from '../store/customerReducer';
import { addCashAction, removeCashAction } from '../store/cashReducer';
import fetchCustomers from '../store/asyncAction';

const App = () => {
  const [sum, setSum] = useState(0);
  const [curCustomer, setCurCustomer] = useState({});
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customer = useSelector((state) => state.customer.customer);

  const handleChange = (e) => {
    setSum(Number(e.target.value));
  };

  const handleCustomer = (e) => setCurCustomer(e.target.value);

  const addSum = (val) => {
    dispatch(addCashAction(val));
  };

  const removeSum = (val) => {
    dispatch(removeCashAction(val));
  };

  const addCustomer = (string) => {
    const user = {
      username: string,
      id: Date.now(),
    };

    dispatch(addCustomerAction(user));
  };
  const removeCustomer = (element) => {
    dispatch(removeCustomerAction(element.id));
  };

  return (
    <div>
      <div style={{ fontSize: '3em', color: 'red' }}>{cash}</div>
      <input type='text' onChange={handleChange} />
      <button type='button' onClick={() => addSum(sum)}>
        Add number +{' '}
      </button>
      <button type='button' onClick={() => removeSum(sum)}>
        Subtract number -{' '}
      </button>
      <input type='text' onChange={handleCustomer} />
      <button type='button' onClick={() => addCustomer(curCustomer)}>
        Add customer
      </button>
      <button
        type='button'
        onClick={() => {
          dispatch(fetchCustomers());
        }}
      >
        GET USERS
      </button>
      {customer.length > 0 ? (
        <div>
          {customer.map((elem, ind) => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events
            <div key={ind} role='button' tabIndex={0} onClick={() => removeCustomer(elem)}>
              {elem.username}
            </div>
          ))}
        </div>
      ) : (
        <div>no customers yet</div>
      )}
    </div>
  );
};

export default App;
