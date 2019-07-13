import React from "react";
import PropTypes from "prop-types";

const MenuItem = ({ name, price }) => {
  return <li className="menu-item">{`${name}   $${price}`}</li>;
};

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
};

export default MenuItem;
