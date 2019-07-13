import React, { useReducer } from "react";
import menuReducer from "./menuReducer";
import MenuContext from "./menuContext";
import { TOGGLE_MENU } from "../types";

const MenuState = props => {
  const [state, dispatch] = useReducer(menuReducer, false);

  //Toggle Menu
  const toggleMenu = () => dispatch({ type: TOGGLE_MENU });

  const contextPayload = { revealMenu: state, toggleMenu };

  return (
    <MenuContext.Provider value={contextPayload}>
      {props.children}
    </MenuContext.Provider>
  );
};

export default MenuState;
