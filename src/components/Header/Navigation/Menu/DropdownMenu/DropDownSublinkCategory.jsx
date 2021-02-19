import React from 'react';
import { Link } from 'gatsby-plugin-react-i18next';
import {fromCategorySlugToUrl} from '../../../../../utils/slug';

const DropDownSublinkCategory = (props) => {
  return (
    <li className="list-item">
      <Link to={fromCategorySlugToUrl(props.slug)} className="list-item__link">
        {props.title}
      </Link>
    </li>
  );
};

export default DropDownSublinkCategory;
