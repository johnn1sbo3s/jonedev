<template>
	<div class="w-full flex flex-col items-center mt-16 lg:mt-24 mb-16 max-w-[1150px] mx-auto px-4 lg:px-0">
		<div class="w-full flex justify-center text-4xl lg:text-6xl font-black" data-animate="delay-1">
			<div class="color-primary">{{ $t('education.my') }}</div>
			<div class="color-neutral"> {{ $t('education.sectionTitle') }}</div>
			<div class="color-primary">.</div>
		</div>

		<div class="text-lg lg:text-xl text-gray-400 font-light mt-1" data-animate="delay-1">
			{{ $t('education.subtitle') }}
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


const { tm, rt } = useI18n()

const academics = computed(() => {
	const result = tm('education.items')
	if (!Array.isArray(result)) return []
	return result.map(item => ({
		title: rt(item.title),
		company: rt(item.company),
		description: rt(item.description),
		date: rt(item.date),
	}))
})
</script>

<style lang="css" scoped>

.timeline-line {
	opacity: 0.5;
}

</style>
