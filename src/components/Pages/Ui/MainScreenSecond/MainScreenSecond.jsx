import React from "react";
import CrumbsNav from "../CrumbsNav/CrumbsNav";

const MainScreenSecond = props => {
  return (
    <section className="main-screen__second">
      <div className="screen-content">
        <h1 className="h1">{props.headTitle}</h1>
        <CrumbsNav crumbsLinks={props.crumbsLinks} />
      </div>
    </section>
  );
};

export default MainScreenSecond;
