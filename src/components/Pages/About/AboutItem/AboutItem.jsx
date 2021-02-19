import React from 'react';
import Img from 'gatsby-image';

const AboutItem = (props) => {
  const ReactMarkdown = require('react-markdown');

  return (
    <div className="about-items">
      <div className="about-item__info">
        <h2 className="h2">{props.title}</h2>
        <ReactMarkdown source={props.text} className="about-text" />
      </div>
      <div className="about-item__image">
        <Img className="about-img" fluid={props.img.childImageSharp.fluid} />
      </div>
    </div>
  );
};

export default AboutItem;
