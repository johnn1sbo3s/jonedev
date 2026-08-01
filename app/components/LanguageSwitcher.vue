<template>
  <div class="language-switcher">
    <button v-for="loc in availableLocales" :key="loc.code" class="lang-btn" :class="{ active: locale === loc.code }" @click="switchLocale(loc.code)">
      {{ loc.code.toUpperCase() }}
    </button>
  </div>
</template>

<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()

const availableLocales = computed(() => {
  return (locales.value as Array<{ code: string; name: string }>).filter(
    (l) => typeof l === 'object',
  )
})

function switchLocale(code: string) {
  setLocale(code as 'en' | 'pt' | 'es')
}
</script>

<style lang="css" scoped>
.language-switcher {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
}

.lang-btn {
  background: none;
  border: none;
  padding: 6px 10px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  color: var(--color-neutral-light);
  transition: all 0.2s ease;
  letter-spacing: 0.5px;
}

.lang-btn:hover {
  color: var(--color-primary);
  background-color: var(--color-primary-bg-light);
}

.lang-btn.active {
  color: var(--color-primary);
  background-color: var(--color-primary-bg);
}
</style>
