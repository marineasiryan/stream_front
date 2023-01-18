export const videoLinkReducer = (state = {}, action) => {
  if (action.type === "SET_VIDEO_LINK") {
    return { ...action.payload };
  }
  return state;
};
