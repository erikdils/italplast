import React from "react";
import { graphql } from "gatsby";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import Layout from "../components/layout";
import SEO from "../components/seo";
import FooterForm from "../components/Pages/Ui/FooterForm/FooterForm";
import MainScreenSecond from "../components/Pages/Ui/MainScreenSecond/MainScreenSecond";
import "../styles/style.sass";
import Portfolio from "../components/Pages/Portfolio/Portfolio";

const Realizzazioni = ({ data }) => {
  const cases = <Trans>Cases</Trans>;
  const { t } = useTranslation();

  const crumbsLinks = [
    { id: "1", path: "/", value: "Home" },
    { id: "2", path: "cases/", value: "Cases" },
  ];

  const dataGalleryFilter = [
    { id: "pvc", value: "PVC" },
    { id: "alluminio", value: "Aluminum" },
    { id: "legno", value: "Wood" },
  ];

  return (
    <Layout>
      <SEO title={t("Home")} />
      <MainScreenSecond crumbsLinks={crumbsLinks} headTitle={cases} />
      <Portfolio
        images={data.allStrapiPortfolio.nodes}
        dataFilter={dataGalleryFilter}
      />
      <FooterForm />
    </Layout>
  );
};

export default Realizzazioni;

export const query = graphql`
  {
    allStrapiPortfolio {
      nodes {
        Image {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        filtro_portfolio {
          Titolo_en
        }
      }
    }
  }
`;
