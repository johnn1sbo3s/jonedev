<template>
	<div class="w-full flex flex-col items-center mt-16 lg:mt-24 mb-16 max-w-[1150px] mx-auto px-4 lg:px-0">
		<div class="w-full flex justify-center text-4xl lg:text-6xl font-black" data-animate="delay-1">
			<div class="color-primary">My</div>
			<div class="color-neutral"> Education</div>
			<div class="color-primary">.</div>
		</div>

		<div class="text-lg lg:text-xl text-gray-400 font-light mt-1" data-animate="delay-1">
			Education & Certifications
		</div>

		<div class="relative w-full mt-12">
			<div class="absolute left-[8px] top-0 bottom-0 w-px bg-violet-300 timeline-line" />

			<TimelineItem
				v-for="(item, index) in academics"
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

const academics = [
	{
		title: 'Postgraduate Degree in Data Science',
		company: 'Universidade da Amazônia',
		description: 'Postgraduate studies in Data Science focusing on predictive analysis and machine learning.',
		date: '2024',
	},
	{
		title: 'Certified Scrum Master',
		company: 'Scrum Alliance',
		description: 'Certification in agile methodologies, team leadership and Scrum ceremony facilitation.',
		date: '2022',
	},
	{
		title: "Bachelor's Degree in Computer Engineering",
		company: 'UNIVASF',
		description: "Bachelor's degree in Computer Engineering with focus on software engineering and web development.",
		date: '2021',
	},
];

</script>

<style lang="css" scoped>

.timeline-line {
	opacity: 0.5;
}

</style>
