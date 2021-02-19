import React, { useState, useEffect } from "react";
import { useThrottle } from "../../Hooks/useThrottle";
import { Trans } from "gatsby-plugin-react-i18next";
import ResultsItem from "./ResultsItem";
import SearchIcon from "../Ui/Svg/search.svg";

export default function SearchBar({
  value,
  suggestions,
  onChange,
  loading,
  setLoading,
}) {
  const [q, setQ] = useState("");
  const throttledVal = useThrottle(q, 100);
  const handleInputChange = e => {
    setQ(e.target.value);
    setLoading(true);
  };

  useEffect(() => {
    onChange(throttledVal);
  }, [throttledVal, onChange]);

  const clearQuery = () => {
    setQ("");
    if (loading) setLoading(false);
  };

  return (
    <>
      <div className="search-bar">
        <div className="search-bar__wrapper">
          <i className="search-icon">
            <SearchIcon />
          </i>
          <input type="text" value={q} onChange={handleInputChange} />
          <div className="right-side">
            {q && (
              <button className="clear-search" onClick={clearQuery}>
                X
              </button>
            )}
          </div>
        </div>
      </div>
      <section className="results-section">
        {!loading && (
          <div className="results-wrapper">
            <p className="results-counter">
              {" "}
              <Trans>Search</Trans>: <span>{suggestions.length}</span>
            </p>
            {suggestions.map((item, index) => (
              <ResultsItem key={index} item={item} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
