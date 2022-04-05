const WishlistCard = () => {
  return (
    <div>
      <h1>MyWishlist</h1>
      <div className="grid-container">
        <div className="cart">
          <div className="img-container">
            <img
              src="https://m.media-amazon.com/images/I/8181LdPn39L._AC_UY218_.jpg"
              alt="boom-image"
            />
            <ul className="product-action-icon">
              <li>
                <i className="bx bx-heart" aria-hidden="true"></i>
              </li>
            </ul>
          </div>

          <div className="product-content">
            <div className="product-name">
              <h3>The Immortals of Meluha</h3>
            </div>

            <div className="product-price">
              <h2>₹400</h2>
              <div className="product-rating">2
              </div>
            </div>
          </div>

          <div className="add-to-cart">
            <a href="">Move to Cart</a>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export { WishlistCard };
