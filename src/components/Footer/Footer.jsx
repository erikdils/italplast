import React from "react";
import FooterBottom from "./FooterBottom";
import PhonesItem from "./FooterItems/PhonesItem";
import ProductsItem from "./FooterItems/ProductsItem";
import NavigationItem from "./FooterItems/NavigationItem";
import ContactsItem from "./FooterItems/ContactsItem";

const Footer = props => {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="footer-body">
          <ProductsItem footerCategory={props.footerCategory} />
          <NavigationItem />
          <PhonesItem />
          <ContactsItem />
        </div>
        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;
