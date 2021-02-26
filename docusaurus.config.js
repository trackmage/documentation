const fs = require('fs');
const spec = fs.readFileSync('./src/swagger_docs.json', 'utf-8');

// function downloadFile(url) {
//   return require('child_process')
//       .execFileSync('curl', ['--silent', '-L', url], {encoding: 'utf8', maxBuffer: Infinity});
// }
// const content = downloadFile('https://api.trackmage.com/docs.json?spec_version=3');
const apiJson = JSON.parse(spec);//JSON.parse(content);
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
          title: 'Docs',
          items: [
            {
              label: 'Docs',
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
    openApiJSON: apiJson
  }
}
;
