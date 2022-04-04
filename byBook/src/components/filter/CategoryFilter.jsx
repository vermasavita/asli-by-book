const CategoryFilter = () => {
  return (
    <div className="product-category">
      Category
      <div className="preference">
        <input className="category-checkbox" id="kindle" type="checkbox" />
        <label htmlFor="kindle">Kindle Store</label>
      </div>
      <div className="preference">
        <input className="category-checkbox" id="Literature" type="checkbox" />
        <label htmlFor="Literature">Literature & Fiction</label>
      </div>
      <div className="preference">
        <input className="category-checkbox" id="Business" type="checkbox" />
        <label htmlFor="Business">Business & Economics</label>
      </div>
      <div className="preference">
        <input
          className="category-checkbox"
          id="Spirituality"
          type="checkbox"
        />
        <label htmlFor="Spirituality">New Age & Spirituality</label>
      </div>
      <div className="preference">
        <input className="category-checkbox" id="Society" type="checkbox" />
        <label htmlFor="Society">Society & Culture</label>
      </div>
    </div>
  );
};

export { CategoryFilter };
