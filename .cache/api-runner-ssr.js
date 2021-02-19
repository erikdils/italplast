var plugins = [{
      plugin: require('/Users/erik/Desktop/GatsbyProject/in progress/ItalPlastMaster/app/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/erik/Desktop/GatsbyProject/in progress/ItalPlastMaster/app/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[],"displayName":true,"fileName":true,"minify":true,"transpileTemplateLiterals":true,"pure":false},
    },{
      plugin: require('/Users/erik/Desktop/GatsbyProject/in progress/ItalPlastMaster/app/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"gatsby-starter-default","short_name":"starter","start_url":"/","background_color":"#663399","theme_color":"#663399","display":"minimal-ui","icon":"src/images/gatsby-icon.png","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"4a9773549091c227cd2eb82ccd9c5e3a"},
    },{
      plugin: require('/Users/erik/Desktop/GatsbyProject/in progress/ItalPlastMaster/app/node_modules/gatsby-plugin-react-i18next/gatsby-ssr'),
      options: {"plugins":[],"languages":["en","bg","de","it"],"defaultLanguage":"en","path":"/Users/erik/Desktop/GatsbyProject/in progress/ItalPlastMaster/app/locales","siteUrl":"https://kind-lichterman-5edcb4.netlify.app","i18nextOptions":{"debug":true,"lowerCaseLng":true,"saveMissing":false,"interpolation":{"escapeValue":false},"keySeparator":false,"nsSeparator":false},"pages":[{"matchPath":"/ignored-page","languages":["en"]}]},
    },{
      plugin: require('/Users/erik/Desktop/GatsbyProject/in progress/ItalPlastMaster/app/node_modules/gatsby-plugin-sitemap/gatsby-ssr'),
      options: {"plugins":[],"exclude":["/**/404","/**/404.html"],"query":"\n          {\n            site {\n              siteMetadata {\n                siteUrl\n              }\n            }\n            allSitePage(filter: {context: {i18n: {routed: {eq: false}}}}) {\n              edges {\n                node {\n                  context {\n                    i18n {\n                      defaultLanguage\n                      languages\n                      originalPath\n                    }\n                  }\n                  path\n                }\n              }\n            }\n          }\n        "},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
