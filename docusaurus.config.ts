import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
    title: 'Vietbando T4CH',
    tagline: 'Dinosaurs are cool',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://your-docusaurus-site.example.com',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'VIETBANDO', // Usually your GitHub org/user name.
    projectName: 'thuongmai_doc', // Usually your repo name.

    onBrokenLinks: 'warn',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'vi',
        locales: ['en', 'vi'],
        localeConfigs: {
            en: {
                label: 'English',
                htmlLang: 'en-GB',
                direction: 'ltr',
            },
            // You can omit a locale (e.g. fr) if you don't need to override the defaults
            vi: {
                direction: 'ltr',
                label: 'Vietnamese',
            },
        },
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: process.env.NODE_ENV === 'development' 
                        ? ({ versionDocsDirPath, docPath }) => `/admin/#/collections/edit/doc/${docPath.replace(/\.md$/, "")}` 
                        : undefined,
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                theme: {
                    customCss: ['./src/css/custom.css',
                        './src/css/browser-option.css',
                        './src/css/browser_panel.css'
                    ],
                },
            } satisfies Preset.Options,
        ],
    ],
    plugins: [
        [
            'docusaurus2-dotenv',
            {
                path: "./.env", // The path to your environment variables.
                safe: false, // If false ignore safe-mode, if true load './.env.example', if a string load that file as the sample
                systemvars: false, // Set to true if you would rather load all system variables as well (useful for CI purposes)
                silent: false, //  If true, all warnings will be suppressed
                expand: false, // Allows your variables to be "expanded" for reusability within your .env file
                defaults: false, //  Adds support for dotenv-defaults. If set to true, uses ./.env.defaults
            },
        ],
        [
            require.resolve('@easyops-cn/docusaurus-search-local'),
            {
                hashed: true,
                language: ["en", "vi"], // Thêm ngôn ngữ cần tìm kiếm, ví dụ: tiếng Anh và tiếng Việt
            },
        ],
    ],
    themeConfig: {
    // Replace with your project's social card
        tableOfContents: {
            minHeadingLevel: 2,
            maxHeadingLevel: 5,
        },
        docs: {
            sidebar: {
                hideable: true,
            },
        },
        navbar: {
            title: '│ VBD T4CH',
            logo: {
                alt: 'VBD T4CH',
                src: 'img/logo-vbd.svg',
            },
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'tutorialSidebar',
                    position: 'left',
                    label: 'Documentation',
                },
                {type: 'localeDropdown', position: 'right'},
                { to: '/blog', label: 'Blog', position: 'left' },
                // {
                //     href: 'https://github.com/facebook/docusaurus',
                //     label: 'GitHub',
                //     position: 'right',
                // },
            ],
        },
        
        /*
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'Documentation',
                            to: '/docs/introduce',
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
                        // {
                        //     label: 'GitHub',
                        //     href: 'https://github.com/facebook/docusaurus',
                        // },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
        },
        */
        prism: {
            additionalLanguages: ['java', 'json', 'bash', 'c', 'cpp', 'cmake', 'powershell', 'csharp', 'sql', 'python', 'typescript', 'yaml', 'css', 'scss', 'less', 'graphql', 'markdown'],
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
            magicComments: [
                // Remember to extend the default highlight class name as well!
                {
                    className: 'theme-code-block-highlighted-line',
                    line: 'highlight-next-line',
                    block: {start: 'highlight-start', end: 'highlight-end'},
                },
                {
                    className: 'code-block-error-line',
                    line: 'This will error',
                },
            ],
        },
        themes: [
            'docusaurus-theme-redoc' // Thêm theme Redoc vào đây
        ]
    } satisfies Preset.ThemeConfig,
};

export default config;
