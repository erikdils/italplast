import React from "react";
import DropDownSublink from "./DropDownSublink";
import DropDownSublinkCategory from "./DropDownSublinkCategory";

const DropdownMenuItem = props => {
  const dropDownSublink = props.subLinks.map((link, index) => {
    return (
      <DropDownSublink
        title={props.langToggle(
          link.Titolo_en,
          link.Titolo_bg,
          link.Titolo_ge,
          link.Titolo_it
        )}
        slug={link.slug}
        key={index}
      />
    );
  });

  return (
    <ul className="drop-menu__list">
      <DropDownSublinkCategory title={props.title} slug={props.slug} />
      {dropDownSublink}
    </ul>
  );
};

export default DropdownMenuItem;
