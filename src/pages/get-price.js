import React from "react";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "../styles/style.sass";
import MainScreenSecond from "../components/Pages/Ui/MainScreenSecond/MainScreenSecond";
import Order from "../components/Pages/Order/Order";

const RichiediPreventivo = () => {
  const { t } = useTranslation();
  const getPrice = <Trans>Get Price</Trans>;
  const crumbsLinks = [
    { id: "1", path: "/", value: "Home" },
    { id: "2", path: "/get-price/", value: "Get Price" },
  ];

  return (
    <Layout>
      <SEO title={t("Home")} />

      <MainScreenSecond crumbsLinks={crumbsLinks} headTitle={getPrice} />
      <Order />
    </Layout>
  );
};

export default RichiediPreventivo;
