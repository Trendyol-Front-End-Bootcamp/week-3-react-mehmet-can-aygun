import {
  GET_CHARACTERS,
  SEARCH_CHARACTERS,
  GET_CHARACTER,
  SET_LOADING,
} from "./types";

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_CHARACTERS:
    case SEARCH_CHARACTERS:
      return {
        ...state,
        characters: payload,
        loading: false,
      };
    case GET_CHARACTER:
      return {
        ...state,
        character: payload,
        loading: false,
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

export default reducer;
