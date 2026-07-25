<template>
  <div class="z-10 flex w-full flex-col gap-3">
    <slot name="title" />

    <div class="relative w-full">
      <div class="absolute -top-[4%] right-0 z-10 hidden xl:block">
        <img :src="imageSrc" alt="Project image" >
      </div>

      <div class="card-content relative flex w-full flex-col justify-center gap-4 overflow-hidden rounded-2xl px-6 py-6 xl:min-h-[265px] xl:px-8 xl:py-6" :style="{ background: gradientColor }">
        <img v-if="logoSrc" :src="logoSrc" alt="Project logo" width="150px" >

        <div class="z-10 w-full text-sm font-normal xl:w-[55%]">
          {{ text }}
        </div>

        <div class="light-effect" />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  imageSrc: {
    type: String,
    default: '/img/dataplay-bets.svg',
  },
  logoSrc: {
    type: String,
    default: '',
  },
  gradientColor: {
    type: String,
    default: 'linear-gradient(72deg, #1E2D46 -8.58%, #27426B 36.98%, #2A4E84 105.59%)',
  },
  lightEffectColor: {
    type: String,
    default: '#24D88A',
  },
  textColor: {
    type: String,
    default: '#fff',
  },
})

const computedLightEffectColor = computed(() => props.lightEffectColor)
const computedTextColor = computed(() => props.textColor)
</script>

<style lang="css" scoped>
.card-content {
  font-weight: 300;
  border: 1.7px solid v-bind(computedLightEffectColor);
  color: v-bind(computedTextColor);
}

.light-effect {
  position: absolute;
  height: 300px;
  width: 300px;
  background: v-bind(lightEffectColor);
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.3;
  top: -30%;
  right: -25%;
}

@media (min-width: 1280px) {
  .light-effect {
    top: -3%;
    right: 5%;
    opacity: 0.3;
  }
}
</style>
