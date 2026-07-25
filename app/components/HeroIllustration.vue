<template>
  <div class="illustration-container anim-illustration relative justify-center">
    <div class="profile-photo">
      <img src="/img/picture.svg" alt="Picture" >
    </div>

    <div class="orbit-path orbit-path-1">
      <OrbitCard :title="$t('orbit.uxSpecialist')" skills="Design Thinking | Figma | Framer" />
    </div>

    <div class="orbit-path orbit-path-2">
      <OrbitCard :title="$t('orbit.frontendDev')" skills="JavaScript | Vue.js | Nuxt.js" />
    </div>

    <div class="orbit-path orbit-path-3">
      <OrbitCard :title="$t('orbit.dataScientist')" skills="Python | Scikit-Learn | Pandas" />
    </div>
  </div>
</template>

<style lang="css" scoped>
.illustration-container {
  position: relative;
  width: 560px;
  height: 560px;
  flex-shrink: 0;
}

.profile-photo {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}

.profile-photo img {
  width: 400px;
  height: 400px;
}

.orbit-path {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  z-index: 10;
  animation: orbit-rotate 45s linear infinite;
}

.orbit-path-1 {
  animation-delay: 0s;
}

.orbit-path-2 {
  animation-delay: -15s;
}

.orbit-path-3 {
  animation-delay: -30s;
}

:deep(.orbit-path .orbit-card) {
  position: absolute;
  transform: translate(-50%, -50%) translateX(180px);
  animation: orbit-counter-rotate 45s linear infinite;
}

.orbit-path-1 :deep(.orbit-card) {
  animation-delay: 0s;
}

.orbit-path-2 :deep(.orbit-card) {
  animation-delay: -15s;
}

.orbit-path-3 :deep(.orbit-card) {
  animation-delay: -30s;
}

@keyframes orbit-rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes orbit-counter-rotate {
  from {
    transform: translate(-50%, -50%) translateX(180px) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) translateX(180px) rotate(-360deg);
  }
}
</style>
