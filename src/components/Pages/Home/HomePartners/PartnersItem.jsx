import React from 'react';
import PartnersImage from './PartnersImage';

const PartnersItem = (props) => {
  return (
    <div className="partners-item">
      <PartnersImage imgUrl={props.imgUrl} alt={props.alt} />
    </div>
  );
};

export default PartnersItem;
