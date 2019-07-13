import React from "react";
import MenuCategory from "./MenuCategory";
import { menu } from "../../../data/menuData";

const OrderMenu = () => {
  //Extracts menu categories from menu data
  const { entrees, sides, drinks } = menu;

  return (
    <div className="order-menu">
      <h2 className="order-instructions">Select item below to add to cart</h2>
      <MenuCategory categoryName="Entrees" items={entrees} />
      <MenuCategory categoryName="Sides" items={sides} />
      <MenuCategory categoryName="Drinks" items={drinks} />
    </div>
  );
};

export default OrderMenu;
