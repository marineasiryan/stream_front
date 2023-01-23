export const VideosIdReducer = (state = [], action) => {
  if (action.type === "SET_VIDEO_ID") {
    return [...state, action.payload];
  }
  if(action.type === "RESET_VIDEO_ID"){
    return [];
  }
  if (action.type === "DELETE_VIDEO_ID") {
    const videoid = state.filter((item) => item !== action.payload);
    return [...videoid];
  }
  return state;
};
