import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { I18nContext } from 'gatsby-plugin-react-i18next';

import SearchBar from './SearchBar';

const SearchSection = ({ dataSearch }) => {
  const {
    i18n: { language },
  } = useContext(I18nContext);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (query === '') {
      setSuggestions([]);
    } else {
      let val = dataSearch
        .filter((item) => {
          if (language === 'en') {
            return item.titolo_en.toLowerCase().indexOf(query.toLowerCase()) !==
              -1
              ? true
              : false;
          } else if (language === 'bg') {
            return item.titolo_bg.toLowerCase().indexOf(query.toLowerCase()) !==
              -1
              ? true
              : false;
          } else if (language === 'de') {
            return item.titolo_ge.toLowerCase().indexOf(query.toLowerCase()) !==
              -1
              ? true
              : false;
          } else {
            return item.titolo_it.toLowerCase().indexOf(query.toLowerCase()) !==
              -1
              ? true
              : false;
          }
        })
        .map((item) => item);
      setSuggestions(val);
    }
    setLoading(false);
  }, [query, dataSearch, language]);

  return (
    <section className="search-section">
      <SearchBar
        loading={loading}
        setLoading={setLoading}
        value={query}
        onChange={(val) => setQuery(val)}
        suggestions={suggestions}
      />
    </section>
  );
};

export default SearchSection;
