export const VideoInfoReducer = (state = [], action) => {
  if (action.type === "SET_VIDEO") {
    return [...action.payload];
  }
  return state;
};
