<template>
	<div class="w-full flex flex-col items-center mt-16 lg:mt-24 mb-16 max-w-[1150px] mx-auto px-4 lg:px-0">
		<div class="w-full flex justify-center text-4xl lg:text-6xl font-black" data-animate="delay-1">
			<div class="color-primary">My</div>
			<div class="color-neutral"> Journey</div>
			<div class="color-primary">.</div>
		</div>

		<div class="text-lg lg:text-xl text-gray-400 font-light mt-1" data-animate="delay-1">
			The road so far
		</div>

		<div class="relative w-full mt-12">
			<div class="absolute left-[8px] top-0 bottom-0 w-px bg-violet-300 timeline-line" />

			<TimelineItem
				v-for="(item, index) in experiences"
				:key="index"
				:title="item.title"
				:company="item.company"
				:description="item.description"
				:date="item.date"
				:data-animate="`slide-left delay-${index + 2}`"
			/>
		</div>
	</div>
</template>

<script setup>

const experiences = [
	{
		title: 'Product Engineer | Front-end Specialist',
		company: 'Lumos Gaming',
		description: 'Leading front-end architecture for a large-scale iGaming platform serving users across Latin America. Focused on performance, scalability and usability in a high-traffic environment.',
		date: '2024 - Present',
	},
	{
		title: 'Front-end Developer | UX/UI Designer',
		company: 'Sysvale Health Tech',
		description: 'Co-created and maintained a Design System adopted by 7+ squads across 15+ commercial projects. Led architecture decisions impacting 2M+ citizens and 6K+ health professionals in Brazil\'s public health system.',
		date: '2021 - 2024',
	},
	{
		title: 'Junior Developer',
		company: 'Sysvale Health Tech',
		description: 'Evolved from intern to Junior Developer, building features and creating prototypes with focus on usability and user research.',
		date: '2019 - 2021',
	},
];

</script>

<style lang="css" scoped>

.timeline-line {
	opacity: 0.5;
}

</style>
