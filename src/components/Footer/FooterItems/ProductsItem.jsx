import React from "react";
import { Link, Trans } from "gatsby-plugin-react-i18next";
import useLanguage from "../../Hooks/useLanguage";
import { fromCategorySlugToUrl } from "../../../utils/slug";

const ProductsItem = props => {
  const langToggle = useLanguage;
  return (
    <div className="footer-body__item">
      <span className="h3">
        <Trans>Products</Trans>
      </span>
      <ul className="products">
        {props.footerCategory.map((item, i) => {
          return (
            <li className="products-item" key={i}>
              <Link to={fromCategorySlugToUrl(item.node.slug)}>
                {langToggle(
                  item.node.titolo_en,
                  item.node.titolo_bg,
                  item.node.titolo_ge,
                  item.node.titolo_it
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductsItem;
