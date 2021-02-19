import React from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import Layout from '../components/layout';
import SEO from '../components/seo';
import FooterForm from '../components/Pages/Ui/FooterForm/FooterForm';
import MainScreenSecond from '../components/Pages/Ui/MainScreenSecond/MainScreenSecond';
import CatalogBody from '../components/Pages/Catalog/CatalogBody';

import '../styles/style.sass';

const Catalog = ({ data }) => {
  const { t } = useTranslation();

  const crumbsLinks = [
    { id: '1', path: '/', value: 'Home' },
    { id: '2', path: '/catalog/', value: 'Catalog' },
  ];

  return (
    <Layout>
      <SEO title={t('Catalog')} />
      <MainScreenSecond crumbsLinks={crumbsLinks} headTitle="Finestre" />
      <CatalogBody dataItems={data.allStrapiCatalog.nodes} />
      <FooterForm />
    </Layout>
  );
};

export default Catalog;

export const query = graphql`
  query CatalogQuery {
    allStrapiCatalog {
      nodes {
        titolo_en
        titolo_bg
        titolo_ge
        titolo_it
        image {
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
