// import { bookmark, unmark } from "./actions";

const initialState = {
  user: null,
  bookMarkArr: [],
};

const reducer = (state = initialState, action) => {
  debugger;
  switch (action.type) {
    case "USER":
      state[action.key] = action.value;
      return Object.assign({}, state);
    case "TECHNOLOGIES":
      state[action.key] = action.value;
      return Object.assign({}, state);
    default:
      return state;
  }
};
export default reducer;
