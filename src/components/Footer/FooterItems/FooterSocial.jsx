import React from 'react';
import InstagramIcon from '../../../images/svg/Instagram.svg';
import TwitterIcon from '../../../images/svg/Twitter.svg';
import FacebookIcon from '../../../images/svg/Facebook.svg';

const FooterSocial = () => {
  return (
    <ul className="socials">
      <li className="socials-item">
        <a
          href="https://www.facebook.com/"
          className="socials-item__link"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FacebookIcon />
        </a>
      </li>
      <li className="socials-item">
        <a
          href="https://www.instagram.com/"
          className="socials-item__link"
          target="_blank"
          rel="noreferrer noopener"
        >
          <InstagramIcon />
        </a>
      </li>
      <li className="socials-item">
        <a
          href="https://twitter.com/"
          className="socials-item__link"
          target="_blank"
          rel="noreferrer noopener"
        >
          <TwitterIcon />
        </a>
      </li>
    </ul>
  );
};

export default FooterSocial;
