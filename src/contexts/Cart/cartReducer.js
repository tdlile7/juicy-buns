import { ADD_ITEM, REMOVE_ITEM, CLEAR_ITEMS } from "../types";

const loaderReducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, { ...action.payload }];
    case REMOVE_ITEM:
      const index = action.payload;
      let updatedState = state.filter((item, i) => i !== index);
      return updatedState;
    case CLEAR_ITEMS:
      return [];
    default:
      return;
  }
};

export default loaderReducer;
