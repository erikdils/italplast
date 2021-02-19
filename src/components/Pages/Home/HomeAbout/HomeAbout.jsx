import React from 'react';
import { Trans } from "gatsby-plugin-react-i18next";
import Img from 'gatsby-image';
import HomeAboutList from './HomeAboutList';
import useLanguage from '../../../Hooks/useLanguage';

const HomeAbout = ({ dataHomeAbout }) => {
  const langToggle = useLanguage;

  return (
    <section className="home-about">
      <div className="home-about__wrapper">
        <div className="about-item about-item__left">
          <h2 className="h2"><Trans>Company</Trans></h2>
          <ul className="about-lists">
            {dataHomeAbout.Vantaggi.map((list, index) => {
              return (
                <HomeAboutList
                  key={index}
                  title={langToggle(
                    list.Titolo_en,
                    list.Titolo_bg,
                    list.Titolo_ge,
                    list.Titolo_it
                  )}
                />
              );
            })}
          </ul>
        </div>
        <div className="about-item about-item__right">
          <Img
            className="about-image"
            fluid={dataHomeAbout.Image.childImageSharp.fluid}
          />
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
