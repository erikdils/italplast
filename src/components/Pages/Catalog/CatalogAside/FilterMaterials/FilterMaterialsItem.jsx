import React from "react";
import { Link } from "gatsby-plugin-react-i18next";
import { fromMaterialSlugToUrl } from "../../../../../utils/slug";

const FilterMaterialsItem = props => {
  return (
    <li className="filter-materials__item">
      <Link to={fromMaterialSlugToUrl(props.slug)} className="filter-link">
        <span className="link-title">{props.title}</span>
      </Link>
    </li>
  );
};

export default FilterMaterialsItem;
