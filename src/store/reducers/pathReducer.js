export const pathReducer = (state = [], action) => {
  if (action.type === "SET_ALL_PATH") {
    return [...action.payload];
  }
  return state;
};
