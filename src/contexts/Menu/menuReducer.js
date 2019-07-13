import { TOGGLE_MENU } from "../types";

const menuReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return !state;
    default:
      return;
  }
};

export default menuReducer;
