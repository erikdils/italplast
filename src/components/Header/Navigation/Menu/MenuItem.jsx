import React from 'react';
import { Link, Trans } from 'gatsby-plugin-react-i18next';

const MenuItem = (props) => {
  return (
    <li className="menu-item">
      <Link to={props.to} className="menu-item__link">
        <Trans>{props.title}</Trans>
      </Link>
    </li>
  );
};

export default MenuItem;
