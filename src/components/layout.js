import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Footer from "./Footer/Footer";
import Header from "./Header/header";

const Layout = ({ children, dataCategory }) => {
  return (
    <StaticQuery
      query={graphql`
        query NavQuery {
          allStrapiCategorie {
            edges {
              node {
                id
                strapiId
                titolo_en
                titolo_bg
                titolo_ge
                titolo_it
                slug
                sub_categories {
                  Titolo_en
                  Titolo_bg
                  Titolo_ge
                  Titolo_it
                  slug
                }
              }
            }
          }
        }
      `}
      render={data => (
        <>
          <Header dataCategory={data.allStrapiCategorie.edges} />
          <div>
            <main>{children}</main>
          </div>
          <Footer footerCategory={data.allStrapiCategorie.edges} />
        </>
      )}
    />
  );
};

export default Layout;
