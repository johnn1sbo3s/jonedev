<template>
	<div class="relative flex items-start gap-6 lg:gap-8 mb-12 timeline-item" :data-animate="dataAnimate">
		<div class="shrink-0 w-4 h-4 rounded-full bg-[#8B5CF6] mt-4 z-10 timeline-dot" />


		<div class="flex-1 bg-white rounded-2xl p-5 shadow-sm border border-gray-100 timeline-card">
			<h3 class="font-semibold text-lg color-neutral-dark">
				{{ title }}

				<span class="ml-1 text-sm text-[#a78bfa]">
					@ {{ company }}
				</span>
			</h3>
			<p class="color-neutral-light mt-1">{{ description }}</p>
			<span class="text-sm color-primary mt-2 inline-block">{{ date }}</span>
		</div>
	</div>
</template>

<script setup>
defineProps({
	title: {
		type: String,
		required: true,
	},
	company: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	date: {
		type: String,
		required: true,
	},
	dataAnimate: {
		type: String,
		default: 'slide-left',
	},
});
</script>

<style lang="css" scoped>

.timeline-card {
	transition: box-shadow 0.3s ease, transform 0.2s ease;
}

.timeline-card:hover {
	box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
	transform: translateY(-2px);
}

.timeline-dot {
	box-shadow: 0 0 0 4px rgba(139, 92, 246, 0.2);
}

</style>
