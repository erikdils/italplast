import React from "react";
import FilterMaterialsItem from "./FilterMaterialsItem";
import { Trans } from "gatsby-plugin-react-i18next";

const FilterMaterials = props => {
  // console.log(props);
  // const dataItems = props.dataItems;

  return (
    <div className="filter-materials">
      <span className="filter-materials__title">
        <Trans>Material</Trans>
      </span>
      <ul className="filter-materials__list">
        {props.subCategory.map((mat, i) => {
          return (
            <FilterMaterialsItem
              key={i}
              title={mat.node.Titolo_en}
              slug={mat.node.slug}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default FilterMaterials;
