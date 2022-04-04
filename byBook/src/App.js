import "./App.css";
import { Login } from "./pages/Authentication/login/Login";
import { Signup } from "./pages/Authentication/signup/SignUp";
import { CartListing } from "./pages/cart/CartListing";
import { ProductListing } from "./pages/product/productListing/productListing";
import { Wishlist } from "./pages/wishlist/wishlist";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<ProductListing />}/>
        <Route path="/cart" element={<CartListing />}/>
        <Route path="/wishlist" element={<Wishlist />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/> 
      </Routes> 
    </div>
  );
}

export default App;
