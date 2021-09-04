const defaultState = {
  customer: [],
};

const ADD_CUSTOMER = 'ADD_CUSTOMER';
const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER';
const ADD_MANY = 'ADD_MANY';

export const customerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_MANY:
      return { ...state, customer: [...state.customer, ...action.payload] };
    case ADD_CUSTOMER:
      return { ...state, customer: [...state.customer, action.payload] };
    case REMOVE_CUSTOMER:
      return { ...state, customer: state.customer.filter((el) => el.id !== action.payload) };
    default:
      return state;
  }
};

export const addManyAction = (payload) => ({ type: ADD_MANY, payload });
export const addCustomerAction = (payload) => ({ type: ADD_CUSTOMER, payload });
export const removeCustomerAction = (payload) => ({ type: REMOVE_CUSTOMER, payload });

// export default { customerReducer, addCustomerAction, removeCustomerAction };
