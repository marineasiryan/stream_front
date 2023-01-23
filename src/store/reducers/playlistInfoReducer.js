export const PlaylistInfoReducer = (state = {}, action) => {
  if (action.type === "SET_PLAYLIST") {
    return {...action.payload};
  }
  return state;
};
