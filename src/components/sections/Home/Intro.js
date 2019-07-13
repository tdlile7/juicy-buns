import React from "react";
import Special from "./Special";
import hamburgerDisplay from "../../../assets/images/hamburgerDisplay.jpg";
import { menu } from "../../../data/menuData";

const Intro = () => {
  const { entrees } = menu;

  //Extracted featured items from the entree data
  const featuredItems = entrees.filter(entree => {
    return entree.isFeatured;
  });

  return (
    <div className="home__intro">
      <div className="display">
        <img
          className="display__image"
          src={hamburgerDisplay}
          alt="hamburger"
        />
      </div>
      <div className="specials">
        {featuredItems.map(({ name, deal }) => {
          return <Special name={name} deal={deal} />;
        })}
      </div>
    </div>
  );
};

export default Intro;
