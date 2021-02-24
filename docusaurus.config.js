const fs = require('fs');
// const spec = fs.readFileSync('./petstore.yaml', 'utf-8');
const path = require('path');
const https = require('https');
const spec = JSON.parse(downloadFileSync('https://api.trackmage.com/docs.json'));
    // fs.readFileSync('https://api.trackmage.com/docs.json', 'utf-8');

function downloadFileSync(url) {
  return require('child_process')
      .execFileSync('curl', ['--silent', '-L', url]); // remove options {encoding: 'utf8'}
}

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
          to: 'api-reference',
          label: 'API Reference',
          position: 'left'
        },
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
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
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
    apiSpec: spec
  },
  plugins: [path.resolve(__dirname, 'redoc-plugin')],
};
