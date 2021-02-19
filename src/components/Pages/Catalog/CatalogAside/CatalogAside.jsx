import React, { useState } from "react";
import FilterBrands from "./FilterBrands/FilterBrands";
import FilterMaterials from "./FilterMaterials/FilterMaterials";

const CatalogAside = props => {
  const [activeFilter, setActiveFilter] = useState(null);

  function toggleFilter(index) {
    setActiveFilter(index);
  }

  const cls = ["catalog-aside"];

  if (props.activeFilter) {
    cls.push("is-active");
  }

  return (
    <div className={cls.join(" ")}>
      <FilterMaterials
        dataItems={props.dataItems}
        subCategory={props.subCategory}
      />
      <FilterBrands
        setItemState={props.setItemState}
        brands={props.brands}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        toggleFilter={toggleFilter}
        dataItems={props.dataItems}
      />
    </div>
  );
};

export default CatalogAside;
