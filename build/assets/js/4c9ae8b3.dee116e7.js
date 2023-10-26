"use strict";(self.webpackChunkdocusaurus_public_api=self.webpackChunkdocusaurus_public_api||[]).push([[5994],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>k});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},c="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),c=p(n),m=r,k=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(k,l(l({ref:e},d),{},{components:n})):a.createElement(k,l({ref:e},d))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[c]="string"==typeof t?t:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6640:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:41,title:"Descripci\xf3n web",description:"Listar informaci\xf3n de productos ecommerce",slug:"/descripcion-web"},l="Descripci\xf3n web",o={unversionedId:"Tienda en l\xednea/Descripcion web",id:"version-PE/Tienda en l\xednea/Descripcion web",title:"Descripci\xf3n web",description:"Listar informaci\xf3n de productos ecommerce",source:"@site/versioned_docs/version-PE/Tienda en l\xednea/Descripcion web.md",sourceDirName:"Tienda en l\xednea",slug:"/descripcion-web",permalink:"/docusaurus-public-api/PE/descripcion-web",draft:!1,tags:[],version:"PE",sidebarPosition:41,frontMatter:{sidebar_position:41,title:"Descripci\xf3n web",description:"Listar informaci\xf3n de productos ecommerce",slug:"/descripcion-web"},sidebar:"tutorialSidebar",previous:{title:"Pedidos web",permalink:"/docusaurus-public-api/PE/pedidos-web"},next:{title:"Env\xedos",permalink:"/docusaurus-public-api/PE/env\xedos"}},s={},p=[{value:"Atributos",id:"atributos",level:4},{value:"GET descripciones web",id:"get-descripciones-web",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:4},{value:"Ejemplos",id:"ejemplos",level:4},{value:"GET Colecciones",id:"get-colecciones",level:2},{value:"Par\xe1metros",id:"par\xe1metros-1",level:4},{value:"Ejemplos",id:"ejemplos-1",level:4},{value:"GET una colecci\xf3n",id:"get-una-colecci\xf3n",level:3},{value:"Ejemplos",id:"ejemplos-2",level:5},{value:"GET im\xe1genes de productos web",id:"get-im\xe1genes-de-productos-web",level:2},{value:"Par\xe1metros",id:"par\xe1metros-2",level:4},{value:"GET un producto web",id:"get-un-producto-web",level:2}],d={toc:p},c="wrapper";function u(t){let{components:e,...n}=t;return(0,r.kt)(c,(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"descripci\xf3n-web"},"Descripci\xf3n web"),(0,r.kt)("p",null,"Listar productos y servicios que se contengan en la tienda en l\xednea de Bsale. Para ello debes conocer el ID del Martket. Este dato puedes obtenerlo con el Endpoint\n",(0,r.kt)("a",{parentName:"p",href:"https://credential.bsale.io/v1/instances/basic/:access_token.json"},"https://credential.bsale.io/v1/instances/basic/:access_token.json")," sustituyendo el :access_token por el tuyo."),(0,r.kt)("h4",{id:"atributos"},"Atributos"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Atributo"),(0,r.kt)("th",{parentName:"tr",align:null},"Descripci\xf3n"),(0,r.kt)("th",{parentName:"tr",align:null},"Tipo dato"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:null},"id del producto web"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"productId")),(0,r.kt)("td",{parentName:"tr",align:null},"Id del producto"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"idVariantDefault")),(0,r.kt)("td",{parentName:"tr",align:null},"Id variante por defecto del producto"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"urlSlug")),(0,r.kt)("td",{parentName:"tr",align:null},"URL slug del producto"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:null},"Nombre del producto web"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"description")),(0,r.kt)("td",{parentName:"tr",align:null},"descripci\xf3n del producto"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"descriptions")),(0,r.kt)("td",{parentName:"tr",align:null},"Nodo que indica las descripciones del producto"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"displayNotice")),(0,r.kt)("td",{parentName:"tr",align:null},"Texto adicional del producto"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"state")),(0,r.kt)("td",{parentName:"tr",align:null},"estado del producto activo(0) o inactivo (1)"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"mkProductType")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Integer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"productType")),(0,r.kt)("td",{parentName:"tr",align:null},"Nodo que indica el tipo de producto"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"productTaxes")),(0,r.kt)("td",{parentName:"tr",align:null},"Nodo que indica el/los impuesto del producto"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"urlImg")),(0,r.kt)("td",{parentName:"tr",align:null},"URL imagen producto (asociado a la variante por defecto)"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"pictures")),(0,r.kt)("td",{parentName:"tr",align:null},"Nodo que indica las im\xe1genes asociados al producto web"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"urlVideo")),(0,r.kt)("td",{parentName:"tr",align:null},"Url video del producto web"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"shippingUnit")),(0,r.kt)("td",{parentName:"tr",align:null},"Unidad"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"width")),(0,r.kt)("td",{parentName:"tr",align:null},"Peso del producto web"),(0,r.kt)("td",{parentName:"tr",align:null},"Float")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"depth")),(0,r.kt)("td",{parentName:"tr",align:null},"Profundidad el producto web"),(0,r.kt)("td",{parentName:"tr",align:null},"Float")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"lenght")),(0,r.kt)("td",{parentName:"tr",align:null},"Largo del producto web"),(0,r.kt)("td",{parentName:"tr",align:null},"Float")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"baseInfo")),(0,r.kt)("td",{parentName:"tr",align:null},"Nodo que entrega informaci\xf3n del producto"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"variant")),(0,r.kt)("td",{parentName:"tr",align:null},"Nodo que entrega informaci\xf3n de la variante del producto"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"discounts")),(0,r.kt)("td",{parentName:"tr",align:null},"Nodo que indica los descuentos asociados"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"stocks")),(0,r.kt)("td",{parentName:"tr",align:null},"Nodo que indica el stock del producto web"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"order")),(0,r.kt)("td",{parentName:"tr",align:null},"Posici\xf3n del producto web"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"totalStock")),(0,r.kt)("td",{parentName:"tr",align:null},"Stock total del producto web"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"collections")),(0,r.kt)("td",{parentName:"tr",align:null},"Nodo que indica las colecciones asociadas al producto web"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"get-descripciones-web"},"GET descripciones web"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GET ",(0,r.kt)("inlineCode",{parentName:"li"}," /v1/markets/:idMarket/products/market_info.json")," retornar\xe1 las descripciones de productos publicados en el ecommerce")),(0,r.kt)("h4",{id:"par\xe1metros"},"Par\xe1metros"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"limit"),", limita la cantidad de items de una respuesta JSON, por defecto el limit es 25, el m\xe1ximo permitido es 50."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"offset"),", permite paginar los items de una respuesta JSON, por defecto el offset es 0."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"limit"),", limita la cantidad de items de una respuesta JSON, por defecto el limit es 25, el m\xe1ximo permitido es 50."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"offset"),", permite paginar los items de una respuesta JSON, por defecto el offset es 0."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"collId"),", permite filtar por coleccion id."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"accessorieId"),", Permite filtrar por id de accesorio relacionado al producto"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"productWfId"),", permite filtrar por producto web id."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"productId"),", permite filtrar por producto id."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"brand"),", permite filtrar por marca id."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"brand_static"),", permite filtrar por nombre de marca."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"with_stock"),", Filtra y devuelve los productos que s\xf3lo tienen stock en la sucursal asociada al market"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"minPrice"),", permite filtrar por el minimo de precio"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"maxPrice"),", permite filtrar por el maximo de precio"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"expand"),", indicar opcional para expandir nodos (String)")),(0,r.kt)("h4",{id:"ejemplos"},"Ejemplos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GET /v1/markets/:idMarket/products/market_info.json?limit=10&offset=0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GET /v1/markets/:idMarket/products/market_info.json?collId=22")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GET /v2/markets/:idMarket/products/market_info.json?minPrice=22000&maxPrice=230000"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response /v1/markets/1/products/market_info.json"',title:'"Response','/v1/markets/1/products/market_info.json"':!0},'{\n  "code": "200",\n  "href": "https://api.bsale.io?&productId=2701&mkId=2&priceList=4",\n  "count": 1,\n  "limit": 25,\n  "offset": 0,\n  "data": [\n    {\n      "id": 1010,\n      "productId": 2701,\n      "idVariantDefault": 10647,\n      "urlSlug": "gorro-wonderwink-400a-negro",\n      "name": "Gorro Wonderwink 400A Negro",\n      "description": "<p>65% Poli&eacute;ster 35% Algod&oacute;n</p><ul><li>Unisex fit.</li><li>Cinta trasera ajustable.</li><li>Banda el&aacute;stica cubierta.</li><li>Banda de pa&ntilde;o para el sudor 100% Algod&oacute;n</li></ul>",\n      "descriptions": {\n        "href": "https://api.bsale.io/v2/products/market_info/1010.json?expand=[descriptions]"\n      },\n      "displayNotice": "",\n      "state": 1,\n      "mkProductType": "normal",\n      "productType": {\n        "id": 2,\n        "href": "https://api.bsale.io/v2/product_types/2.json"\n      },\n      "productTaxes": {\n        "href": "https://api.bsale.io/v2/products/2701/product_taxes.json"\n      },\n      "urlImg": "https://dojiw2m9tvv09.cloudfront.net/2414/product/400_blac_011246.jpg",\n      "pictures": {\n        "href": "https://api.bsale.io/v2/products/market_info/1010/pictures.json"\n      },\n      "urlVideo": null,\n      "shippingUnit": null,\n      "width": null,\n      "depth": null,\n      "length": null,\n      "baseInfo": {\n        "id": 2701,\n        "name": "GORRO WW 400A BLACK",\n        "classification": 0,\n        "stockControl": 0,\n        "href": "https://api.bsale.io/v2/products/2701.json"\n      },\n      "variant": {\n        "id": 10647,\n        "price": 5462.18487394958,\n        "description": "OS",\n        "finalPrice": 6500,\n        "fpWithoutDiscount": 6500,\n        "taxPrice": 1038,\n        "taxDiscountPrice": 1038,\n        "netDiscountPrice": 5462,\n        "unlimitedStock": 0,\n        "allowDecimal": 0,\n        "allowNegativeStock": 0,\n        "code": "1530725900298",\n        "discount": {\n          "percent": 0,\n          "minimumQuantity": 0\n        }\n      },\n      "variants": {\n        "href": "https://api.bsale.io/v2/products/market_info/1010/variants.json"\n      },\n      "discounts": null,\n      "stocks": {\n        "href": "https://api.bsale.io/v2/stocks.json?product=2701"\n      },\n      "order": 1,\n      "totalStock": 0,\n      "collections": {\n        "href": "https://api.bsale.io/v2/products/2701/collections.json"\n      }\n    }\n  ]\n}\n')),(0,r.kt)("h2",{id:"get-colecciones"},"GET Colecciones"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GET ",(0,r.kt)("inlineCode",{parentName:"li"},"/v1/markets/collections/list.json")," retornar\xe1 colecciones creadas")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Las colecciones son un conjunto de productos web asociados por un criterio basado en el cliente.")),(0,r.kt)("h4",{id:"par\xe1metros-1"},"Par\xe1metros"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"limit")," limita la cantidad de items de una respuesta JSON, por defecto el limit es 25, el m\xe1ximo permitido es 50."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"offset")," permite paginar los items de una respuesta JSON, por defecto el offset es 0."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"state")," Permite filtrar s\xf3lo colecciones activas."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"integration")," Permite obtener  las colecciones asociadla a una integraci\xf3n")),(0,r.kt)("h4",{id:"ejemplos-1"},"Ejemplos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GET /v1/markets/collections/list.json?state=1"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response /markets/1/collections.json"',title:'"Response','/markets/1/collections.json"':!0},'{\n  "code": "200",\n  "href": "https://api.bsale.io/v2/markets/1/collections.json",\n  "count": 40,\n  "limit": 25,\n  "offset": 0,\n  "data": [\n    {\n      "id": 18,\n      "name": "Accesorios de limpieza",\n      "urlSlug": "accesorios-de-limpieza",\n      "state": 1,\n      "lyId": null,\n      "mkId": 1,\n      "tdId": 26,\n      "integration": null\n    },\n    {\n      "id": 11,\n      "name": "Accesorios y repuestos para mamaderas",\n      "urlSlug": "accesorios-y-repuestos-para-mamaderas",\n      "state": 1,\n      "lyId": null,\n      "mkId": 1,\n      "tdId": 19,\n      "integration": null\n    }\n  ],\n  "next": "https://api.bsale.io/v2/markets/1/collections.json?limit=25&offset=25"\n}\n')),(0,r.kt)("h3",{id:"get-una-colecci\xf3n"},"GET una colecci\xf3n"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GET ",(0,r.kt)("inlineCode",{parentName:"li"},"/v1/markets/:idMarket/products/market_info.json?collId=:id")," Retornar\xe1 las colecciones de productos asociados al market.")),(0,r.kt)("h5",{id:"ejemplos-2"},"Ejemplos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GET /v1/markets/1/products/market_info.json?collId=23"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "code": "200",\n    "href": "https://api.bsale.io//v2/markets/1/products/market_info.json?&collId=2894&mkId=1&priceList=5",\n    "count": 1,\n    "limit": 25,\n    "offset": 0,\n    "data": [\n        {\n            "id": 342,\n            "productId": 145,\n            "idVariantDefault": 253,\n            "urlSlug": "bicicleta-mtb-limited-talla-l",\n            "name": "Bicicleta MTB Limited Talla L",\n            "description": "<p>Bicicleta MTB Limited Talla L Aro 29\\"<br>Bicicleta Mountain Bike Modelo Limited de marco Talla L con Aro 29\\", marca Ram.</p>",\n            "descriptions": {\n                "href": "https://api.bsale.io/v2/products/market_info/342.json?expand=[descriptions]"\n            },\n            "displayNotice": "",\n            "state": 1,\n            "mkProductType": "normal",\n            "productType": {\n                "id": 5,\n                "href": "https://api.bsale.io/v2/product_types/5.json"\n            },\n            "productTaxes": {\n                "href": "https://api.bsale.io/v2/products/145/product_taxes.json"\n            },\n            "urlImg": "https://dojiw2m9tvv09.cloudfront.net/69237/product/tallal7785.jpg",\n            "pictures": {\n                "href": "https://api.bsale.io/v2/products/market_info/342/pictures.json"\n            },\n            "urlVideo": null,\n            "shippingUnit": null,\n            "width": null,\n            "depth": null,\n            "length": null,\n            "baseInfo": {\n                "id": 145,\n                "name": "Bicicleta Hombre",\n                "classification": 0,\n                "stockControl": 0,\n                "href": "https://api.bsale.io/v2/products/145.json"\n            },\n            "variant": {\n                "id": 253,\n                "price": 243697.478991597,\n                "description": "L",\n                "finalPrice": 290000,\n                "fpWithoutDiscount": 290000,\n                "taxPrice": 46302.52,\n                "taxDiscountPrice": 46302.52,\n                "netDiscountPrice": 243697.48,\n                "unlimitedStock": 0,\n                "allowDecimal": 0,\n                "allowNegativeStock": 0,\n                "code": "1654607597922",\n                "discount": {\n                    "percent": 0,\n                    "minimumQuantity": 0\n                }\n            },\n            "variants": {\n                "href": "https://api.bsale.io/v2/products/market_info/342/variants.json"\n            },\n            "discounts": null,\n            "stocks": {\n                "href": "https://api.bsale.io/v2/stocks.json?product=145"\n            },\n            "integration": {\n                "order_by": 4\n            },\n            "order": 1,\n            "totalStock": 160,\n            "collections": {\n                "href": "https://api.bsale.io/v2/products/145/collections.json"\n            }\n        }\n    ]\n}\n')),(0,r.kt)("h2",{id:"get-im\xe1genes-de-productos-web"},"GET im\xe1genes de productos web"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GET ",(0,r.kt)("inlineCode",{parentName:"li"},"/v2/products/market_info/23/pictures.json")," Retornar\xe1 las imagenes del producto web.")),(0,r.kt)("h4",{id:"par\xe1metros-2"},"Par\xe1metros"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"limit")," limita la cantidad de items de una respuesta JSON, por defecto el limit es 25, el m\xe1ximo permitido es 50."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"offset")," permite paginar los items de una respuesta JSON, por defecto el offset es 0."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"productId")," id del producto (int)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"expand")," indicar opcional para expandir nodos (String)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 200,\n  "href": "https://api.bsale.io?&id=23",\n  "count": 3,\n  "limit": 0,\n  "offset": 25,\n  "data": [\n    {\n      "id": 46,\n      "href": "https://dojiw2m9tvv09.cloudfront.net/2414/product/601_red_sil_fv3665.jpg",\n      "state": 1,\n      "legendImage": " "\n    },\n    {\n      "id": 47,\n      "href": "https://dojiw2m9tvv09.cloudfront.net/2414/product/601_sk_5x7_hr3666.jpg",\n      "state": 1,\n      "legendImage": " "\n    },\n    {\n      "id": 1347,\n      "href": "https://dojiw2m9tvv09.cloudfront.net/2414/product/601_red_part_fv_m6145.jpg",\n      "state": 1,\n      "legendImage": " "\n    }\n  ],\n  "previous": "https://api.bsale.io?limit=0&offset=-25&id=23"\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"id")," id de la imagen asociado al producto web (Integer)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"href"),"  URL de imagen (String)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"state")," estado de la imagen del producto web,  activo(1) o inactivo (0) (Boolean)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"legendImage")," Descripci\xf3n de imagen (String)")),(0,r.kt)("h2",{id:"get-un-producto-web"},"GET un producto web"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GET ",(0,r.kt)("inlineCode",{parentName:"li"}," /v2/products/market_info/23.json")," Retornar\xe1 informaci\xf3n asociada a un producto espec\xedfico")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 200,\n  "data": {\n    "id": 39,\n    "productId": 40,\n    "classification": 0,\n    "idVariantDefault": 44,\n    "urlSlug": "coca-cola-zero-desechable",\n    "name": "COCA COLA ZERO DESECHABLE",\n    "description": "",\n    "descriptions": {\n      "href": "https://api.bsale.io/v2/products/market_info/39.json?expand=[descriptions]"\n    },\n    "displayNotice": "",\n    "state": 1,\n    "mkProductType": "normal",\n    "productType": {\n      "id": 5,\n      "href": "https://api.bsale.io/v2/product_types/5.json"\n    },\n    "productTaxes": {\n      "href": "https://api.bsale.io/v2/products/40/product_taxes.json"\n    },\n    "urlImg": "https://dojiw2m9tvv09.cloudfront.net/11132/product/cocazero9766.jpg",\n    "pictures": [\n      {\n        "id": 39,\n        "href": "https://dojiw2m9tvv09.cloudfront.net/11132/product/cocazero9766.jpg",\n        "state": 1,\n        "legendImage": " "\n      }\n    ],\n    "urlVideo": null,\n    "shippingUnit": null,\n    "width": 0,\n    "depth": 0,\n    "length": 0,\n    "baseInfo": {\n      "id": 40,\n      "prestashopProductId": 0,\n      "prestashopAttributeId": 0,\n      "name": "COCA COLA ZERO DESECHABLE",\n      "description": null,\n      "classification": 0,\n      "basePrice": 0.840336134453782,\n      "state": 0,\n      "ledgerAccount": "",\n      "costCenter": "",\n      "allowDecimal": 0,\n      "stockControl": 1,\n      "printDetailPack": 0,\n      "href": "https://api.bsale.io/v2/products/40.json"\n    },\n    "variants": [\n      {\n        "id": 44,\n        "productId": 40,\n        "description": "1500 CC",\n        "unlimitedStock": 0,\n        "allowNegativeStock": 0,\n        "showInEcommerce": 1,\n        "state": 0,\n        "barCode": "123456825",\n        "code": "123456825",\n        "imagestionCenterCost": 0,\n        "imagestionAccount": 0,\n        "imagestionConceptCod": 0,\n        "imagestionProyectCod": 0,\n        "imagestionCategoryCod": 0,\n        "imagestionProductId": 0,\n        "serialNumber": 0,\n        "prestashopCombinationId": 0,\n        "prestashopValueId": 0,\n        "prestashopSync": 0,\n        "booticValueId": 0,\n        "booticSync": 0,\n        "attributeValues": [\n          {\n            "id": 29,\n            "name": "Marca",\n            "value": "COCA COLA",\n            "required": 0,\n            "integration": null\n          }\n        ],\n        "prices": [],\n        "salePrices": [],\n        "discounts": [],\n        "stockInfo": {\n          "href": "https://api.bsale.io/v2/stocks.json?variant=44"\n        },\n        "shipping": {\n          "href": "https://api.bsale.io/v2/products/market_info/39.json?expand=[shipping]"\n        },\n        "marketDescription": null,\n        "pictures": null,\n        "integration": {\n          "meli": "33501327162"\n        },\n        "href": "https://api.bsale.io/v2/variants/44.json"\n      }\n    ],\n    "relatedVariants": [\n      {\n        "id": 44,\n        "href": "https://api.bsale.io/v2/variants/44.json"\n      }\n    ],\n    "collections": [\n      {\n        "id": 5,\n        "name": "BEBIDAS",\n        "urlSlug": "bebidas",\n        "state": 1,\n        "description": null,\n        "image": null,\n        "lyId": null,\n        "mkId": 1,\n        "tdId": null,\n        "integration": null,\n        "href": "https://api.bsale.io/v2/collections/5.json"\n      },\n      {\n        "id": 25,\n        "name": "WISEPI",\n        "urlSlug": "wisepi",\n        "state": 0,\n        "description": null,\n        "image": null,\n        "lyId": null,\n        "mkId": 1,\n        "tdId": null,\n        "integration": null,\n        "href": "https://api.bsale.io/v2/collections/25.json"\n      },\n      {\n        "id": 181,\n        "name": "General",\n        "urlSlug": "general",\n        "state": 1,\n        "description": null,\n        "image": null,\n        "lyId": null,\n        "mkId": 2,\n        "tdId": null,\n        "integration": null,\n        "href": "https://api.bsale.io/v2/collections/181.json"\n      },\n      {\n        "id": 183,\n        "name": "ABIOTICA",\n        "urlSlug": "abiotica",\n        "state": 1,\n        "description": null,\n        "image": null,\n        "lyId": null,\n        "mkId": 1,\n        "tdId": null,\n        "integration": null,\n        "href": "https://api.bsale.io/v2/collections/183.json"\n      }\n    ],\n    "discounts": [],\n    "stocks": {\n      "href": "https://api.bsale.io/v2/stocks.json?product=40"\n    },\n    "integration": {\n      "meli-281088268": "MLC479123576"\n    },\n    "brand": {\n      "id": 5,\n      "name": ""\n    }\n  }\n}\n')))}u.isMDXComponent=!0}}]);