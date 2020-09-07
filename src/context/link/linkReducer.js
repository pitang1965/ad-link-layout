import { ADD_LINK, CLEAR_LINKS, SET_CODE } from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_LINK:
      return {
        ...state,
        links: [...state.links, action.payload],
      };
    case CLEAR_LINKS:
      return {
        ...state,
        links: [],
        code: null,
      };
    case SET_CODE:
      return {
        ...state,
        code: action.payload,
      };
    default:
      return state;
  }
};
