import React from 'react';
import DropdownMenuItem from './DropdownMenuItem';
import useLanguage from '../../../../Hooks/useLanguage';

const DropdownMenu = (props) => {
  const langToggle = useLanguage;

  const cls = ['drop-menu'];

  if (props.isOpen) {
    cls.push('is-open');
  }

  if (props.isScroll) {
    cls.push('is-scroll');
  }

  const dropMenuItems = props.dataCategory.map((list, index) => {
    return (
      <DropdownMenuItem
        subLinks={list.node.sub_categories}
        langToggle={langToggle}
        key={index}
        title={langToggle(
          list.node.titolo_en,
          list.node.titolo_bg,
          list.node.titolo_ge,
          list.node.titolo_it
        )}
        slug={list.node.slug}
      />
    );
  });
  return <nav className={cls.join(' ')}>{dropMenuItems}</nav>;
};

export default DropdownMenu;
