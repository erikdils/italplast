import React from 'react';
import CrumbsNav from '../../Ui/CrumbsNav/CrumbsNav';
import CaseImage from './CaseImage';
import useLanguage from '../../../Hooks/useLanguage';

const ReactMarkdown = require('react-markdown')

const CaseMainScreen = (props) => {
  const langToggle = useLanguage;
  return (
    <section className="case-mainscren">
      <div className="container-fluid">
        <div className="main-screen__wrapper">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-6 col-lg-6 order-lg-1 col-md-8 order-2">
              <div className="case-mainscren__left">
                <CaseImage img={props.productCard}/>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 order-lg-2 col-md-12 order-1">
              <div className="case-mainscren__right">
                <CrumbsNav crumbsLinks={props.crumbsLinks} />
                <h1 className="h1">{langToggle(
                  props.productCard.titolo_en,
                  props.productCard.titolo_bg,
                  props.productCard.titolo_ge,
                  props.productCard.titolo_it,
                  )}</h1>
                  <ReactMarkdown source={langToggle(
                    props.productCard.descrizione_en,
                    props.productCard.descrizione_bg,
                    props.productCard.descrizione_ge,
                    props.productCard.descrizione_it
                  )} className="case-description"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseMainScreen;
