// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-05-15',
	devtools: { enabled: false },

	modules: [
		'@nuxt/eslint',
		'@nuxtjs/tailwindcss',
		'@nuxt/fonts',
		'@nuxtjs/device',
		'@nuxt/icon',
		'@nuxt/image-edge',
		'@nuxt/scripts',
		'@nuxtjs/i18n',
	],
	icon: {
		mode: 'svg',
	},

	i18n: {
		locales: [
			{ code: 'en', name: 'English', file: 'en.json' },
			{ code: 'pt', name: 'Português', file: 'pt.json' },
			{ code: 'es', name: 'Español', file: 'es.json' },
		],
		defaultLocale: 'en',
		lazy: false,
		langDir: 'locales',
		strategy: 'prefix_except_default',
		detectBrowserLanguage: {
			useCookie: true,
			cookieKey: 'i18n_redirected',
			redirectOn: 'root',
		},
	},

	scripts: {
		registry: {
			clarity: {
				id: 'ruuv9lie14'
			}
		}
	},

	css: [
		'~/assets/css/main.css'
	],
})