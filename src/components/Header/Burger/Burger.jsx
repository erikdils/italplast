import React from 'react';

const Burger = (props) => {
  const cls = ['burger'];

  if (props.isActive) {
    cls.push('is-open');
  }

  return (
    <button className={cls.join(' ')} onClick={props.mibileToggle}>
      <span className="lines lines-1"></span>
      <span className="lines lines-2"></span>
      <span className="lines lines-3"></span>
    </button>
  );
};

export default Burger;
