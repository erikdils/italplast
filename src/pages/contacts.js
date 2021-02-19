import React from "react";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "../styles/style.sass";
import Contacts from "../components/Pages/Contacts/Contacts";
import MainScreenSecond from "../components/Pages/Ui/MainScreenSecond/MainScreenSecond";

const Contatti = () => {
  const { t } = useTranslation();
  const contacts = <Trans>Contacts</Trans>;
  const crumbsLinks = [
    { id: "1", path: "/", value: "Home" },
    { id: "2", path: "/contacts/", value: "Contacts" },
  ];

  const dataContacts = [
    {
      id: 0,
      title: "Amministrazione e produzione",
      contacts: [
        { id: 1, title: "Contacts:" },
        { id: 2, link: "tel:+359877666141", value: "+359-8-776-661-41" },
        { id: 3, title: "Address:" },
        { id: 4, address: "Bulgaria, Varna, Zona industriale occidentale" },
      ],
    },
    {
      id: 1,
      title: "Mondo serramenti",
      contacts: [
        { id: 1, title: "Contacts:" },
        { id: 2, link: "tel:+3485530217", value: "+348-553-02-17" },
        { id: 3, link: "tel:+3661061306", value: "+366-106-13-06" },
        { id: 4, title: "Email:" },
        {
          id: 5,
          link: "mailto:rehau.serramentu@gmail.com",
          value: "rehau.serramentu@gmail.com",
        },
        { id: 6, title: "Address:" },
        { id: 7, address: "Via Sant’Ampellio, 16, 20141 Milano, Ml" },
      ],
    },
  ];

  return (
    <Layout>
      <SEO title={t("Contatti")} />
      <MainScreenSecond crumbsLinks={crumbsLinks} headTitle={contacts} />
      <Contacts dataContacts={dataContacts} />
    </Layout>
  );
};

export default Contatti;
