import React from "react";
import StarRatingComponent from "react-star-rating-component";

function Ratings(props) {
  return (
    <div>
      <StarRatingComponent name="rate1" starCount={5} value={props.rating} />
    </div>
  );
}
export default Ratings
