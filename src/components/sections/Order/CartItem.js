import React, { useContext } from "react";
import CartContext from "../../../contexts/Cart/cartContext";
import PropTypes from "prop-types";

const CartItem = ({ name, price, index }) => {
  // Contexts
  const cartContext = useContext(CartContext);
  const { removeCartItem } = cartContext;

  return (
    <li onClick={() => removeCartItem(index)} className="cart-item">
      <p className="cart-item__name">{name}</p>
      <p className="cart-item__price">{`$${price}`}</p>
    </li>
  );
};

CartItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
};

export default CartItem;
