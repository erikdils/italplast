import React from "react";
import { Link, Trans } from "gatsby-plugin-react-i18next";
import Img from "gatsby-image";
import {fromProductSlugToUrl} from '../../../../utils/slug'

const HomeSliderSlide = props => {
  return (
    <div className="slide">
      <div className="slide-wrapper">
        <Img className="slide-img" fluid={props.img.childImageSharp.fluid} />
        <ul className="slide-lists">
          <li className="slide-list slide-list__title">
            <span className="slide-title">{props.title}</span>
          </li>
          <li className="slide-list slide-list__link">
            <Link to={fromProductSlugToUrl(props.slug)} className="slide-link">
              <span className="slide-link__title">
                <Trans>Go to the catalog</Trans>
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomeSliderSlide;
