<template>
  <div class="background-design relative min-h-screen w-full overflow-hidden px-6 py-4 lg:px-10 lg:py-8">
    <div class="background-lightning hidden sm:block" />

    <div class="background-circle" />

    <div class="flex w-full items-center justify-center border-b border-black/5 lg:hidden">
      <div class="mx-auto w-full max-w-287.5 pb-3">
        <LanguageSwitcher />
      </div>
    </div>

    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import { CONTACT_EMAIL } from '~/utils/constants'

const head = useLocaleHead({ seo: true })

const seoHead = computed(() => ({
  htmlAttrs: { lang: head.value.htmlAttrs?.lang },
  meta: [
    ...(head.value.meta ?? []),
    { property: 'og:site_name', content: 'JoneDev' },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: 'https://jonedev.vercel.app/img/og-image.png' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'João Paulo Castro – Product Engineer | Frontend Specialist' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
  link: [...(head.value.link ?? [])],
  script: [
    {
      type: 'application/ld+json' as const,
      textContent: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'João Paulo Castro',
        jobTitle: 'Product Engineer | Frontend Specialist',
        url: 'https://jonedev.vercel.app',
        email: CONTACT_EMAIL,
        sameAs: [
          'https://www.linkedin.com/in/joaopaulo-castro/',
          'https://github.com/johnn1sbo3s/',
        ],
      }),
    },
  ],
}))

useHead(seoHead)
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
</style>
