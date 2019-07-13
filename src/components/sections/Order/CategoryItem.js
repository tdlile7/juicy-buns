import React, { useContext } from "react";
import PropTypes from "prop-types";
import CartContext from "../../../contexts/Cart/cartContext";

const CategoryItem = props => {
  //Extracts menu item from corresponding menu category
  const { item } = props;

  // Contexts
  const cartContext = useContext(CartContext);
  const { addCartItem } = cartContext;

  return (
    <li onClick={() => addCartItem(item)} className="category-item">
      {`${item.name}     $${item.price}  `}
    </li>
  );
};

CategoryItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default CategoryItem;
