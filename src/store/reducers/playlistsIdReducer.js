export const PlaylistsIdReducer = (state = [], action) => {
  if (action.type === "SET_PLAYLIST_ID") {
    return [...state, action.payload];
  }
  if (action.type === "DELETE_PLAYLIST_ID") {
    const playlistid = state.filter((item) => item !== action.payload);
    return [...playlistid];
  }
  return state;
};
