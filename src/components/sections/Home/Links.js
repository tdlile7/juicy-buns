import React, { useContext } from "react";
import ModalContext from "../../../contexts/Modal/modalContext";
import MenuContext from "../../../contexts/Menu/menuContext";

const Links = () => {
  // Contexts
  const modalContext = useContext(ModalContext);
  const { showModal } = modalContext;

  const menuContext = useContext(MenuContext);
  const { toggleMenu } = menuContext;

  //Associated data that will appear in modal pop up when corresponding link on home page is selected
  const locationModal = {
    modalClasses: "location",
    modalContent:
      "Unfortunately, Juicy Burgers doesn't actually exist at this time, therefore we are unable to serve any customers now or in the near future."
  };

  const careerModal = {
    modalClasses: "career",
    modalContent:
      "Our imaginary Juicy employees are dripping with potential. If you would like to join our squad, all you need to do is believe and you can already consider yourself part of the JB team!"
  };

  const historyModal = {
    modalClasses: "history",
    modalContent:
      "The Juicy Burger restaurant was originally made up on Monday, July 8th, 2019."
  };

  return (
    <ul className="home__links">
      <li
        onClick={() => {
          showModal({ ...locationModal });
        }}
      >
        Locations
      </li>
      <li
        onClick={() => {
          showModal({ ...careerModal });
        }}
      >
        Careers
      </li>
      <li onClick={() => toggleMenu()}>Menu</li>
      <li
        onClick={() => {
          showModal({ ...historyModal });
        }}
      >
        History
      </li>
    </ul>
  );
};

export default Links;
