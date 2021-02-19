import React from "react";
import { Trans } from "gatsby-plugin-react-i18next";
import CaseColorsItem from "./CaseColorsItem/CaseColorsItem";
import useLanguage from "../../../Hooks/useLanguage";

const CaseColors = props => {
  // console.log(props)
  const langToggle = useLanguage;
  return (
    <section className="colors-section">
      <div className="container-fluid">
        <header className="colors-header">
          <h2 className="h2">
            <Trans>Color Palette</Trans>
          </h2>
        </header>
        <div className="colors-items">
          {props.dataColors.map((item, i) => {
            return (
              <CaseColorsItem
                key={i}
                title={langToggle(
                  item.Titolo_en,
                  item.Titolo_bg,
                  item.Titolo_gr,
                  item.Titolo_it
                )}
                colorId={item.Value}
                imgUrl={item.Image}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CaseColors;
