import { ProductData } from "../../../data/productData";
import { ProductCart } from "../../../components/card/card";
import { Navbar } from "../../../components/nav/Navbar";
import { Filter } from "../filter/Filter";

import "./productListing.css";
const ProductListing = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="product-listing">
        <Filter />
        <div className="grid-container">
          {ProductData.map((product) => (
            <ProductCart
              productId={product._id}
              productImg={product.image}
              productTitle={product.title}
              productAuthor={product.author}
              productPrice={product.price}
              productRating={product.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export { ProductListing };
