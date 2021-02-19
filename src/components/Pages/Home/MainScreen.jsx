import React from 'react';
import Img from 'gatsby-image';

const MainScreen = ({ title, img }) => {
  return (
    <section className="home-main">
      <div className="container-fluid">
        <div className="home-main__wrapper">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-6 col-md-10 col-11">
              <div className="home-main__left">
                <Img className="main-img" fluid={img.childImageSharp.fluid} />
                <h1 className="h1">{title}</h1>
                <button className="button-outline">SCOPRI DI PIU'</button>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-12">
              <div className="home-main__right">
                <Img className="main-img" fluid={img.childImageSharp.fluid} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainScreen;
