import React from 'react';
import { Link } from 'gatsby-plugin-react-i18next';
import NunoxLogo from '../../images/svg/nunox.svg';

const FooterBottom = () => {
  return (
    <div className="footer-bottom">
      <span className="copy">
        <span>Tutti i diritti riservati. </span>
        <Link to="/">Policy & Privacy.</Link>
      </span>
      <a
        href="https://nunox.co/"
        className="create-link"
        target="_blank"
        rel="noreferrer noopener"
      >
        <NunoxLogo />
      </a>
    </div>
  );
};

export default FooterBottom;
