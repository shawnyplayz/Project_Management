// import { bookmark, unmark } from "./actions";

const initialState = {
  currentUser: null,
  users: [],
  projects: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER":
      (state.users).push(action.value)
      // state[action.key] = (state.users).push(action.value);
      return Object.assign({}, state);
    case "CURRENTUSER":
      debugger;
      state[action.key] = action.value;
      return Object.assign({}, state);
    case "PROJECTS":
      debugger;
      (state.projects).push(action.value)
      return Object.assign({}, state);
    case "TECHNOLOGIES":
      state[action.key] = action.value;
      return Object.assign({}, state);
    default:
      return state;
  }
};
export default reducer;
