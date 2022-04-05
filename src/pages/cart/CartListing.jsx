import './cart-listing.css'
import { Cart } from "../../components/shopingCart/cart";
import { Navbar } from "../../components/nav/Navbar";
import { CartBill } from './CartBill';
const CartListing = () => {
    return (
      <div className="container">
        <Navbar />
        <div className="checkout">
          <div className="myCart">
            <Cart/>
            <CartBill/>
          </div>
        </div>
      </div>
    );
  };
  

  export { CartListing }
