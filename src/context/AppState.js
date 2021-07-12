import React, { useReducer } from "react";
import AppContext from "./appContext";
import AppReducer from "./appReducer";
import {
  GET_CHARACTERS,
  GET_CHARACTER,
  CLEAN_CHARACTER,
  SET_IS_SEARCHING,
  SET_LOADING,
  SET_CURRENT_PAGE,
} from "./types";

const AppState = (props) => {
  const initialState = {
    characters: [],
    character: null,
    loading: false,
    pagination: null,
    currentPage: 1,
    isSearching: false,
    error: null,
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Get Characters
  const getCharacters = async (
    url = "https://rickandmortyapi.com/api/character/?page=1"
  ) => {
    setLoading();

    try {
      const res = await fetch(url);

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

  // Set isSearching
  const setIsSearching = (condition) => {
    dispatch({
      type: SET_IS_SEARCHING,
      payload: condition,
    });
  };

  // Set Current Page
  const setCurrentPage = (page) => {
    dispatch({
      type: SET_CURRENT_PAGE,
      payload: page,
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
        pagination: state.pagination,
        currentPage: state.currentPage,
        isSearching: state.isSearching,
        loading: state.loading,
        getCharacters,
        searchCharacters,
        getCharacter,
        cleanCharacter,
        setIsSearching,
        setCurrentPage,
        setLoading,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
