import React from 'react';

const AddressList = ({ contacts }) => {
  return (
    <ul className="contacts-list">
      {contacts.map((list) => {
        if (list.title) {
          return (
            <li className="contacts-list__item" key={list.id}>
              <span className="list-title">{list.title}</span>
            </li>
          );
        } else if (list.link) {
          return (
            <li className="contacts-list__item" key={list.id}>
              <a className="list-link" href={list.link}>
                {list.value}
              </a>
            </li>
          );
        } else {
          return (
            <li className="contacts-list__item" key={list.id}>
              <p className="list-text">{list.address}</p>
            </li>
          );
        }
      })}
    </ul>
  );
};

export default AddressList;
