const fs = require('fs');
const openApiJSON = JSON.parse(fs.readFileSync('./src/swagger_docs.json', 'utf-8'));
const carriersJSON = JSON.parse(fs.readFileSync('./src/carriers.json', 'utf-8'));

module.exports = {
  title: 'TrackMage Documentation',
  tagline: 'A tracking page for your store. Beautiful, branded, customizable',
  url: 'https://docs.trackmage.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'trackmage', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'TrackMage Documentation',
      logo: {
        alt: 'TrackMage Logo',
        src: 'img/logo.jpg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://api.trackmage.com/?ui=re_doc',
          label: 'Api Reference',
          position: 'left',
        },
        {
          href: 'https://api.trackmage.com/',
          label: 'Try API methods online',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          items: [
            {
              label: 'TrackMage',
              href: 'https://trackmage.com/',
            },
            {
              label: 'Users documentation',
              href: 'https://help.trackmage.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} OPTDEAL LIMITED, ALL RIGHTS RESERVED`,
    },
    matomo: {
      matomoUrl: 'https://vega.dev.trackmage.com/',
      siteId: '2',
      phpLoader: 'mm.php',
      jsLoader: 'mjs.php'
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  customFields: {
    openApiJSON,
    carriersJSON,
  },
  plugins: [
      'docusaurus-plugin-matomo'
  ]
};
