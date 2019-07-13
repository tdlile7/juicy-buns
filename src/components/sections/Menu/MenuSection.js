import React from "react";
import MenuItem from "./MenuItem";
import PropTypes from "prop-types";

const MenuSection = ({ name, items }) => {
  return (
    <div className="menu-section">
      <h2 className="menu-section__title">{name}</h2>
      <ul className="menu-items">
        {items.map(({ name, price, id }) => {
          return <MenuItem name={name} price={price} key={id} />;
        })}
      </ul>
    </div>
  );
};

MenuSection.propTypes = {
  name: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired
};

export default MenuSection;
