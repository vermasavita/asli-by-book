import "./cart-listing.css";
import { Cart } from "../../components/shopingCart/Cart";
import { Navbar } from "../../components/nav/Navbar";
import { CartBill } from "./CartBill";
import { useCart } from '../../hooks/context/cart-context'
const CartListing = () => {

  const {cartState, cartDispatch } = useCart()
  const { cart } = cartState;
  return (
    <div className="container">
      <Navbar />
      <div className="checkout">
        <div className="myCart">
          {cart.map((cartProduct) => {
            return (
              <Cart
                cartId={cartProduct.productId}
                cartImg={cartProduct.productImg}
                cartTitle={cartProduct.productTitle}
                cartPrice={cartProduct.productPrice}
              />
            );
          })}
          <CartBill />
        </div>
      </div>
    </div>
  );
};

export { CartListing };
