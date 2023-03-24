// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require( 'prism-react-renderer/themes/github' )
const darkCodeTheme = require( 'prism-react-renderer/themes/dracula' )

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Underpin Core Documentation',
    tagline: 'Underpin - To support from below, and to create an underlying foundation..',
    url: 'https://docs.underp.in',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'adiungo', // Usually your GitHub org/user name.
    projectName: 'docs.underp.in',
    trailingSlash: false,
    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            '@docusaurus/preset-classic',
            ( {
                blog: false,
                docs: {
                    sidebarPath: require.resolve( './sidebars.js' ),
                    routeBasePath: '/'
                },
            } ),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ( {
            navbar: {
                title: 'Underpin',
                // logo: {
                //   alt: 'My Site Logo',
                //   src: 'img/logo.svg',
                // },
                items: [
                    {
                        href: 'https://github.com/underpin-wp/documentation',
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
                                label: 'About Underpin',
                                to: '/',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Ask a Question (GitHub Discussions)',
                                href: 'https://github.com/underpin-wp/underpin/discussions',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Alex Standiford.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
                additionalLanguages: ['php']
            },
        } ),
}

module.exports = config
