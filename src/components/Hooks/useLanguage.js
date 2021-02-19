import { useContext } from 'react';
import { I18nContext } from 'gatsby-plugin-react-i18next';

const useLanguage = (engl, bolg, germ, ital) => {
  const {
    i18n: { language },
  } = useContext(I18nContext);

  if (language === 'en') {
    return engl;
  } else if (language === 'bg') {
    return bolg;
  } else if (language === 'de') {
    return germ;
  } else {
    return ital;
  }
};

export default useLanguage;
