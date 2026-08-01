<template>
  <div class="timeline-item relative mb-12 flex items-start gap-6 lg:gap-8" :data-animate="dataAnimate">
    <div class="timeline-dot z-10 mt-4 h-4 w-4 shrink-0 rounded-full" :style="{ background: 'var(--color-primary)' }" />

    <div class="timeline-card flex-1 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      <h3 class="color-neutral-dark text-lg leading-tight font-semibold">
        {{ title }}

        <span class="block text-sm sm:mt-0 sm:ml-1 sm:inline" style="color: var(--color-primary-light)"> @ {{ company }} </span>
      </h3>

      <p class="color-neutral-light mt-2">{{ description }}</p>

      <span class="color-primary mt-2 inline-block text-sm">{{ date }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  title: string
  company: string
  description: string
  date: string
  dataAnimate?: string
}>(), {
  dataAnimate: 'slide-left',
})
</script>

<style lang="css" scoped>
.timeline-card {
  transition:
    box-shadow 0.3s ease,
    transform 0.2s ease;
}

.timeline-card:hover {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transform: translateY(-2px);
}

.timeline-dot {
  box-shadow: 0 0 0 4px rgba(139, 92, 246, 0.2);
}
</style>
