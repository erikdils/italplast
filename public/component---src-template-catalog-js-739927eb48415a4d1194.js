(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"3h+O":function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),r=function(e){var t=e.brands,a=e.activeFilter,n=e.toggleFilter,r=e.setItemState,s=e.dataItems;return console.log(t),console.log(s),l.a.createElement("div",{className:"filter-brands"},l.a.createElement("span",{className:"filter-brands__title"},"Brands"),l.a.createElement("ul",{className:"filter-brands__list"},l.a.createElement("li",{className:null===a?"filter-brands__item is-active":"filter-brands__item"},l.a.createElement("button",{onClick:function(){n(null),r(s)},className:"filter-button"},l.a.createElement("span",{className:"button-title"},"All Brands"))),t.map((function(e,t){return l.a.createElement("li",{key:e.node.title+"_"+t,className:a===t?"filter-brands__item is-active":"filter-brands__item"},l.a.createElement("button",{value:e.node.title,onClick:function(e){n(t),r(s.filter((function(t){return t.node.brand.title.indexOf(e.target.value)>-1})))},className:"filter-button"},e.node.title))}))))},s=a("WlC/"),c=a("e4VM"),i=function(e){return l.a.createElement("li",{className:"filter-materials__item"},l.a.createElement(s.Link,{to:Object(c.b)(e.slug),className:"filter-link"},l.a.createElement("span",{className:"link-title"},e.title)))},m=function(e){return l.a.createElement("div",{className:"filter-materials"},l.a.createElement("span",{className:"filter-materials__title"},l.a.createElement(s.Trans,null,"Material")),l.a.createElement("ul",{className:"filter-materials__list"},e.subCategory.map((function(e,t){return l.a.createElement(i,{key:t,title:e.node.Titolo_en,slug:e.node.slug})}))))},o=function(e){var t=Object(n.useState)(null),a=t[0],s=t[1];var c=["catalog-aside"];return e.activeFilter&&c.push("is-active"),l.a.createElement("div",{className:c.join(" ")},l.a.createElement(m,{dataItems:e.dataItems,subCategory:e.subCategory}),l.a.createElement(r,{setItemState:e.setItemState,brands:e.brands,activeFilter:a,setActiveFilter:s,toggleFilter:function(e){s(e)},dataItems:e.dataItems}))},u=a("9eSz"),d=a.n(u),E=function(e){return l.a.createElement(s.Link,{to:Object(c.c)(e.slug),className:"catalog-item"},l.a.createElement("div",{className:"link-background"}),l.a.createElement("div",{className:"img-wrapper"},l.a.createElement(d.a,{className:"catalog-img",fluid:e.img.childImageSharp.fluid})),l.a.createElement("span",{className:"catalog-item__title"},e.title))},f=a("3q/y"),g=function(e){var t=e.dataItems,a=e.activeFilter,n=e.filterToggle,r=f.a,c=["mobile-filter__button"];return a&&c.push("is-active"),l.a.createElement("div",{className:"catalog-items_wrapper"},l.a.createElement("header",{className:"catalog-header"},l.a.createElement("span",{className:"catalog-header__title"},l.a.createElement(s.Trans,null,"Products founds"),l.a.createElement("span",{className:"catalog-header__count"},t.length)),l.a.createElement("button",{className:c.join(" "),onClick:n},l.a.createElement("span",{className:"filter-button__title"},l.a.createElement(s.Trans,null,"Filters")),l.a.createElement("span",{className:"button-icon"},l.a.createElement("span",{className:"lines"},l.a.createElement("span",{className:"line line-1"}),l.a.createElement("span",{className:"line line-2"}),l.a.createElement("span",{className:"line line-3"}))))),l.a.createElement("div",{className:"catalog-items"},t.map((function(e,t){return l.a.createElement(E,{key:t,img:e.node.image,title:r(e.node.titolo_en,e.node.titolo_bg,e.node.titolo_ge,e.node.titolo_it),slug:e.node.slug})}))))};t.a=function(e){var t=Object(n.useState)(e.dataItems),a=t[0],r=t[1],s=Object(n.useState)(!1),c=s[0],i=s[1];return console.log(a),l.a.createElement("section",{className:"catalog"},l.a.createElement(o,{setItemState:r,activeFilter:c,dataItems:e.dataItems,subCategory:e.subCategory,brands:e.brands}),l.a.createElement(g,{dataItems:a,filterToggle:function(e){e.preventDefault(),i(!c)},activeFilter:c}))}},BVzm:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),r=a("WlC/");t.a=function(){var e=Object(n.useState)(""),t=e[0],a=e[1],s=Object(n.useState)(""),c=s[0],i=s[1],m=Object(n.useState)(!1),o=m[0],u=m[1];return l.a.createElement("section",{className:"footer-form__section"},l.a.createElement("div",{className:"form-container"},l.a.createElement("header",{className:"form-header"},l.a.createElement("span",{className:"form-title"},"Assumici adesso"),l.a.createElement("p",{className:"form-description"},"Completa i campi sottostanti e ti contatteremo a breve.")),l.a.createElement("div",{className:"footer-form"},l.a.createElement("label",null,l.a.createElement("span",null,l.a.createElement(r.Trans,null,"Name")," *"),l.a.createElement("input",{type:"text",value:t,onChange:function(e){return a(e.target.value)}})),l.a.createElement("label",null,l.a.createElement("span",null,"Tel./Cell. *"),l.a.createElement("input",{type:"tel",value:c,onChange:function(e){return i(e.target.value)},onKeyPress:function(e){var t=e||window.event,a=t.keyCode||t.which;a=String.fromCharCode(a);/^(\d)$/g.test(a)||(t.returnValue=!1,t.preventDefault&&t.preventDefault())}})),l.a.createElement("button",{onClick:function(){fetch("http://localhost:1111/footer_form",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:t,phone:c})}).then((function(e){e.json(),200===e.status?u(!0):u(!1)})),a(""),i("")},disabled:!t||!c,className:"submit-button"},l.a.createElement(r.Trans,null,"Send"))),o?l.a.createElement("div",{style:{color:"green",textAlign:"center",marginTop:"15px"}},l.a.createElement(r.Trans,null,"Thank you")):null))}},dv5s:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),r=a("WlC/"),s=function(e){return console.log(e),l.a.createElement("li",{className:"crumbs-nav__item"},l.a.createElement(r.Link,{to:e.path,className:"menu-item__link"},l.a.createElement(r.Trans,null,e.value)))};t.a=function(e){return l.a.createElement("ul",{className:"crumbs-nav"},e.crumbsLinks.map((function(e,t){return l.a.createElement(s,{key:t,path:e.path,value:e.value})})))}},mJAT:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),r=a("dv5s");t.a=function(e){return l.a.createElement("section",{className:"main-screen__second"},l.a.createElement("div",{className:"screen-content"},l.a.createElement("h1",{className:"h1"},e.headTitle),l.a.createElement(r.a,{crumbsLinks:e.crumbsLinks})))}},xbec:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return d}));var n=a("q1tI"),l=a.n(n),r=a("WlC/"),s=a("Bl7J"),c=a("vrFN"),i=a("BVzm"),m=a("mJAT"),o=a("3h+O"),u=a("3q/y"),d=(a("5jen"),"4235976541");t.default=function(e){var t=e.data,a=Object(r.useTranslation)().t,n=u.a,d=t.allStrapiBrand.edges,E=t.allStrapiSubCategories.edges,f=t.categorie,g=t.catalog.edges;return l.a.createElement(s.a,null,l.a.createElement(c.a,{title:a("Catalog")}),l.a.createElement(m.a,{crumbsLinks:[{id:"1",path:"/",value:"Home"},{id:"2",path:"/catalog/",value:"Catalog"}],headTitle:n(f.titolo_en,f.titolo_bg,f.titolo_ge,f.titolo_it)}),l.a.createElement(o.a,{dataItems:g,subCategory:E,brands:d}),l.a.createElement(i.a,null))}}}]);
//# sourceMappingURL=component---src-template-catalog-js-739927eb48415a4d1194.js.map