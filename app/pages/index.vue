<template>
  <div class="flex min-h-screen w-full flex-col">
    <div class="flex w-full justify-center" data-animate="delay-1">
      <div class="w-full max-w-287.5">
        <NavigationMenu active-nav-item="home" />
      </div>
    </div>

    <div class="mx-auto flex w-full max-w-287.5 flex-col items-center gap-6 pt-12 lg:flex-row lg:gap-10 lg:pt-16">
      <HeroLeftContent data-animate="delay-2" />

      <HeroIllustration class="hidden shrink-0 lg:block" data-animate="slide-right delay-5" />
    </div>

    <TimelineSection />

    <AcademicSection />
  </div>
</template>

<script setup lang="ts">
useScrollAnimation()

const { t } = useI18n()

useHead(() => ({
  title: `João Paulo Castro – ${t('hero.title')}`,
  meta: [
    { name: 'description', content: t('hero.description') },
    { property: 'og:title', content: `João Paulo Castro – ${t('hero.title')}` },
    { property: 'og:description', content: t('hero.description') },
  ],
}))
</script>
