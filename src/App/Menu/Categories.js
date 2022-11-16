import React from 'react';

const Categories = ({
  //get props
  categories,
  filterItems
}) => {
  return (
    <div className="btn-container">
      {/* mapping categories */}
      {categories.map((category, index) => {
        return (
          // filter button
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
