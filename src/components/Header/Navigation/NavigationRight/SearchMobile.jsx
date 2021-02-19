import React from 'react';
import { Link } from 'gatsby-plugin-react-i18next';
import SearchComponent from '../../../../images/svg/search.svg';

const SearchMobile = () => {
  return (
    <Link to="/search/" className="mobile-search">
      <span className="mobile-search__title">Site search</span>
      <SearchComponent />
    </Link>
  );
};

export default SearchMobile;
