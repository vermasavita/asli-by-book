import { useCart } from "../../hooks/context/cart-context";

const ProductCart = ({
  productId,
  productImg,
  productTitle,
  productAuthor,
  productPrice,
  productRating,
}) => {
  const { cartDispatch } = useCart();
  return (
    <div className="cart" key={productId}>
      <div className="img-container">
        <img src={productImg} alt="" />
        <ul className="product-action-icon">
          <li>
            <i className="bx bx-heart" aria-hidden="true" />
          </li>
        </ul>
      </div>
      <div className="product-content">
        <div className="product-name">
          <h3>{productTitle}</h3>
          <p>{productAuthor}</p>
        </div>
        <div className="product-price">
          <h2>₹ {productPrice}</h2>
          <div className="product-rating">
            <p>{productRating}</p>
          </div>
        </div>
      </div>
      <button
        className="add-to-cart"
        onClick={() =>
          cartDispatch({
            type: "ADD_TO_CART",
            payload: {
              productId,
              productImg,
              productTitle,
              productAuthor,
              productPrice,
              productRating,
            },
          })
        }
      >
        Add to Cart
      </button>
    </div>
  );
};

export { ProductCart };
