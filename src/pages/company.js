import React from "react";
import { graphql } from "gatsby";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "../styles/style.sass";
import MainScreenSecond from "../components/Pages/Ui/MainScreenSecond/MainScreenSecond";
import AboutItems from "../components/Pages/About/AboutItems";
import FooterForm from "../components/Pages/Ui/FooterForm/FooterForm";

// import dataAbout from '../components/Pages/About/dataAbout';

const Azienda = ({ data }) => {
  const { t } = useTranslation();
  const company = <Trans>Company</Trans>;
  const crumbsLinks = [
    { id: "1", path: "/", value: "Home" },
    { id: "2", path: "/company/", value: "Company" },
  ];

  return (
    <Layout>
      <SEO title={t("Home")} />
      <MainScreenSecond crumbsLinks={crumbsLinks} headTitle={company} />
      <AboutItems dataAbout={data.strapiAzienda} />
      <FooterForm />
    </Layout>
  );
};

export default Azienda;

export const query = graphql`
  query AziendaQuery {
    strapiAzienda {
      Contenuto {
        Titolo_en
        Titolo_bg
        Titolo_ge
        Titolo_it
        Descrizione_en
        Descrizione_bg
        Descrizione_ge
        Descrizione_it
        Image {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
