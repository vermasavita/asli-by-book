import "./../../../components/filter/filter.css";
import { PriceRangeFilter } from "../../../components/filter/PriceRange";
import { CategoryFilter } from "../../../components/filter/CategoryFilter";
import { RatingFilter } from "../../../components/filter/Rating";
import { SortPriceFilter } from "../../../components/filter/SortPrice";
import { useFilter } from "../../../hooks/context/filter-context";
const Filter = () => {
  const { filterDispatch } = useFilter();
  return (
    <div className="filter">
      <div className="filter-heading">
        Filters
        <button className="clear-btn" onClick={() => filterDispatch({type: "RESET", payload: {}})}>Clear</button>
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
