import { SET_ORGANIZATIONS } from './actions';

export const reducer = (state = [], action) => {
  let newState;
  switch (action.type) {
    case SET_ORGANIZATIONS:
      newState = [...state];
      newState.push(...action.payload);
      return newState;
    default:
      return state;
  }
}