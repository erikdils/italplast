import React from 'react';
import { Link } from 'gatsby-plugin-react-i18next';
import Img from 'gatsby-image';
import {fromProductSlugToUrl} from '../../../../../utils/slug'

const CatalogItemsItem = (props) => {
  return (
    <Link to={fromProductSlugToUrl(props.slug)} className="catalog-item">
      <div className="link-background"></div>
      <div className="img-wrapper">
        <Img className="catalog-img" fluid={props.img.childImageSharp.fluid} />
      </div>
      <span className="catalog-item__title">{props.title}</span>
    </Link>
  );
};

export default CatalogItemsItem;
