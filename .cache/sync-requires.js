const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/erik/Desktop/GatsbyProject/in progress/ItalPlastMaster/app/src/pages/404.js"))),
  "component---src-pages-cases-js": hot(preferDefault(require("/Users/erik/Desktop/GatsbyProject/in progress/ItalPlastMaster/app/src/pages/cases.js"))),
  "component---src-pages-catalogsd-js": hot(preferDefault(require("/Users/erik/Desktop/GatsbyProject/in progress/ItalPlastMaster/app/src/pages/catalogsd.js"))),
  "component---src-pages-company-js": hot(preferDefault(require("/Users/erik/Desktop/GatsbyProject/in progress/ItalPlastMaster/app/src/pages/company.js"))),
  "component---src-pages-contacts-js": hot(preferDefault(require("/Users/erik/Desktop/GatsbyProject/in progress/ItalPlastMaster/app/src/pages/contacts.js"))),
  "component---src-pages-get-price-js": hot(preferDefault(require("/Users/erik/Desktop/GatsbyProject/in progress/ItalPlastMaster/app/src/pages/get-price.js"))),
  "component---src-pages-ignored-page-js": hot(preferDefault(require("/Users/erik/Desktop/GatsbyProject/in progress/ItalPlastMaster/app/src/pages/ignored-page.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/erik/Desktop/GatsbyProject/in progress/ItalPlastMaster/app/src/pages/index.js"))),
  "component---src-pages-search-js": hot(preferDefault(require("/Users/erik/Desktop/GatsbyProject/in progress/ItalPlastMaster/app/src/pages/search.js"))),
  "component---src-pages-work-with-us-js": hot(preferDefault(require("/Users/erik/Desktop/GatsbyProject/in progress/ItalPlastMaster/app/src/pages/work-with-us.js"))),
  "component---src-template-catalog-js": hot(preferDefault(require("/Users/erik/Desktop/GatsbyProject/in progress/ItalPlastMaster/app/src/template/catalog.js"))),
  "component---src-template-materials-js": hot(preferDefault(require("/Users/erik/Desktop/GatsbyProject/in progress/ItalPlastMaster/app/src/template/materials.js"))),
  "component---src-template-product-card-js": hot(preferDefault(require("/Users/erik/Desktop/GatsbyProject/in progress/ItalPlastMaster/app/src/template/product-card.js")))
}

