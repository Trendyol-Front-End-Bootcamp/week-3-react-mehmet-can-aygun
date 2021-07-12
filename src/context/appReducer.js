import {
  GET_CHARACTERS,
  GET_CHARACTER,
  CLEAN_CHARACTER,
  SET_LOADING,
} from "./types";

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_CHARACTERS:
      return {
        ...state,
        characters: payload.results,
        loading: false,
      };
    case GET_CHARACTER:
      return {
        ...state,
        character: payload,
        loading: false,
      };
    case CLEAN_CHARACTER:
      return {
        ...state,
        character: null,
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
