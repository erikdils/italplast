import React from "react";
import Img from "gatsby-image";

const CaseColorsItem = props => {
  return (
    <div className="colors-item">
      <div className="image-wrapper">
        <Img
          className="colors-img"
          alt={props.alt}
          fluid={props.imgUrl.childImageSharp.fluid}
        />
      </div>
      <div className="color-info">
        <span className="color-id">{props.colorId}</span>
        <span className="color-name">{props.title}</span>
      </div>
    </div>
  );
};

export default CaseColorsItem;
