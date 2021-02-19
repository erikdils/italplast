import React from "react";
import Gallery from "./Gallery/Gallery";

const Portfolio = props => {
  return (
    <section className="portfolio">
      <div className="container-fluid">
        <header className="portfolio-header">
          <h2 className="portfolio-title">LOREM IPSUM LOREM IPSUM</h2>
          <p className="portfolio-description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis,
            expedita.
          </p>
        </header>
        <Gallery images={props.images} dataFilter={props.dataFilter} />
      </div>
    </section>
  );
};

export default Portfolio;
