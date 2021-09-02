const defaultState = {
  customer: [],
};

const customerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_CUSTOMER':
      return { ...state, customer: state.customer + action.payload };
    case 'ALL_CUSTOMERS':
      return { ...state, customer: state.customer - action.payload };
    default:
      return state;
  }
};

export default customerReducer;
