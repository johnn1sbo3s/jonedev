<template>
	<a
		class="bg-white hover:shadow-lg hover:shadow-blue-100 z-50 cursor-pointer outline-0 hover:outline-1 hover:outline-blue-400 flex items-center justify-center gap-2 py-2 px-7 rounded-2xl transition-all"
		:href="link"
		target="_blank"
		rel="noopener noreferrer"
	>
		<slot name="icon" />
		<span class="color-neutral-dark">{{ title }}</span>
	</a>
</template>

<script setup>
defineProps({
	link: {
		type: String,
		required: true
	},
	title: {
		type: String,
		required: true
	}
});
</script>
