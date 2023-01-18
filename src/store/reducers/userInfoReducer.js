const userInfo = window.localStorage.getItem("userInfo");
const initialState = userInfo ? JSON.parse(userInfo) : null;


export const userInfoReducer = (state = initialState, action) => {
  if (action.type === "SAVE_USER_INFO") {
    return { ...state, ...action.payload };
  }
  return state;
};
