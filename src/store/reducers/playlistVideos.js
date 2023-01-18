export const playlistVideos = (state = [], action) => {
  if (action.type === "SET_ALL_PLAYLIST_VIDEOS") {
    return [...action.payload];
  }
  return state;
};
