import { SHOW_LOADER, HIDE_LOADER } from "../types";

const loaderReducer = (state, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return true;
    case HIDE_LOADER:
      return false;
    default:
      return;
  }
};

export default loaderReducer;
