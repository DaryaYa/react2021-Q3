const defaultState = {
  news: [],
};

const ADD_NEWS = 'ADD_NEWS';

export const newsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_NEWS:
      return { ...state, news: [...state.news, ...action.payload] };
    default:
      return state;
  }
};

export const addNewsAction = (payload) => ({ type: ADD_NEWS, payload });
