import React from 'react';
import Img from 'gatsby-image';

const CaseImage = (props) => {
  return (
    <Img
      className="case-image"
      fluid={props.img.image.childImageSharp.fluid}
    />
  );
};

export default CaseImage;
