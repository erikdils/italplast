import React from "react";
import { graphql } from "gatsby";
import { useTranslation, Trans } from "gatsby-plugin-react-i18next";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "../styles/style.sass";
import MainScreen from "../components/Pages/Home/MainScreen";
import CategorySlider from "../components/Pages/Home/HomeSlider/CategorySlider";
import HomeAbout from "../components/Pages/Home/HomeAbout/HomeAbout";
import PartnersSlider from "../components/Pages/Home/HomePartners/PartnersSlider";
import FooterForm from "../components/Pages/Ui/FooterForm/FooterForm";
import useLanguage from "../components/Hooks/useLanguage";

const IndexPage = ({ data }) => {
  const { t } = useTranslation();
  const langToggle = useLanguage;

  const dataHome = data.strapiHomePage;
  const dataSlider = data.allStrapiCategorie;

  return (
    <Layout>
      <SEO
        title={t("Home")}
        description={langToggle(
          dataHome.seo_description_en,
          dataHome.seo_description_bg,
          dataHome.seo_description_ge,
          dataHome.seo_description_it
        )}
        keywords={langToggle(
          dataHome.seo_keywords_en,
          dataHome.seo_keywords_bg,
          dataHome.seo_keywords_ge,
          dataHome.seo_keywords_it
        )}
      />
      <MainScreen
        title={langToggle(
          dataHome.Titolo_en,
          dataHome.Titolo_bg,
          dataHome.Titolo_ge,
          dataHome.Titolo_it
        )}
        img={dataHome.Image}
      />
      <section className="home-products">
        <span className="text-decoration">
          <Trans>Products</Trans>
        </span>
        <div className="container-fluid">
          <CategorySlider dataSlider={dataSlider} />
        </div>
      </section>
      <HomeAbout dataHomeAbout={data.strapiVantaggi} />
      <PartnersSlider />
      <FooterForm />
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query HomePage {
    strapiHomePage {
      Titolo_en
      Titolo_bg
      Titolo_ge
      Titolo_it
      seo_description_en
      seo_description_bg
      seo_description_ge
      seo_description_it
      seo_keywords_en
      seo_keywords_bg
      seo_keywords_ge
      seo_keywords_it
      Image {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
    allStrapiCategorie {
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
    strapiVantaggi {
      Image {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      Vantaggi {
        Titolo_en
        Titolo_bg
        Titolo_ge
        Titolo_it
      }
    }
  }
`;
