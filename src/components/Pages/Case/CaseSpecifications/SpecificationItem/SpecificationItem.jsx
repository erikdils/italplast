import React from 'react';

const SpecificationItem = (props) => {
  return (
    <div className="specification-item">
      <p className="specification-item__title">{props.title}</p>
      <span className="specification-item__value">{props.value}</span>
    </div>
  );
};

export default SpecificationItem;
