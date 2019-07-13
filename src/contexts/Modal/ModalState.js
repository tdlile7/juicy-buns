import React, { useReducer } from "react";
import modalReducer from "./modalReducer";
import ModalContext from "./modalContext";
import { SHOW_MODAL, HIDE_MODAL } from "../types";

const MenuState = props => {
  const initialState = {
    modalClasses: "",
    modalContent: "",
    revealModal: false
  };

  const [state, dispatch] = useReducer(modalReducer, initialState);

  //Show Modal
  const showModal = ({ modalClasses, modalContent }) =>
    dispatch({ type: SHOW_MODAL, payload: { modalClasses, modalContent } });

  //Hide Modal
  const hideModal = () => dispatch({ type: HIDE_MODAL });

  const contextPayload = {
    modalClasses: state.modalClasses,
    modalContent: state.modalContent,
    revealModal: state.revealModal,
    showModal,
    hideModal
  };

  return (
    <ModalContext.Provider value={contextPayload}>
      {props.children}
    </ModalContext.Provider>
  );
};

export default MenuState;
