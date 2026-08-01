<template>
  <div class="mx-auto mt-16 mb-16 flex w-full max-w-287.5 flex-col items-center px-4 lg:mt-24 lg:px-0">
    <div class="flex w-full justify-center text-4xl font-black lg:text-6xl" data-animate="delay-1">
      <div class="color-primary">{{ $t('journey.my') }}</div>

      <div class="color-neutral">{{ $t('journey.sectionTitle') }}</div>

      <div class="color-primary">.</div>
    </div>

    <div class="mt-1 text-lg font-light text-gray-400 lg:text-xl" data-animate="delay-1">
      {{ $t('journey.subtitle') }}
    </div>

    <div class="relative mt-12 w-full">
      <div class="timeline-line absolute top-0 bottom-0 left-2 w-px bg-violet-300" />

      <TimelineItem v-for="(item, index) in experiences" :key="index" :title="item.title" :company="item.company" :description="item.description" :date="item.date" :data-animate="`slide-left delay-${index + 2}`" />
    </div>
  </div>
</template>

<script setup lang="ts">
const { tm, rt } = useI18n()

interface ExperienceItem {
  title: string
  company: string
  description: string
  date: string
}

const experiences = computed(() => {
  const result = tm('journey.experiences') as ExperienceItem[]
  if (!Array.isArray(result)) return []
  return result.map((item) => ({
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
