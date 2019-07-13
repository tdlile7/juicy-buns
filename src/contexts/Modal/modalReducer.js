import { SHOW_MODAL, HIDE_MODAL } from "../types";

const modalReducer = (state, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      const { modalClasses, modalContent } = action.payload;
      return {
        modalClasses: `${modalClasses}-modal`,
        modalContent,
        revealModal: true
      };
    case HIDE_MODAL:
      return { modalClasses: "", modalContent: "", revealModal: false };
    default:
      return;
  }
};

export default modalReducer;
