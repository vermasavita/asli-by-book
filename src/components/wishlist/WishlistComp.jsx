const WishlistCard = ({wishlistId, wishlistImg, wishlistTitle, wishlistPrice, wishlistRating}) => {
  return (
        <div className="cart" key={wishlistId}>
          <div className="img-container">
            <img
              src={wishlistImg}
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
              <h3>{wishlistTitle}</h3>
            </div>

            <div className="product-price">
              <h2>₹{wishlistPrice}</h2>
              <div className="product-rating">{wishlistRating}
              </div>
            </div>
          </div>

          <div className="add-to-cart">
            <a href="">Move to Cart</a>
          </div>
          
        </div>
  
  );
};

export { WishlistCard };
