import React from "react";

const GalleryFilter = ({
  dataFilter,
  onSelectFilter,
  filterActive,
  setFilter,
  images,
}) => {
  return (
    <ul className="gallery-filter">
      <li
        className={
          filterActive === null
            ? "gallery-filter__item is-active"
            : "gallery-filter__item"
        }
      >
        <button
          className="filter-button"
          onClick={() => {
            onSelectFilter(null);
            setFilter(images);
          }}
        >
          All
        </button>
      </li>
      {dataFilter.map((item, index) => {
        return (
          <li
            className={
              filterActive === index
                ? "gallery-filter__item is-active"
                : "gallery-filter__item"
            }
            key={`${item.id}_${index}`}
          >
            <button
              className="filter-button"
              value={item.value}
              onClick={e => {
                onSelectFilter(index);
                setFilter(
                  images.filter(z => {
                    return (
                      z.filtro_portfolio.Titolo_en.indexOf(e.target.value) > -1
                    );
                  })
                );
              }}
            >
              {item.value}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default GalleryFilter;
