const { description } = require('../../package.json')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'OpenAPI Enforcer',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#1D3949' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'API',
        link: '/api/'
      },
      {
        text: 'v1.x',
        items: [
          { text: 'v1.x', link: 'https://openapi-enforcer.com' },
          { text: 'v2.x', link: 'https://openapi-enforcer.com' }
        ]
      },
      {
        text: 'Ecosystem',
        items: [
          { text: 'AWS Lambda', link: 'https://aws-lambda.openapi-enforcer.com' },
          { text: 'Express Middleware', link: 'https://middleware.openapi-enforcer.com' },
        ]
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            ''
          ]
        }
      ],
      '/api/': [
        '',
        {
          title: 'Components',
          collapsable: false,
          children: [
            'components/openapi',
            'components/operation',
            'components/schema',
            'components/swagger'
          ]
        }
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    'code-switcher',
    {
      groups: {
        default: { ts: 'TypeScript', js: 'JavaScript' }
      }
    }
  ]
}
