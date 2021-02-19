import React, { useState } from 'react';
import { Link, useI18next } from 'gatsby-plugin-react-i18next';

import GlobeComponent from '../../../../images/svg/globe.svg';

const Language = () => {
  const { languages, originalPath } = useI18next();
  const [activeItem, setActiveItem] = useState(false);

  const cls = ['languages'];

  if (activeItem) {
    cls.push('is-open');
  }

  const moseEnterHendler = () => {
    setActiveItem(!activeItem);
  };

  const mouseLeaveHendler = () => {
    setActiveItem(false);
  };

  return (
    <div
      role="presentation"
      className="language-wrapper"
      onMouseEnter={moseEnterHendler}
      onMouseLeave={mouseLeaveHendler}
    >
      <button className="language-active">
        <GlobeComponent />
      </button>
      <ul className={cls.join(' ')}>
        {languages.map((lng) => (
          <li key={lng}>
            <Link to={originalPath} language={lng}>
              {lng}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Language;
