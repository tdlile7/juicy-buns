import React from "react";
import ReactDOM from "react-dom";
import LoaderState from "./contexts/Loader/LoaderState";
import MenuState from "./contexts/Menu/MenuState";
import CartState from "./contexts/Cart/CartState";
import ModalState from "./contexts/Modal/ModalState";
import App from "./App";

ReactDOM.render(
  <LoaderState>
    <MenuState>
      <CartState>
        <ModalState>
          <App />
        </ModalState>
      </CartState>
    </MenuState>
  </LoaderState>,
  document.getElementById("root")
);
