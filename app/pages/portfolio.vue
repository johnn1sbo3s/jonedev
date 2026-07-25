<template>
  <div class="flex h-full flex-col items-center">
    <div class="flex w-full justify-center" data-animate="delay-1">
      <div class="w-full max-w-[1150px]">
        <NavigationMenu active-nav-item="portfolio" />
      </div>
    </div>

    <div class="mt-8 flex w-full justify-center text-4xl font-black lg:mt-24 lg:text-6xl" data-animate="delay-2">
      <div class="color-primary">{{ $t('portfolio.my') }}</div>

      <div class="color-neutral">{{ $t('portfolio.sectionTitle') }}</div>

      <div class="color-primary">.</div>
    </div>

    <div class="mt-1 text-lg font-light text-gray-400 lg:text-xl" data-animate="delay-3">
      {{ $t('portfolio.subtitle') }}
    </div>

    <div class="mt-4 mb-10 flex w-full max-w-[1150px] flex-col justify-center gap-10 px-4 lg:mt-8 lg:mb-20 lg:gap-12 lg:px-0">
      <ProjectCard v-for="project in projects" :key="project.name" :text="project.text" :image-src="project.imageSrc" :light-effect-color="project.lightEffectColor" :text-color="project.textColor" :gradient-color="project.gradient" :logo-src="project.logoSrc" data-animate>
        <template #title>
          <div class="hidden items-center justify-between gap-3 lg:flex">
            <div class="flex cursor-pointer gap-1 text-2xl font-bold hover:underline" :style="{ color: project.titleColor }" @click="openProject(project.link)">
              {{ project.name }}
            </div>

            <button class="project-link flex cursor-pointer items-center gap-1 rounded-md bg-none px-4 py-2 text-sm text-violet-500 hover:bg-violet-200" @click="openProject(project.link)">
              <span>{{ $t('portfolio.seeProject') }}</span>

              <Icon name="uil:arrow-up-right" size="18" />
            </button>
          </div>

          <div class="flex w-fit cursor-pointer items-center gap-2 text-xl font-bold hover:underline lg:hidden" :style="{ color: project.titleColor }" @click="openProject(project.link)">
            {{ project.name }}
            <Icon class="mt-0.5" name="uil:arrow-up-right" size="24" />
          </div>
        </template>
      </ProjectCard>
    </div>
  </div>
</template>

<script setup>
useScrollAnimation()

const { tm, rt } = useI18n()

const visualProps = [
  {
    name: 'DataPlay Bets',
    imageSrc: '/img/dataplay-bets.svg',
    logoSrc: '/img/dataplay-bets-logo.svg',
    lightEffectColor: '#24D88A',
    gradient: 'linear-gradient(72deg, #1E2D46 -8.58%, #27426B 36.98%, #2A4E84 105.59%)',
    titleColor: '#274470',
    textColor: 'white',
    link: 'https://dataplaybets.vercel.app/',
  },
  {
    name: 'Cuida Design System',
    imageSrc: '/img/cuida.svg',
    logoSrc: '/img/cuida-logo.svg',
    lightEffectColor: '#24D88A',
    gradient: 'linear-gradient(72deg, #EEFFF4 -8.58%, #FAFFFC 18.07%, #FFF 61.68%)',
    titleColor: '#2AC092',
    textColor: '#29343F',
    link: 'https://cuida.framer.wiki',
  },
  {
    name: 'Dentuxo Board',
    imageSrc: '/img/dentuxo.svg',
    logoSrc: '/img/dentuxo-logo.svg',
    lightEffectColor: '#BD5D1B',
    gradient: 'linear-gradient(72deg, #CDAF76 36.14%, #B38B5C 87.76%, #93603C 105.59%)',
    titleColor: '#905D3A',
    textColor: '#3F1D10',
    link: 'https://www.figma.com/design/8SNVK0EsBUh60hhA4Z3LKR/Dentuxo-Board?t=1qppbG2ZhppeNKV8-0',
  },
  {
    name: 'Minha Vez',
    imageSrc: '/img/minha-vez.svg',
    logoSrc: '/img/minha-vez-logo.svg',
    lightEffectColor: '#736EEC',
    gradient: 'linear-gradient(72deg, #E2DEFF -8.58%, #F4F4FF 18.07%, #FFF 61.68%), #D9D9D9',
    titleColor: '#6174D1',
    textColor: '#030B33',
    link: 'https://minhavez.com.br/',
  },
  {
    name: 'Cidade Saudável',
    imageSrc: '/img/cidade-saudavel.svg',
    logoSrc: '/img/cidade-saudavel-logo.svg',
    lightEffectColor: '#26AD5B',
    gradient: 'linear-gradient(72deg, #20AD57 -8.58%, #25B55D 41.92%, #45E885 105.59%)',
    titleColor: '#25BC60',
    textColor: '#FFFFFF',
    link: 'https://cidadesaudavel.com/',
  },
  {
    name: 'Habitação',
    imageSrc: '/img/habitacao.svg',
    logoSrc: '',
    lightEffectColor: '#ED3A0E',
    gradient: 'linear-gradient(72deg, #FF8567 -8.58%, #FFAE6A 16.12%, #FFB66A 105.59%)',
    titleColor: '#FF7C5C',
    textColor: '#41190A',
    link: 'https://habitacao.sysvale.com/',
  },
  {
    name: 'Landing Page - Sysvale',
    imageSrc: '/img/sysvale.svg',
    logoSrc: '/img/sysvale-logo.svg',
    lightEffectColor: '#012147',
    gradient: 'linear-gradient(72deg, #07346B -8.58%, #0C4B97 57.84%, #1579F3 105.59%)',
    titleColor: '#07346A',
    textColor: '#FFFFFF',
    link: 'https://sysvale.com/',
  },
]

const projects = computed(() => {
  const translated = tm('portfolio.projects')
  if (!Array.isArray(translated)) return []
  return translated.map((item, i) => ({
    ...item,
    text: rt(item.description),
    ...visualProps[i],
  }))
})

function openProject(link) {
  window.open(link, '_blank')
}
</script>

<style lang="css" scoped>
.project-link {
  transition: all 0.3s ease;
}
</style>
