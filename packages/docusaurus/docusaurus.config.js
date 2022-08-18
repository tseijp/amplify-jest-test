// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '@amplify-jest-test/docusaurus',
  tagline: 'Docusaurus are cool',
  url: 'https://main.d3sui07a526fk3.amplifyapp.com/',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'tseijp', // Usually your GitHub org/user name.
  projectName: 'tseijp', // Usually your repo name.
  presets: [['classic', ({
    docs: {
      path: '../../packages/',
      routeBasePath: 'packages',
      include: ['a/readme/**/*.{md, mdx}', 'b/readme/**/*.{md, mdx}'],
    },
    blog: {
      path: '../../articles/',
      routeBasePath: 'articles',
      include: ['*.{md, mdx}', '**/*.{md, mdx}'],
      blogSidebarCount:  'ALL',
      blogSidebarTitle:  'All posts',
      postsPerPage: 10,
    },
    theme: {
      customCss: require.resolve('./src/css/custom.css'),
    },
  })]],
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'My Site',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {to: '/packages', label: 'Packages', position: 'left'},
          {to: '/articles', label: 'Articles', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
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
                label: 'Tutorial',
                to: '/docs/intro',
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
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
