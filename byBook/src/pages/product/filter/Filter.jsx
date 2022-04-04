import "./../../../components/filter/filter.css";
import { PriceRangeFilter } from "../../../components/filter/PriceRange";
import { CategoryFilter } from "../../../components/filter/CategoryFilter";
import { RatingFilter } from "../../../components/filter/Rating";
import { SortPriceFilter } from "../../../components/filter/SortPrice";
const Filter = () => {
  return (
    <div className="filter">
      <div className="filter-heading">
        Filters
        <button className="clear-btn">Clear</button>
      </div>
      <div>
        <PriceRangeFilter />
        <CategoryFilter />
        <RatingFilter />
        <SortPriceFilter />
      </div>
    </div>
  );
};

export { Filter };
