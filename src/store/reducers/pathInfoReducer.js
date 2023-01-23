export const pathInfoReducer = (state = {}, action) => {
  if (action.type === "SET_PATH") {
    return {...action.payload};
  }
  return state;
};
