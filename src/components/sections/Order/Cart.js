import React, { useContext } from "react";
import CartItem from "./CartItem";
import CartContext from "../../../contexts/Cart/cartContext";
import ModalContext from "../../../contexts/Modal/modalContext";

const Cart = () => {
  // Contexts
  const cartContext = useContext(CartContext);
  const { cartItems, clearCartItems } = cartContext;

  const modalContext = useContext(ModalContext);
  const { showModal } = modalContext;

  //Corresponding modal data that will produce modal message once an order has been submitted
  const orderModal = {
    modalClasses: "order",
    modalContent:
      "Sorry for the disappointing reality sinking in right now that your food will never arrive, but remember Chick-fil-A still exists. Live, Love and Eat On!"
  };

  //Clears order and reveals order modal message to user
  const onOrderSubmit = () => {
    clearCartItems();
    showModal({ ...orderModal });
  };

  //Generates the cart total prior to applying tax
  let cartTotal = 0;
  cartItems.forEach(item => {
    const itemPrice = parseFloat(item.price);
    cartTotal += itemPrice;
  });

  //Generates the 9.8% tax amount from the current cart total
  let tax = cartTotal * 0.098;

  //Generates total price that would theoretically be charged to the customer by combining cart total with corresponding tax amounts
  let totalPrice = cartTotal + tax;

  return (
    <div className="cart">
      <h2 className="cart__title">Cart</h2>
      {cartItems.length > 0 && (
        <h2 className="cart__instructions">
          Select item below to remove from cart
        </h2>
      )}
      <ul className="cart__items">
        {cartItems.map((item, index) => {
          return <CartItem name={item.name} price={item.price} index={index} />;
        })}
      </ul>

      <div className="cart__price">
        <p className="price-display">
          <p className="taxes">Tax (9.8%): {`$${tax.toFixed(2)}`}</p>
          <p className="total-price">
            <strong>Total:{`$${totalPrice.toFixed(2)}`}</strong>
          </p>
        </p>
        {cartItems.length > 0 ? (
          <button
            onClick={() => onOrderSubmit()}
            className="place-order-button active"
          >
            Place Order
          </button>
        ) : (
          <button className="place-order-button disabled">Place Order</button>
        )}
      </div>
    </div>
  );
};

export default Cart;
