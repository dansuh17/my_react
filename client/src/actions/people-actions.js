import * as types from './action-types';

// a function that returns an action given the input
export const addPerson = (person) => {
  return {
    type: types.ADD_PERSON,
    person,
  }
};

export const clearPerson = () => {
  return {
    type: types.CLEAR_PERSON,
  }
};
