// Selector
const reducer = (state, action) => {
  console.log(action, action.payload);
  switch (action.type) {
    case "SET_QUIZLIST_ARRAY":
      return {
        ...state,
        quizListArray: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
