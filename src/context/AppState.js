import React, { useReducer } from "react";
import AppContext from "./appContext";
import AppReducer from "./appReducer";
import { GET_CHARACTERS, GET_CHARACTER, SET_LOADING } from "./types";

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
    setLoading();

    try {
      const res = await fetch("https://rickandmortyapi.com/api/character");

      const data = await res.json();

      if (data.error !== undefined) {
        console.log("There is an error");
      } else {
        dispatch({
          type: GET_CHARACTERS,
          payload: data.results,
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
          payload: data.results,
        });
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  // Set Character
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

  // Set Loading
  const setLoading = () => {
    dispatch({ SET_LOADING });
  };

  return (
    <AppContext.Provider
      value={{
        characters: state.characters,
        character: state.character,
        loading: state.loading,
        getCharacters,
        searchCharacters,
        getCharacter,
        setLoading,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
