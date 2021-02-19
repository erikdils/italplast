import React from 'react';
import ArrowDownComponent from '../../../../images/svg/arrow_down.svg';
import DropdownMenu from './DropdownMenu/DropdownMenu';
import { Trans } from 'gatsby-plugin-react-i18next';

const MenuItemDrop = (props) => {
  const cls = ['menu-item__button'];

  if (props.isOpen) {
    cls.push('is-open');
  }

  return (
    <li className="menu-item__drop">
      <button className={cls.join(' ')} onClick={props.onToggle}>
        <span>
          <Trans>Products</Trans>
        </span>
        <ArrowDownComponent />
      </button>
      <DropdownMenu
        onToggle={props.onToggle}
        isOpen={props.isOpen}
        isScroll={props.isScroll}
        dataCategory={props.dataCategory}
      />
    </li>
  );
};

export default MenuItemDrop;
