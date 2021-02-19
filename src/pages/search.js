import React from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import Layout from '../components/layout';
import SEO from '../components/seo';
import '../styles/style.sass';
import SearchSection from '../components/Pages/Search/SearchSection';

const Search = ({ data }) => {
  const { t } = useTranslation();


  return (
    <Layout>
      <SEO title={t('Home')} />
      <SearchSection dataSearch={data.allStrapiCatalog.nodes} />
    </Layout>
  );
};

export default Search;

export const query = graphql`
  {
    allStrapiCatalog {
      nodes {
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
      }
    }
  }
`;
