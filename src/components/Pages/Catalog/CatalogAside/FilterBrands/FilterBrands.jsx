import React from "react";
// import FilterBrandsItem from "./FilterBrandsItem";

const FilterBrands = ({
  brands,
  activeFilter,
  toggleFilter,
  setItemState,
  dataItems,
}) => {
  console.log(brands);
  console.log(dataItems);
  return (
    <div className="filter-brands">
      <span className="filter-brands__title">Brands</span>
      <ul className="filter-brands__list">
        <li
          className={
            activeFilter === null
              ? "filter-brands__item is-active"
              : "filter-brands__item"
          }
        >
          <button
            onClick={() => {
              toggleFilter(null);
              setItemState(dataItems);
            }}
            className="filter-button"
          >
            <span className="button-title">All Brands</span>
            {/* <span className="button-count">55</span> */}
          </button>
        </li>
        {brands.map((item, index) => {
          return (
            <li
              key={`${item.node.title}_${index}`}
              className={
                activeFilter === index
                  ? "filter-brands__item is-active"
                  : "filter-brands__item"
              }
            >
              <button
                value={item.node.title}
                onClick={e => {
                  toggleFilter(index);
                  setItemState(
                    dataItems.filter(z => {
                      return z.node.brand.title.indexOf(e.target.value) > -1;
                    })
                  );
                }}
                className="filter-button"
              >
                {item.node.title}
                {/* <span className="button-title">{item.node.title}</span>
                <span className="button-count">55</span> */}
              </button>
            </li>
          );
        })}
        {/* <FilterBrandsItem /> */}
      </ul>
    </div>
  );
};

export default FilterBrands;
