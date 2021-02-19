import React from 'react';

const HomeAboutList = (props) => {
  return (
    <li className="about-lists__item">
      <p className="item-text">{props.title}</p>
    </li>
  );
};

export default HomeAboutList;
