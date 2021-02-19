import React from 'react';
import AddressesItem from './AddressesItem';

const Addresses = ({ dataContacts, handleClick, active }) => {
  return (
    <div className="address-wrapper">
      {dataContacts.map((item) => {
        return (
          <AddressesItem
            key={item.id}
            title={item.title}
            id={item.id}
            active={active === item.id}
            handleClick={handleClick}
            contacts={item.contacts}
          />
        );
      })}
    </div>
  );
};

export default Addresses;
