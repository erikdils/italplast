import React from "react";
import { Link, Trans } from "gatsby-plugin-react-i18next";

const CrumbsNavItem = props => {
  console.log(props);
  return (
    <li className="crumbs-nav__item">
      <Link to={props.path} className="menu-item__link">
        <Trans>{props.value}</Trans>
      </Link>
    </li>
  );
};

export default CrumbsNavItem;
