export const VideoReducer = (state = [], action) => {
  if (action.type === "SET_ALL_VIDEOS") {
    return [...action.payload];
  }
  return state;
};
