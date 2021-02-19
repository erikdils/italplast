import React from "react";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "../styles/style.sass";
import MainScreenSecond from "../components/Pages/Ui/MainScreenSecond/MainScreenSecond";
import Cooperation from "../components/Pages/Cooperation/Cooperation";

const LavoraConNoi = () => {
  const { t } = useTranslation();
  const workWithUs = <Trans>Work with us</Trans>;
  const crumbsLinks = [
    { id: "1", path: "/", value: "Home" },
    { id: "2", path: "/work-with-us/", value: "Work with us" },
  ];

  return (
    <Layout>
      <SEO title={t("Home")} />
      <MainScreenSecond crumbsLinks={crumbsLinks} headTitle={workWithUs} />
      <Cooperation />
    </Layout>
  );
};

export default LavoraConNoi;
