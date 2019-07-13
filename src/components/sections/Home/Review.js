import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Review = ({ name, rating }) => {
  //Classes from Font Awesome to generate corresponding images (i.e. full stars, half-stars, empty-stars)
  const emptyStar = "far fa-star";
  const fullStar = "fas fa-star";
  const halfStar = "fas fa-star-half-alt";

  //Generates star rating array that will be parsed to generate review star images that will go with their corresponding review
  const generateStars = rating => {
    const isInteger = Number.isInteger(rating);
    let stars = [];

    if (rating === 5) {
      stars = ["*", "*", "*", "*", "*"];
    } else if (rating === 0) {
      stars = ["", "", "", "", ""];
    } else if (isInteger) {
      for (let i = 0; i < 5; i++) {
        if (i < rating) {
          stars.push("*");
        } else {
          stars.push("");
        }
      }
    } else {
      let fullStars = Math.floor(rating);

      for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
          stars.push("*");
        } else if (i === fullStars) {
          stars.push("/*");
        } else {
          stars.push("");
        }
      }
    }

    return stars;
  };

  const reviewStars = generateStars(rating);

  return (
    <Fragment>
      <h2 className="name">{name}</h2>
      <div className="stars">
        {reviewStars.map((star, index) => {
          if (star === "*") {
            return <i key={index} className={fullStar} />;
          } else if (star === "/*") {
            return <i key={index} className={halfStar} />;
          } else {
            return <i key={index} className={emptyStar} />;
          }
        })}
      </div>
    </Fragment>
  );
};

Review.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

export default Review;
