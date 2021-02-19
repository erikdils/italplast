import React from 'react';
import MenuItemDrop from './MenuItemDrop';
import MenuItem from './MenuItem';

function Menu(props) {
  const cls = ['menu'];

  if (props.isOpen) {
    cls.push('is-open');
  }

  const menuItems = props.items.map((item) => {
    return <MenuItem title={item.title} to={item.to} key={item.id} />;
  });
  return (
    <ul className={cls.join(' ')}>
      <MenuItemDrop
        onToggle={props.onToggle}
        isOpen={props.isOpen}
        isScroll={props.isScroll}
        dataCategory={props.dataCategory}
      />
      {menuItems}
    </ul>
  );
}

export default Menu;
