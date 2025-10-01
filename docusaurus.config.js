// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const organizationName = "coderius";
const projectName = "play-docs";

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "coderius-play",
	tagline: "Leer nog beter Python door het maken van games",
	url: `https://${organizationName}.github.io`,
	baseUrl: `/`,
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "throw",
	// favicon: "img/favicon.ico",
	// GitHub Pages adds a trailing slash by default that I don't want
	trailingSlash: false,

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName, // Usually your GitHub org/username.
	projectName, // Usually your repo name.

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "nl",
		locales: ["nl"],
	},

	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve("./sidebars.js"),
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl: `https://github.com/${organizationName}/${projectName}/tree/main/`,
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			}),
		],
	],

	themeConfig:
	/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				title: "Home",
				items: [
					{
						type: "doc",
						docId: "/category/installatie-coderius-play",
						position: "left",
						label: "Start met coderius-play",
					},
					{
						href: `https://github.com/${organizationName}/${projectName}`,
						label: "GitHub",
						position: "right",
					},
				],
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
			footer: {
				copyright: `Licensed under Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)`,
			},
		}),
};

module.exports = config;
