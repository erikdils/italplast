import React from "react";
import { Trans } from "gatsby-plugin-react-i18next";
import CatalogItemsItem from "./CatalogItemsItem/CatalogItemsItem";
import useLanguage from "../../../Hooks/useLanguage";

const CatalogItems = ({ dataItems, activeFilter, filterToggle }) => {
  const langToggle = useLanguage;
  const cls = ["mobile-filter__button"];

  if (activeFilter) {
    cls.push("is-active");
  }

  return (
    <div className="catalog-items_wrapper">
      <header className="catalog-header">
        <span className="catalog-header__title">
          <Trans>Products founds</Trans>
          <span className="catalog-header__count">{dataItems.length}</span>
        </span>
        <button className={cls.join(" ")} onClick={filterToggle}>
          <span className="filter-button__title">
            <Trans>Filters</Trans>
          </span>
          <span className="button-icon">
            <span className="lines">
              <span className="line line-1"></span>
              <span className="line line-2"></span>
              <span className="line line-3"></span>
            </span>
          </span>
        </button>
      </header>
      <div className="catalog-items">
        {dataItems.map((item, index) => {
          return (
            <CatalogItemsItem
              key={index}
              img={item.node.image}
              title={langToggle(
                item.node.titolo_en,
                item.node.titolo_bg,
                item.node.titolo_ge,
                item.node.titolo_it
              )}
              slug={item.node.slug}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CatalogItems;
