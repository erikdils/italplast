import React from 'react';
import AboutItem from './AboutItem/AboutItem';
import useLanguage from '../../Hooks/useLanguage';

const AboutItems = (props) => {
  const langToggle = useLanguage;

  return (
    <section className="about">
      {props.dataAbout.Contenuto.map((item, index) => {
        return (
          <AboutItem
            key={index}
            title={langToggle(
              item.Titolo_en,
              item.Titolo_bg,
              item.Titolo_ge,
              item.Titolo_it
            )}
            text={langToggle(
              item.Descrizione_en,
              item.Descrizione_bg,
              item.Descrizione_ge,
              item.Descrizione_it
            )}
            img={item.Image}
          />
        );
      })}
    </section>
  );
};

export default AboutItems;
