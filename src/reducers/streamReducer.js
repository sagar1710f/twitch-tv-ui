import _ from "lodash";
// eslint-disable-next-line
export default (state = {}, action) => {
  switch (action.type) {
    case "FETCH_STREAM":
    case "EDIT_STREAM":
    case "CREATE_STREAM":
      return { ...state, [action.payload.id]: action.payload };
    case "DELETE_STREAM":
      return _.omit(state, action.payload);
    case "FETCH_STREAMS":
      return { ...state, ..._.mapKeys(action.payload, "id") };
    default:
      return state;
  }
};
