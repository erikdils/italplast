import { Link } from "gatsby-plugin-react-i18next";
import React, { useState } from "react";
import useMediaQuery from "../Hooks/useMediaQuery";
import useScroll from "../Hooks/useScroll";
import LogoComponent from "../../images/svg/logo.svg";
import Burger from "./Burger/Burger";
import Navigation from "./Navigation/Navigation";

const Header = ({ dataCategory }) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);
  const [activeHeader, setActiveHeader] = useState(false);

  const cls = ["main-header"];

  let headerStyle = {
    height: "130px",
  };

  let mediaQuery = useMediaQuery("(max-width: 1200px)");

  if (mediaQuery) {
    headerStyle = { height: activeHeader ? "90px" : "90px" };
  } else {
    headerStyle = { height: activeHeader ? "90px" : "130px" };
  }

  const changePosition = 100;
  let scroll = useScroll();

  if (scroll > changePosition && !activeHeader) {
    setActiveHeader(true);
  }

  if (scroll <= changePosition && activeHeader) {
    setActiveHeader(false);
  }

  function toggleHendler(e) {
    e.preventDefault();
    setOpen(!open);
  }

  function closeHendler() {
    setOpen(!open);
  }

  function mobileHendler(e) {
    e.preventDefault();
    setActive(!active);
    setOpen(false);
  }

  if (open) {
    cls.push("is-open");
  }
  if (active) {
    cls.push("is-open");
  }

  if (activeHeader) {
    if (open || active) {
      cls.push(" ");
    } else {
      cls.push("is-scroll");
    }
  }

  return (
    <header className={cls.join(" ")} style={headerStyle}>
      <div className="overlay" onClick={closeHendler} role="presentation"></div>
      <div className="header-bg"></div>
      <Link className="logo" to="/">
        <LogoComponent />
      </Link>
      <Navigation
        onToggle={toggleHendler}
        isOpen={open}
        isActive={active}
        isScroll={activeHeader}
        dataCategory={dataCategory}
      />
      <Burger mibileToggle={mobileHendler} isActive={active} />
    </header>
  );
};

export default Header;
