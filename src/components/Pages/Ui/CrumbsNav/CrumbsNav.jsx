import React from "react";
import CrumbsNavItem from "./CrumbsNavItem";

const CrumbsNav = props => {
  return (
    <ul className="crumbs-nav">
      {props.crumbsLinks.map((item, index) => {
        return (
          <CrumbsNavItem key={index} path={item.path} value={item.value} />
        );
      })}
    </ul>
  );
};

export default CrumbsNav;
