const auth = window.localStorage.getItem("auth");
const initialState = auth ? JSON.parse(auth) : null;

export const authReducer = (state = initialState, action) => {
  if (action.type === "LOGGED_IN") {
    return { ...state, ...action.payload };
  }
  if (action.type === "LOG_OUT") {
    return action.payload;
  }
  if (action.type === "SIGN_OUT") {
    return action.payload;
  }
  if (action.type === "RESET_PASS") {
    return action.payload;
  }

  return state;
};
