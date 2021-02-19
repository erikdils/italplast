import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import Layout from "../components/layout";
import SEO from "../components/seo";
import FooterForm from "../components/Pages/Ui/FooterForm/FooterForm";
import MainScreenSecond from "../components/Pages/Ui/MainScreenSecond/MainScreenSecond";
import CatalogBody from "../components/Pages/Catalog/CatalogBody";
import useLanguage from "../components/Hooks/useLanguage";
import "../styles/style.sass";

export const query = graphql`
  query CatalogoQuery($id: Int!) {
    catalog: allStrapiCatalog(filter: { categorie: { id: { eq: $id } } }) {
      edges {
        node {
          strapiId
          titolo_en
          titolo_bg
          titolo_ge
          titolo_it
          slug
          image {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          categorie {
            titolo_en
            titolo_bg
            titolo_ge
            titolo_it
          }
          brand {
            title
          }
        }
      }
    }
    allStrapiSubCategories {
      edges {
        node {
          Titolo_en
          slug
        }
      }
    }
    allStrapiBrand {
      edges {
        node {
          title
        }
      }
    }

    categorie: strapiCategorie(strapiId: { eq: $id }) {
      titolo_en
      titolo_bg
      titolo_ge
      titolo_it
    }
  }
`;

const Catalog = ({ data }) => {
  const { t } = useTranslation();
  const langToggle = useLanguage;
  const crumbsLinks = [
    { id: "1", path: "/", value: "Home" },
    { id: "2", path: "/catalog/", value: "Catalog" },
  ];
  const brands = data.allStrapiBrand.edges;
  const subCategory = data.allStrapiSubCategories.edges;
  const headTitle = data.categorie;
  const edges = data.catalog.edges;

  return (
    <Layout>
      <SEO title={t("Catalog")} />
      <MainScreenSecond
        crumbsLinks={crumbsLinks}
        headTitle={langToggle(
          headTitle.titolo_en,
          headTitle.titolo_bg,
          headTitle.titolo_ge,
          headTitle.titolo_it
        )}
      />
      <CatalogBody
        dataItems={edges}
        subCategory={subCategory}
        brands={brands}
      />
      <FooterForm />
    </Layout>
  );
};

export default Catalog;
