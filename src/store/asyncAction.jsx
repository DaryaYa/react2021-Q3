import { addManyAction } from './customerReducer';

const fetchCustomers = () => (dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((json) => dispatch(addManyAction(json)));
};

export default fetchCustomers;
