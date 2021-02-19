import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby-plugin-react-i18next";
import { fromProductSlugToUrl } from "../../../utils/slug";
import useLanguage from "../../Hooks/useLanguage";

const ResultsItem = ({ item }) => {
  const langToggle = useLanguage;

  return (
    <Link className="serach-link" to={fromProductSlugToUrl(item.slug)}>
      <Img className="serach-prev" fluid={item.image.childImageSharp.fluid} />
      <span className="serch-title">
        {langToggle(
          item.titolo_en,
          item.titolo_bg,
          item.titolo_ge,
          item.titolo_it
        )}
      </span>
    </Link>
  );
};

export default ResultsItem;
