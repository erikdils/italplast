import React from "react";
import { Link, Trans } from "gatsby-plugin-react-i18next";

const items = [
  { id: "1", title: "Company", to: "/company/" },
  { id: "2", title: "Cases", to: "/cases/" },
  { id: "3", title: "Work with us", to: "/work-with-us/" },
  { id: "4", title: "Contacts", to: "/contacts/" },
];

const NavigationItem = () => {
  return (
    <div className="footer-body__item">
      <span className="h3">Scoprire</span>
      <ul className="footer-navigation">
        {items.map(item => {
          return (
            <li className="footer-navigation__item" key={item.id}>
              <Link to={item.to}>
                <Trans>{item.title}</Trans>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavigationItem;
