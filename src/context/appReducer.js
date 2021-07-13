import {
  GET_CHARACTERS,
  GET_CHARACTER,
  GET_CHARACTER_EPISODES,
  CLEAN_CHARACTER,
  SET_IS_SEARCHING,
  SET_CURRENT_PAGE,
  SET_ERROR,
  SET_LOADING,
} from "./types";

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_CHARACTERS:
      return {
        ...state,
        characters: payload.results,
        pagination: payload.info,
        loading: false,
      };
    case GET_CHARACTER:
      return {
        ...state,
        character: payload,
        loading: false,
      };
    case GET_CHARACTER_EPISODES:
      return {
        ...state,
        character: { ...state.character, characterEpisodes: payload },
      };
    case CLEAN_CHARACTER:
      return {
        ...state,
        character: null,
      };
    case SET_IS_SEARCHING:
      return {
        ...state,
        isSearching: payload,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};

export default reducer;
