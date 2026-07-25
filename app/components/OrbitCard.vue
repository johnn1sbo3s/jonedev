<template>
  <div class="orbit-card" :style="{ '--delay': `${delay}s` }">
    <div class="card-title">{{ title }}</div>

    <div class="card-skills">
      <span class="skill-pill" :style="{ background: skillGradient }">
        {{ skills }}
      </span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  skills: {
    type: String,
    required: true,
  },
  delay: {
    type: Number,
    default: 0,
  },
  skillGradient: {
    type: String,
    default: 'linear-gradient(90deg, #9D78F1 0%, #6C9AF5 50%, #21ADFE 100%)',
  },
})
</script>

<style lang="css" scoped>
.orbit-card {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 14px 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.5);
  white-space: nowrap;
  z-index: 10;
  text-align: center;
}

.card-title {
  font-size: 0.9rem;
  font-weight: 600;
  color: #1a1a2e;
  margin-bottom: 8px;
}

.skill-pill {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 0.75rem;
  font-weight: 500;
  color: white;
}

@media (prefers-reduced-motion: reduce) {
  .orbit-card {
    animation: none !important;
  }
}
</style>
