import React, { useReducer } from "react";
import AppContext from "./appContext";
import AppReducer from "./appReducer";
import {
  GET_CHARACTERS,
  GET_CHARACTER,
  CLEAN_CHARACTER,
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
  const getCharacters = async (page) => {
    setLoading();

    try {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${page}`
      );

      const data = await res.json();

      if (data.error !== undefined) {
        console.log("There is an error");
      } else {
        dispatch({
          type: GET_CHARACTERS,
          payload: data,
        });
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  // Search Characters
  const searchCharacters = async ({ name, status, gender }) => {
    setLoading();

    try {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${name}&status=${status}&gender=${gender}`
      );

      const data = await res.json();

      if (data.error !== undefined) {
        console.log("There is an error");
      } else {
        dispatch({
          type: GET_CHARACTERS,
          payload: data,
        });
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  // Get Single Character
  const getCharacter = async (id) => {
    setLoading();

    try {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );

      const data = await res.json();

      if (data.error !== undefined) {
        console.log("There is an error");
      } else {
        dispatch({
          type: GET_CHARACTER,
          payload: data,
        });
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  // Clean Character
  const cleanCharacter = () => {
    dispatch({
      type: CLEAN_CHARACTER,
    });
  };

  // Set Loading
  const setLoading = () => {
    dispatch({ SET_LOADING });
  };

  return (
    <AppContext.Provider
      value={{
        characters: state.characters,
        character: state.character,
        currentPage: state.currentPage,
        loading: state.loading,
        getCharacters,
        searchCharacters,
        getCharacter,
        cleanCharacter,
        setLoading,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
