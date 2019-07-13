import React, { useState, useEffect } from "react";
import Review from "./Review";
import { reviews as reviewData } from "../../../data/reviews.Data";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Reviews = () => {
  // State Variables
  const [currentReview, setCurrentReview] = useState(0);
  const [reviews, setReviews] = useState(reviewData);

  const handleSelectReview = index => {
    const updatedReviews = [...reviews];

    // Unselect previous review
    updatedReviews.map(review => (review.isSelected = false));

    // Select new chosen review to display
    if (index === -1) {
      let nextReview =
        currentReview === reviews.length - 1 ? 0 : currentReview + 1;
      updatedReviews[nextReview].isSelected = true;
      setCurrentReview(nextReview);
    } else {
      updatedReviews[index].isSelected = true;
      setCurrentReview(index);
    }

    setReviews(updatedReviews);
  };

  useEffect(() => {
    //Automatically changes the review that is on display every 7.5 seconds
    let id = setTimeout(() => handleSelectReview(-1), 7500);

    return () => clearTimeout(id);
    // eslint-disable-next-line
  }, [currentReview]);

  const review = reviews[currentReview];
  const { name, rating, content, id } = review;

  return (
    <div className="home__reviews">
      <TransitionGroup component={null}>
        <CSSTransition key={id} timeout={1000} classNames="review-fade">
          <div className="review">
            <div className="review__title">
              <Review key={id} name={name} rating={rating} />
            </div>
            <p className="review__content">
              <em>{content}</em>
            </p>
            <div className="review__selector">
              {reviews.map(({ isSelected, id }, index) => {
                return (
                  <button key={id} onClick={() => handleSelectReview(index)}>
                    <i
                      className={isSelected ? "fas fa-circle" : "far fa-circle"}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default Reviews;
