import React, { useState } from 'react';
import Addresses from './Addresses/Addresses';
import MapItems from './MapItems/MapItems';

const Contacts = ({ dataContacts }) => {
  const [active, setActive] = useState(0);

  const handleClick = (e) => {
    const index = parseInt(e.target.id, 0);
    if (index !== active) {
      setActive(index);
    }
  };

  return (
    <div className="contacts">
      <MapItems active={active} />
      <Addresses
        dataContacts={dataContacts}
        handleClick={handleClick}
        active={active}
      />
    </div>
  );
};

export default Contacts;
