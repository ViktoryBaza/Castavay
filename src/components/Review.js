import React from "react";
import "../styles/Review.css";
import star1 from "../imag/star1.png";

const Review = ({text, users}) => {
    return(
  <div className="review">
    <div className="review_content">
    <div className="stars">
      <img src={star1} />
      <img src={star1} />
      <img src={star1} />
      <img src={star1} />
      <img src={star1} />
    </div>
    <div className="review_text">{text}</div>
    <div className="name_users">{users}</div>
  </div>
  </div>
  );
};

export default Review;
