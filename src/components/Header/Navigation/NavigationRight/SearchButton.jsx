import React from 'react';
import { Link } from 'gatsby-plugin-react-i18next';
import SearchComponent from '../../../../images/svg/search.svg';

const SearchButton = () => {
  return (
    <Link to="/search/" className="search-button">
      <SearchComponent />
    </Link>
  );
};

export default SearchButton;
