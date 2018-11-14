import React from "react";

const Review = ({ headline, link }) => {
  return(
    <div className="review">
      <h3>{ title }</h3>
      <a src={ link } />
    </div>
  )
}


const BookList = ({ books }) => (
  <div className="review-list">
    { reviews.map(review => <Review title={review.headline} link = {review.link} />) }
  </div>
)
export default MovieReviews;
