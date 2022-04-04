import "./App.css";
import { Login } from "./pages/Authentication/login/Login";
import { Signup } from "./pages/Authentication/signup/SignUp";
import { CartListing } from "./pages/cart/CartListing";
import { ProductListing } from './pages/product/productListing/productListing'
import { Wishlist } from "./pages/wishlist/wishlist";

function App() {
  return (
    <div className="App">

      <ProductListing/>
      <CartListing/>
      <Wishlist/>
      <Login/>
      <Signup/>
    </div>
  );
}

export default App;
