const Cart = () => {
  return (
    <div className = "shopping-cart">
      <div className = "image">
        <img
          src="https://m.media-amazon.com/images/I/8181LdPn39L._AC_UY218_.jpg"
          alt="book-image"
        />
      </div>

      <div className = "content">
        <h2>The Immortals of Meluha</h2>
        <h4>
          ₹400 <strike>₹800</strike>
        </h4>
        <h6>50% off</h6>

        <p className = "qty">
          Quantity:
          <input type ="number" value="2" />
        </p>

        <p className = "cart-btn">
          <span>Remove</span>
        </p>

        <p className = "cart-btn">
          <span>Add to Wishlist</span>
        </p>
        
      </div>
    </div>
  );
};

export { Cart };
