// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-05-15',
	devtools: { enabled: true },

	modules: [
		'@nuxt/eslint',
		'@nuxtjs/tailwindcss',
		'@nuxt/fonts',
		'@nuxtjs/device',
		'@nuxt/icon',
		'@nuxt/image-edge',
		'@nuxt/scripts',
	],

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