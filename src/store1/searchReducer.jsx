const defaultState = {
  searchValue: '',
};

const SEARCH = 'SEARCH';

export const searchReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SEARCH:
      return { ...state, searchValue: action.payload };
    default:
      return state;
  }
};

export const searchAction = (payload) => ({ type: SEARCH, payload });
