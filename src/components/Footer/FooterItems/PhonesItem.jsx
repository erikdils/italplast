import React from 'react';
import { Trans } from 'gatsby-plugin-react-i18next';
import phonesstate from './phonesstate';

const PhonesItem = () => {
  const items = phonesstate;

  return (
    <div className="footer-body__item footer-phones__wrapper">
      <span className="h3"><Trans>Contacts</Trans></span>
      <ul className="footer-phones">
        {items.map((item) => {
          if (item.title) {
            return (
              <li className="footer-phones__item" key={item.id}>
                <span>{item.title}</span>
              </li>
            );
          } else {
            return (
              <li className="footer-phones__item" key={item.id}>
                <a href={item.link} className="phone-link">
                  {item.value}
                </a>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default PhonesItem;
