import React from 'react';
//import { Link } from 'gatsby-plugin-react-i18next';
//import Language from '../Language/Language';
import SearchButton from './SearchButton';
import { Link, Trans } from 'gatsby-plugin-react-i18next';
import Language from '../Language/Language';

const NavigationRight = ({ isOpen }) => {
  const cls = ['navigation-right'];

  if (isOpen) {
    cls.push('is-open');
  }

  return (
    <div className={cls.join(' ')}>
      <Link className="header-button" to="/get-price/">
        <Trans>Get Price</Trans>
      </Link>
      <SearchButton />
      <Language />
    </div>
  );
};

export default NavigationRight;
