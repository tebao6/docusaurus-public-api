/*
 * AUTOGENERATED - DON'T EDIT
 * Your edits in this file will be overwritten in the next build!
 * Modify the docusaurus.config.js file at your site's root instead.
 */
export default {
  "title": "Documentación API Bsale",
  "tagline": "Conoce nuestras documentaciones para el desarrollo de integraciones.",
  "url": "https://EstebanBah.github.io",
  "baseUrl": "/docusaurus-public-api/",
  "onBrokenLinks": "ignore",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.ico",
  "organizationName": "EstebanBah",
  "projectName": "docusaurus-public-api",
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "path": "i18n",
    "localeConfigs": {}
  },
  "presets": [
    [
      "classic",
      {
        "docs": {
          "sidebarPath": "C:\\Users\\ebaha\\docusaurus-public-api\\sidebars.js",
          "routeBasePath": "/",
          "includeCurrentVersion": false,
          "versions": {
            "CL": {
              "banner": "none",
              "label": "🌎 CL",
              "badge": true,
              "path": "/CL"
            },
            "PE": {
              "banner": "none",
              "label": "🌎 PE"
            },
            "MX": {
              "label": "🌎 MX",
              "banner": "unmaintained"
            }
          }
        },
        "blog": {
          "showReadingTime": false
        },
        "theme": {
          "customCss": "C:\\Users\\ebaha\\docusaurus-public-api\\src\\css\\custom.css"
        }
      }
    ]
  ],
  "themeConfig": {
    "navbar": {
      "title": "Inicio",
      "logo": {
        "alt": "logo",
        "src": "img/logo.svg"
      },
      "items": [
        {
          "to": "/primeros-pasos",
          "position": "left",
          "label": "Primeros Pasos"
        },
        {
          "to": "/oauth",
          "position": "left",
          "label": "OAuth"
        },
        {
          "to": "/faq",
          "position": "left",
          "label": "faq"
        },
        {
<<<<<<< Updated upstream
          "to": "/changelog",
          "position": "right",
          "label": "Changelog"
        },
        {
=======
>>>>>>> Stashed changes
          "type": "docsVersionDropdown",
          "position": "right",
          "dropdownItemsBefore": [],
          "dropdownItemsAfter": []
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Primeros pasos",
              "to": "/CL/primeros-pasos"
            },
            {
              "label": "Casos de uso",
              "to": "/blog"
            }
          ]
        },
        {
          "title": "Enlaces",
          "items": [
            {
              "label": "Sitio web Bsale Developers",
              "href": "https://www.bsale.dev"
            },
            {
              "label": "Canal Slack",
              "href": "https://join.slack.com/t/bsaledev/shared_invite/zt-1h1cqt05g-fqnTiREZYN8g47gf~caO5w"
            },
            {
              "label": "Formulario contacto",
              "href": "https://bsalehelp.zendesk.com/hc/es/requests/new"
            }
          ]
        },
        {
          "title": "Más",
          "items": [
            {
              "label": "Bsale 🇨🇱",
              "href": "https://www.bsale.cl"
            },
            {
              "label": "Bsale 🇵🇪",
              "href": "https://www.bsale.com.pe"
            },
            {
              "label": "Bsale 🇲🇽",
              "href": "https://www.bsale.com.mx"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2023 Documentation API Bsale. Built with Docusaurus.🦖"
    },
    "prism": {
      "theme": {
        "plain": {
          "color": "#393A34",
          "backgroundColor": "#f6f8fa"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "doctype",
              "cdata"
            ],
            "style": {
              "color": "#999988",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          },
          {
            "types": [
              "string",
              "attr-value"
            ],
            "style": {
              "color": "#e3116c"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "#393A34"
            }
          },
          {
            "types": [
              "entity",
              "url",
              "symbol",
              "number",
              "boolean",
              "variable",
              "constant",
              "property",
              "regex",
              "inserted"
            ],
            "style": {
              "color": "#36acaa"
            }
          },
          {
            "types": [
              "atrule",
              "keyword",
              "attr-name",
              "selector"
            ],
            "style": {
              "color": "#00a4db"
            }
          },
          {
            "types": [
              "function",
              "deleted",
              "tag"
            ],
            "style": {
              "color": "#d73a49"
            }
          },
          {
            "types": [
              "function-variable"
            ],
            "style": {
              "color": "#6f42c1"
            }
          },
          {
            "types": [
              "tag",
              "selector",
              "keyword"
            ],
            "style": {
              "color": "#00009f"
            }
          }
        ]
      },
      "darkTheme": {
        "plain": {
          "color": "#F8F8F2",
          "backgroundColor": "#282A36"
        },
        "styles": [
          {
            "types": [
              "prolog",
              "constant",
              "builtin"
            ],
            "style": {
              "color": "rgb(189, 147, 249)"
            }
          },
          {
            "types": [
              "inserted",
              "function"
            ],
            "style": {
              "color": "rgb(80, 250, 123)"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 85)"
            }
          },
          {
            "types": [
              "changed"
            ],
            "style": {
              "color": "rgb(255, 184, 108)"
            }
          },
          {
            "types": [
              "punctuation",
              "symbol"
            ],
            "style": {
              "color": "rgb(248, 248, 242)"
            }
          },
          {
            "types": [
              "string",
              "char",
              "tag",
              "selector"
            ],
            "style": {
              "color": "rgb(255, 121, 198)"
            }
          },
          {
            "types": [
              "keyword",
              "variable"
            ],
            "style": {
              "color": "rgb(189, 147, 249)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(98, 114, 164)"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "rgb(241, 250, 140)"
            }
          }
        ]
      },
      "additionalLanguages": [],
      "magicComments": [
        {
          "className": "theme-code-block-highlighted-line",
          "line": "highlight-next-line",
          "block": {
            "start": "highlight-start",
            "end": "highlight-end"
          }
        }
      ]
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false
    },
    "docs": {
      "versionPersistence": "localStorage",
      "sidebar": {
        "hideable": false,
        "autoCollapseCategories": false
      }
    },
    "metadata": [],
    "tableOfContents": {
      "minHeadingLevel": 2,
      "maxHeadingLevel": 3
    }
  },
  "plugins": [
    "C:\\Users\\ebaha\\docusaurus-public-api\\node_modules\\@cmfcmf\\docusaurus-search-local\\lib\\server\\index.js"
  ],
  "baseUrlIssueBanner": true,
  "onDuplicateRoutes": "warn",
  "staticDirectories": [
    "static"
  ],
  "customFields": {},
  "themes": [],
  "scripts": [],
  "headTags": [],
  "stylesheets": [],
  "clientModules": [],
  "titleDelimiter": "|",
  "noIndex": false,
  "markdown": {
    "mermaid": false
  }
};
