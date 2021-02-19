import React from "react";
import { Link } from "gatsby-plugin-react-i18next";
import { fromMaterialSlugToUrl } from "../../../../../utils/slug";

const DropDownSublink = props => {
  return (
    <li className="list-item">
      <Link to={fromMaterialSlugToUrl(props.slug)} className="list-item__link">
        {props.title}
      </Link>
    </li>
  );
};

export default DropDownSublink;
