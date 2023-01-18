export const hashReducer = (state = "", action) => {
  if (action.type === "SET_HASH") {
    return action.payload;
  }
  return state;
};
