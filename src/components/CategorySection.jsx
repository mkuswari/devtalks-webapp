import PropTypes from "prop-types";
import ChipCategory from "./ChipCategory";

const CategorySection = ({
  categories,
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <div className="w-full md:w-1/4 flex-shrink-0">
      <h3 className="text-slate-800 font-bold text-xl underline decoration-wavy decoration-indigo-500">
        Categories
      </h3>
      <div className="mt-2">
        <div className="flex flex-wrap gap-2">
          {Array.from(categories).map((category) => {
            const isSelected = category === selectedCategory;
            return (
              <ChipCategory
                key={category}
                name={category}
                activeCategory={isSelected}
                onClick={() => onCategoryChange(category)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;

CategorySection.propTypes = {
  categories: PropTypes.array.isRequired,
  selectedCategory: PropTypes.string.isRequired,
  onCategoryChange: PropTypes.func.isRequired,
};
