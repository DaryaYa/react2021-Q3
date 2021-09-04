const defaultState = {
  cash: 0,
};

const ADD = 'ADD';
const REMOVE = 'REMOVE';

export const cashReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD:
      return { ...state, cash: state.cash + action.payload };
    case REMOVE:
      return { ...state, cash: state.cash - action.payload };
    default:
      return state;
  }
};

export const addCashAction = (payload) => ({ type: ADD, payload });
export const removeCashAction = (payload) => ({ type: REMOVE, payload });

// export export default { cashReducer, addCashAction, removeCashAction };
