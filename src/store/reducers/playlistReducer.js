export const PlaylistReducer = (state = [], action) => {
  if (action.type === "SET_ALL_PLAYLIST") {
    return [...action.payload];
  }
  return state;
};
