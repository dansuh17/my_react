import * as types from '../actions/action-types';

export default (state = [], action) => {
  switch (action.type) {
    case types.ADD_PERSON:
      return [...state, Object.assign({}, action.person)];
    case types.CLEAR_PERSON:
      return [];
    default:
      return state;
  }
};
