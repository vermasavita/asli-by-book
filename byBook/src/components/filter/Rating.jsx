const RatingFilter = () => {
  return (
    <div className="rating">
      Rating
      <div className="preference">
        <input className="rating-radio" type="radio" value={4} />
        <label htmlFor="four-star">4 stars & above</label>
      </div>
      <div className="preference">
        <input className="rating-radio" type="radio" value={3} />
        <label htmlFor="three-star">3 stars & above</label>
      </div>
      <div className="preference">
        <input className="rating-radio" type="radio" value={2} />
        <label htmlFor="two-star">2 stars & above</label>
      </div>
      <div className="preference">
        <input className="rating-radio" type="radio" value={1} />
        <label htmlFor="one-star">1 stars & above</label>
      </div>
    </div>
  );
};

export { RatingFilter };
