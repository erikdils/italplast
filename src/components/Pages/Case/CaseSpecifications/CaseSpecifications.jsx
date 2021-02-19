import React from "react";
import SpecificationItem from "./SpecificationItem/SpecificationItem";
import { Trans } from "gatsby-plugin-react-i18next";
import useLanguage from "../../../Hooks/useLanguage";

const CaseSpecifications = props => {
  const langToggle = useLanguage;
  return (
    <section className="specification">
      <div className="container-fluid">
        <header className="specification-header">
          <h2 className="h2">
            <Trans>Main feature</Trans>
          </h2>
        </header>
        <div className="specification-items">
          {props.dataSpecification.map((item, i) => {
            return (
              <SpecificationItem
                key={i}
                title={langToggle(
                  item.Caratteristicha_en,
                  item.Caratteristiche_bg,
                  item.Caratteristiche_ge,
                  item.Caratteristiche_it
                )}
                value={langToggle(
                  item.value_en,
                  item.value_bg,
                  item.value_ge,
                  item.value_it
                )}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CaseSpecifications;
