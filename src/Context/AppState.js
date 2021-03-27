import React, { useReducer } from "react";
import AppContext from "./app-context";
import reducer from "./reducer";

const AppState = (props) => {
  const initialState = {
    quizListArray: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  //Method to set the search object
  const SET_QUIZLIST_ARRAY = (quizListArray) => {
    dispatch({
      type: "SET_QUIZLIST_ARRAY",
      payload: quizListArray,
    });
  };

  return (
    <AppContext.Provider
      value={{
        quizListArray: state.quizListArray,

        SET_QUIZLIST_ARRAY,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
