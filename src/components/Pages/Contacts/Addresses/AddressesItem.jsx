import React from 'react';
import AddressList from './AddressList';

const AddressesItem = ({ active, handleClick, id, title, contacts }) => {
  return (
    <div className="address-item">
      <button
        className={!active ? 'address-title' : 'address-title is-active'}
        onClick={handleClick}
        id={id}
      >
        <span className="address-title__icon"></span>
        {title}
      </button>
      <AddressList contacts={contacts} />
    </div>
  );
};

export default AddressesItem;
