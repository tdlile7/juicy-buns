import React, { useContext, useEffect } from "react";
import LoaderContext from "../../contexts/Loader/loaderContext";
import OrderMenu from "../sections/Order/OrderMenu";
import Cart from "../sections/Order/Cart";

const Order = () => {
  // Contexts
  const loaderContext = useContext(LoaderContext);
  const { hideLoader } = loaderContext;

  //Hide loader after page has mounted
  useEffect(() => {
    let id = setTimeout(hideLoader, 2000);

    return () => clearTimeout(id);
  }, [hideLoader]);

  return (
    <div className="order">
      <div className="order__section">
        <OrderMenu />
      </div>
      <div className="order__section">
        <Cart />
      </div>
    </div>
  );
};

export default Order;
