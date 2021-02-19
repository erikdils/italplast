import React from 'react';

const Map = ({ active, children }) => {
  return <div className={!active ? 'map' : 'map is-active'}>{children}</div>;
};

export default Map;
