import React from "react";
import Menu from "./Menu/Menu";
import NavigationRight from "./NavigationRight/NavigationRight";
import SearchMobile from "./NavigationRight/SearchMobile";

const Navigation = props => {
  const items = [
    { id: "1", title: "Company", to: "/company/" },
    { id: "2", title: "Cases", to: "/cases/" },
    { id: "3", title: "Work with us", to: "/work-with-us/" },
    { id: "4", title: "Contacts", to: "/contacts/" },
  ];

  const cls = ["navigation"];

  if (props.isActive) {
    cls.push("is-active");
  }

  return (
    <nav className={cls.join(" ")}>
      <div className="navigation-wrapper">
        <SearchMobile />
        <Menu
          dataCategory={props.dataCategory}
          items={items}
          onToggle={props.onToggle}
          isOpen={props.isOpen}
          isScroll={props.isScroll}
        />
        <NavigationRight
          onToggle={props.onToggle}
          isOpen={props.isOpen}
        />
      </div>
    </nav>
  );
};

export default Navigation;
