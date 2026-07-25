<template>
	<div class="language-switcher">
		<button
			v-for="loc in availableLocales"
			:key="loc.code"
			class="lang-btn"
			:class="{ 'active': locale === loc.code }"
			@click="setLocale(loc.code)"
		>
			{{ loc.code.toUpperCase() }}
		</button>
	</div>
</template>

<script setup>
const { locale, locales, setLocale } = useI18n()

const availableLocales = computed(() => {
	return locales.value.filter(l => typeof l === 'object')
})
</script>

<style lang="css" scoped>
.language-switcher {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 4px;
}

.lang-btn {
	background: none;
	border: none;
	padding: 6px 10px;
	border-radius: 8px;
	font-size: 13px;
	font-weight: 600;
	cursor: pointer;
	color: #65626A;
	transition: all 0.2s ease;
	letter-spacing: 0.5px;
}

.lang-btn:hover {
	color: #8B5CF6;
	background-color: rgba(139, 92, 246, 0.08);
}

.lang-btn.active {
	color: #8B5CF6;
	background-color: rgba(139, 92, 246, 0.12);
}
</style>
