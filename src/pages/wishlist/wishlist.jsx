import { WishlistCard } from "../../components/wishlist/wishlist";
import { Navbar } from "../../components/nav/Navbar";
const Wishlist = () => {
  return (
    <div className="container">
      <Navbar />
      
          <WishlistCard/>
    </div>
  );
};

export { Wishlist}
