import React from "react";
import CategoryItem from "./CategoryItem";
import PropTypes from "prop-types";

const MenuCategory = ({ categoryName, items }) => {
  return (
    <div className="menu-category">
      <h3 className="category-title">{categoryName}</h3>
      <ul className="category-items">
        {items.map(item => {
          return <CategoryItem item={item} key={item.id} />;
        })}
      </ul>
    </div>
  );
};

MenuCategory.propTypes = {
  categoryName: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired
};

export default MenuCategory;
