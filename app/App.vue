<template>
  <div class="background-design relative min-h-screen w-full overflow-hidden px-6 py-4 lg:px-10 lg:py-8">
    <div class="background-lightning hidden sm:block" />

    <div class="background-circle" />

    <div
      class="mouse-glow"
      :style="{ transform: `translate(${glowX - 250}px, ${glowY - 250}px)` }"
    />

    <div class="flex w-full items-center justify-center border-b border-black/5 lg:hidden">
      <div class="mx-auto w-full max-w-287.5 pb-3">
        <LanguageSwitcher />
      </div>
    </div>

    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
const { x: glowX, y: glowY } = useMouseGlow()
</script>

<style scoped>
.background-design {
  background: var(--color-background);
}

.background-lightning {
  position: absolute;
  background: var(--color-primary);
  height: 90px;
  width: 1200px;
  border-radius: 50%;
  bottom: 180px;
  left: -220px;
  rotate: -7deg;
  filter: blur(80px);
  opacity: 0.2;
}

.background-circle {
  position: absolute;
  top: 0;
  right: 0;
  height: 50%;
  width: 40%;
  border-radius: 100%;
  background: #21adfe;
  filter: blur(100px);
  opacity: 0.06;
}

.mouse-glow {
  position: fixed;
  top: 0;
  left: 0;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%);
  filter: blur(40px);
  pointer-events: none;
  z-index: 0;
}
</style>
