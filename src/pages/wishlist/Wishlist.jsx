import "./wishlist.css";
import { WishlistCard } from "../../components/wishlist/WishlistComp";
import { Navbar } from "../../components/nav/Navbar";
import { useWishlist } from "../../hooks/context/wishlist-context";
import { Footer } from "../../components/footer/Footer";

const Wishlist = () => {
  const { wishlistState } = useWishlist();
  const { wishlist } = wishlistState;
  return (
    <div className="container">
      <Navbar />
      <div>
        <h1>MyWishlist</h1>
        <div className="grid-container">
          {wishlist.map((wishlistProduct) => {
            return (
              <WishlistCard
                wishlistId={wishlistProduct.productId}
                wishlistImg={wishlistProduct.productImg}
                wishlistTitle={wishlistProduct.productTitle}
                wishlistPrice={wishlistProduct.productPrice}
                wishlistRating={wishlistProduct.productRating}
              />
            );
          })}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export { Wishlist };
