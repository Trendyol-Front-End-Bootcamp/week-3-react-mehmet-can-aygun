import {
  GET_CHARACTERS,
  SEARCH_CHARACTERS,
  SET_CHARACTER,
  SET_LOADING,
} from "./types";

const appReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_CHARACTERS:
    case SEARCH_CHARACTERS:
      return {
        ...state,
        characters: payload,
      };
    case SET_CHARACTER:
      return {
        ...state,
        character: payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default appReducer;
