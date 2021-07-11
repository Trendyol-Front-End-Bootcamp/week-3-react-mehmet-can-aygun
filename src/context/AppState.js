import React, { useReducer } from "react";
import AppContext from "./appContext";
import AppReducer from "./appReducer";
import {
  GET_CHARACTERS,
  SEARCH_CHARACTERS,
  SET_CHARACTER,
  SET_LOADING,
} from "./types";

const AppState = (props) => {
  const initialState = {
    characters: [],
    character: null,
    loading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Get Characters
  const getCharacters = async () => {
    console.log("get characters");
  };

  // Search Characters
  const searchCharacters = async () => {
    console.log("search characters");
  };

  // Set Character
  const setCharacter = () => {
    console.log("set characters");
  };

  // Set Loading
  const setLoading = () => {
    dispatch({ SET_LOADING });
  };

  return (
    <AppContext.Provider
      value={{
        characters: state.character,
        character: state.character,
        loading: state.loading,
        getCharacters,
        searchCharacters,
        setCharacter,
        setLoading,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
