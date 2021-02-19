import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import Layout from "../components/layout";
import SEO from "../components/seo";
import FooterForm from "../components/Pages/Ui/FooterForm/FooterForm";
import "../styles/style.sass";
import CaseMainScreen from "../components/Pages/Case/CaseMainScreen/CaseMainScreen";
import CaseSpecifications from "../components/Pages/Case/CaseSpecifications/CaseSpecifications";
import CaseColors from "../components/Pages/Case/CaseColors/CaseColors";

const Case = ({ data }) => {
  const { t } = useTranslation();
  const productCard = data.strapiCatalog;
  const dataSpecification = data.strapiCatalog.Caratteristiche;
  const dataColors = data.strapiCatalog.Colori;

  const crumbsLinks = [
    { id: "1", path: "/", value: "Home" },
    { id: "2", path: "/finestre/", value: "Finestre" },
    { id: "3", path: "/case-01/", value: "Case-01" },
  ];

  return (
    <Layout>
      <SEO title={t("Home")} />
      <CaseMainScreen crumbsLinks={crumbsLinks} productCard={productCard} />
      <CaseSpecifications dataSpecification={dataSpecification} />
      <CaseColors dataColors={dataColors} />
      <FooterForm />
    </Layout>
  );
};

export default Case;

export const query = graphql`
  query Product($id: String!) {
    strapiCatalog(id: { eq: $id }) {
      strapiId
      titolo_en
      titolo_bg
      titolo_ge
      titolo_it
      descrizione_en
      descrizione_bg
      descrizione_ge
      descrizione_it
      image {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      Caratteristiche {
        Caratteristicha_en
        Caratteristiche_bg
        Caratteristiche_ge
        Caratteristiche_it
        value_en
        value_bg
        value_ge
        value_it
      }
      Colori {
        Titolo_en
        Titolo_bg
        Titolo_ge
        Titolo_it
        Image {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        Value
      }
    }
  }
`;
