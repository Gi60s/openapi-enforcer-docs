const { description } = require('../../package.json')
const common = require('../../../common')

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
      // {
      //   text: 'v1.x',
      //   items: common.versions
      // },
      common.ecosystem
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'enforcer-exception',
            'exceptions',
            'enforcer-result',
            'component-plugins'
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
        },
        'enforcer-exception',
        'enforcer-result'
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
    },
    // '@vuepress/plugin-google-analytics',
    // {
    //   ga: 'G-T5V8DJQT41'
    // }
  ]
}
