import "./App.css";
import { ProductListing, Wishlist, CartListing, Login, Signup } from './pages/index';
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
