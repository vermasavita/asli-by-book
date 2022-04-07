import "./productListing.css";
import { ProductData } from "../../../data/productData";
import { ProductCart } from "../../../components/card/Card";
import { Navbar } from "../../../components/nav/Navbar";
import { Filter } from "../filter/Filter";
import { SortByPrice } from "../../../utils/filter/sort-by-price";
import { useFilter } from "../../../hooks/context/filter-context";
import { ratingFilter } from "../../../utils/filter/rating-filter";
import { priceFilter } from "../../../utils/filter/price-filter";
import { categoryFilter } from "../../../utils/filter/category-filter";
import { Footer } from "../../../components/footer/Footer";

const ProductListing = () => {
  const { filterState } = useFilter();
  const sortDataByPrice = SortByPrice(filterState, ProductData);
  const rating = ratingFilter(filterState, sortDataByPrice);
  const priceRange = priceFilter(filterState, rating);
  const category = categoryFilter(filterState, priceRange);

  return (
    <div className="container">
      <Navbar />
      <div className="product-listing">
        <Filter />
        <div className="grid-container">
          {category.map((product) => (
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
      <Footer/>
    </div>
  );
};

export { ProductListing };
