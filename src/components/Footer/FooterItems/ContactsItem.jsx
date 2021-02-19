import React from 'react';
import { Link } from 'gatsby-plugin-react-i18next';

import ItalPlastLogo from '../../../images/svg/logo.svg';
import FooterSocial from './FooterSocial';

const ContactsItem = () => {
  return (
    <div className="footer-body__item footer-contacts__wrapper">
      <Link to="/" className="footer-logo">
        <ItalPlastLogo />
      </Link>
      <FooterSocial />
    </div>
  );
};

export default ContactsItem;
