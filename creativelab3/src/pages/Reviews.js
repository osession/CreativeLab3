import React from "react";

class Reviews extends React.Component {

  render() {

  return (
    <div>
    <div>
    <h1>Reviews</h1>
    </div>
    <div className="review1">
      <h2 className="sub-header">Melinda</h2>
      <p className="text">"This was the best Tandoori Chicken recipe I've ever made!"</p>
    </div>
        <div className="review2">
      <h2 className="sub-header">Jerald</h2>
      <p className="text">"10/10 reccomend the Spaghetti Bolognese"</p>
    </div>
        <div className="review3">
      <h2 className="sub-header">Luna</h2>
      <p className="text">"That irish stew was nasty. Don't ever use this recipe"</p>
    </div>
        <div className="review4">
      <h2 className="sub-header">Kiley</h2>
      <p className="text">"These recipes are pretty good, but might I comment on how wonderfully functional this website"</p>
    </div>
        <div className="review5">
      <h2 className="sub-header">Denver</h2>
      <p className="text">"That suger pie was delightful"</p>
    </div>
  </div>
  );
  };
};

export default Reviews;

