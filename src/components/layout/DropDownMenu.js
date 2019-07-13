import React, { useState, useEffect, useRef, useContext } from "react";
import LoaderContext from "../../contexts/Loader/loaderContext";
import MenuContext from "../../contexts/Menu/menuContext";
import { Link } from "react-router-dom";
import { TimelineMax } from "gsap/TweenMax";

const DropDownMenu = () => {
  //Contexts
  const loaderContext = useContext(LoaderContext);
  const { showLoader } = loaderContext;

  const menuContext = useContext(MenuContext);
  const { toggleMenu } = menuContext;

  //State Variables
  const [openDropDown, setOpenDropDown] = useState(false);

  //References
  const dropDownOverlayRef = useRef();
  const dropDownCloseBtnRef = useRef();
  const dropDownMenuRef = useRef();

  //Toggles whether the dropdown menu will be revealed
  const toggleDropDown = () => {
    setOpenDropDown(!openDropDown);
  };

  //Hides dropdown menu when a link has been selected from the menu
  const onLinkClick = () => {
    setOpenDropDown(false);
    showLoader();
  };

  //Appearing effect of the dropdown menu when the hamburger icon is clicked
  useEffect(() => {
    if (openDropDown) {
      const tl = new TimelineMax();

      tl.to(dropDownOverlayRef.current, 0.5, {
        opacity: 1,
        scaleX: 1
      })
        .to(dropDownCloseBtnRef.current, 0.5, { opacity: 1 })
        .to(dropDownMenuRef.current, 0.75, { opacity: 1 });
    }
  }, [openDropDown]);

  return (
    <div className="navbar__drop-down-menu">
      <i
        onClick={() => toggleDropDown()}
        className="drop-down-menu-icon fas fa-bars"
      />
      {openDropDown && (
        <div ref={dropDownOverlayRef} className="drop-down-menu-overlay">
          <button
            ref={dropDownCloseBtnRef}
            onClick={toggleDropDown}
            className="close-drop-down-button"
          >
            X
          </button>
          <ul ref={dropDownMenuRef} className="drop-down-menu">
            <li onClick={() => toggleMenu()} className="drop-down-item">
              Menu
            </li>
            <li className="drop-down-item">
              <Link to="/" onClick={onLinkClick}>
                Home
              </Link>
            </li>
            <li className="drop-down-item">
              <Link to="/order" onClick={onLinkClick}>
                Order
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDownMenu;
