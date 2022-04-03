const WishlistCard = () => {
  return (
    <div>
      <h1>MyWishlist</h1>
      <div class="grid-container">
        <div class="cart">
          <div class="img-container">
            <img
              src="https://m.media-amazon.com/images/I/8181LdPn39L._AC_UY218_.jpg"
              alt="boom-image"
            />
            <ul class="product-action-icon">
              <li>
                <i class="bx bx-heart" aria-hidden="true"></i>
              </li>
            </ul>
          </div>

          <div class="product-content">
            <div class="product-name">
              <h3>The Immortals of Meluha</h3>
            </div>

            <div class="product-price">
              <h2>₹400</h2>
              <div class="product-rating">2
              </div>
            </div>
          </div>

          <div class="add-to-cart">
            <a href="">Move to Cart</a>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export { WishlistCard };
