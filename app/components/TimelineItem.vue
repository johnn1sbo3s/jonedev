<template>
  <div class="timeline-item relative mb-12 flex items-start gap-6 lg:gap-8" :data-animate="dataAnimate">
    <div class="timeline-dot z-10 mt-4 h-4 w-4 shrink-0 rounded-full bg-[#8B5CF6]" />

    <div class="timeline-card flex-1 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      <h3 class="color-neutral-dark text-lg leading-tight font-semibold">
        {{ title }}

        <span class="block text-sm text-[#a78bfa] sm:mt-0 sm:ml-1 sm:inline"> @ {{ company }} </span>
      </h3>

      <p class="color-neutral-light mt-2">{{ description }}</p>

      <span class="color-primary mt-2 inline-block text-sm">{{ date }}</span>
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
