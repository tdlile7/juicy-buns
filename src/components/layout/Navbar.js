import React, { useContext } from "react";
import { Link } from "react-router-dom";
import DropDownMenu from "./DropDownMenu";
import LoaderContext from "../../contexts/Loader/loaderContext";
import MenuContext from "../../contexts/Menu/menuContext";
import CartContext from "../../contexts/Cart/cartContext";
import PropTypes from "prop-types";

const Navbar = ({ title, icon }) => {
  // Contexts
  const loaderContext = useContext(LoaderContext);
  const { showLoader } = loaderContext;

  const menuContext = useContext(MenuContext);
  const { toggleMenu } = menuContext;

  const cartContext = useContext(CartContext);
  const { cartItems } = cartContext;

  return (
    <nav className="navbar">
      <Link to="/" onClick={showLoader} className="navbar__icon">
        <i className={icon} />
        <h1>{title}</h1>
      </Link>
      <DropDownMenu />
      <button className="navbar__menu" onClick={() => toggleMenu()}>
        Menu <i class="fas fa-caret-square-down" />
      </button>
      <div className="navbar__links">
        <ul>
          <li>
            <Link to="/" onClick={showLoader}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/order" onClick={showLoader}>
              Order
            </Link>
          </li>
          <li>
            <Link to="/order" onClick={showLoader}>
              <i className="fas fa-shopping-cart" />
              <h4 className="cart-number">
                <strong>{cartItems.length}</strong>
              </h4>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

Navbar.defaultProps = {
  title: "Juicy Buns",
  icon: "fas fa-hamburger"
};

export default Navbar;
