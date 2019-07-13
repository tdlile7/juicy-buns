import React, { useContext, useEffect, useRef } from "react";
import MenuContext from "../../../contexts/Menu/menuContext";
import MenuSection from "./MenuSection";
import { TimelineMax } from "gsap/all";
import { menu } from "../../../data/menuData";

const Menu = () => {
  // Contexts
  const menuContext = useContext(MenuContext);
  const { toggleMenu } = menuContext;

  // References
  const menuRef = useRef();

  //Extracted food categories from the imported menu data
  const { entrees, sides, drinks } = menu;

  //Menu fade animation
  useEffect(() => {
    const tl = new TimelineMax();

    tl.to(menuRef.current, 0.35, { opacity: 1, scale: 1, top: 0 });
  }, []);

  return (
    <div className="menu">
      <div className="menu__content" ref={menuRef}>
        <MenuSection name="Entrees" items={entrees} />
        <MenuSection name="Sides" items={sides} />
        <MenuSection name="Drinks" items={drinks} />
        <button className="menu-closing-button" onClick={() => toggleMenu()}>
          X
        </button>
      </div>
    </div>
  );
};

export default Menu;
