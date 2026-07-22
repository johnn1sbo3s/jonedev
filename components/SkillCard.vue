<template>
	<div
		class="skill-card relative overflow-hidden rounded-2xl p-6 cursor-default"
		:style="{ background: bgColor }"
	>
		<div class="flex items-center gap-3 mb-3">
			<div
				class="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
				:style="{ background: iconBg }"
			>
				{{ icon }}
			</div>
			<div class="font-bold text-lg" :style="{ color: textColor }">
				{{ title }}
			</div>
		</div>

		<div class="text-sm leading-relaxed" :style="{ color: textColor }">
			{{ description }}
		</div>

		<div
			class="skill-glow absolute -top-6 -right-6 w-32 h-32 rounded-full opacity-20"
			:style="{ background: glowColor }"
		/>
	</div>
</template>

<script setup>
defineProps({
	icon: {
		type: String,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	bgColor: {
		type: String,
		default: 'rgba(139, 92, 246, 0.1)',
	},
	iconBg: {
		type: String,
		default: 'rgba(139, 92, 246, 0.2)',
	},
	textColor: {
		type: String,
		default: '#3C3842',
	},
	glowColor: {
		type: String,
		default: '#8B5CF6',
	},
});
</script>
