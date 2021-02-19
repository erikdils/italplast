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
  query SubCatalogoQuery($id: Int!) {
    materials: allStrapiCatalog(
      filter: { sub_categorie: { id: { eq: $id } } }
    ) {
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
          sub_categorie {
            Titolo_en
            Titolo_bg
            Titolo_ge
            Titolo_it
            slug
          }
          brand {
            title
          }
        }
      }
      pageInfo {
        totalCount
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
    sub_categorie: strapiSubCategories(strapiId: { eq: $id }) {
      Titolo_en
      Titolo_bg
      Titolo_ge
      Titolo_it
    }
  }
`;

const Materials = ({ data }) => {
  const { t } = useTranslation();
  const langToggle = useLanguage;
  const crumbsLinks = [
    { id: "1", path: "/", value: "Home" },
    { id: "2", path: "/catalog/", value: "Catalog" },
  ];

  const brands = data.allStrapiBrand.edges;
  const totalCount = data.materials.pageInfo;
  const subCategory = data.allStrapiSubCategories.edges;
  const headTitle = data.sub_categorie;
  const edges = data.materials.edges;

  return (
    <Layout>
      <SEO title={t("Catalog")} />
      <MainScreenSecond
        crumbsLinks={crumbsLinks}
        headTitle={langToggle(
          headTitle.Titolo_en,
          headTitle.Titolo_bg,
          headTitle.Titolo_ge,
          headTitle.Titolo_it
        )}
      />
      <CatalogBody
        dataItems={edges}
        totalCount={totalCount}
        subCategory={subCategory}
        brands={brands}
      />
      <FooterForm />
    </Layout>
  );
};

export default Materials;
