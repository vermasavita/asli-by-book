const Cart = ({cartId, cartImg, cartTitle, cartPrice}) => {
  return (
    <div className = "shopping-cart">
      <div className = "image" key={cartId}>
        <img
          src={cartImg}
          alt="book-image"
        />
      </div>

      <div className = "content">
        <h2>{cartTitle}</h2>
        <h4>
          ₹{cartPrice}<strike>₹{cartPrice * 2}</strike>
        </h4>
        <h6>50% off</h6>

        <p className = "qty">
          Quantity:
          <input type ="number" value="1" />
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
