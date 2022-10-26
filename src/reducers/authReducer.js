const INTIAL_STATE = {
  isSignedIn: null,
  userId: null,
};
// eslint-disable-next-line
export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case "SIGN_OUT":
      return { ...state, isSignedIn: false, userId: null };
    case "SIGN_IN":
      return { ...state, isSignedIn: true, userId: action.payload };
    default:
      return state;
  }
};
