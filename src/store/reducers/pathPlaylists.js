export const pathPlaylists = (state = [], action) => {
  if (action.type === "SET_ALL_PATH_PLAYLISTS") {
    return [...action.payload];
  }
  return state;
};
