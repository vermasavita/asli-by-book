import { useCart } from "../../hooks/context/cart-context";
import { useWishlist } from "../../hooks/context/wishlist-context";
import { Link } from "react-router-dom";

const ProductCart = ({
  productId,
  productImg,
  productTitle,
  productAuthor,
  productPrice,
  productRating,
}) => {
  const { cartState, cartDispatch } = useCart();
  const { wishlistState} = useWishlist();
  console.log(wishlistState)

  const removeFromWishlistCart = wishlistState.wishlist.some(item => {
    return item.productId === productId;
  })

  const hasItemInCart = cartState.cart.some((item) => {
    return item.productId === productId;
  });

  const { wishlistDispatch } = useWishlist();
  return (
    <div className="cart" key={productId}>
      <div className="img-container">
        <img src={productImg} alt="" />
        <ul className="product-action-icon">
          <li
            onClick={() =>
              wishlistDispatch({
                type: "Add_TO_WISHLIST",
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
      {hasItemInCart ?
        <Link to="/cart">
          <button className="add-to-cart">Go to Cart</button>
        </Link>
      :
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
      }
    </div>
  );
};

export { ProductCart };
