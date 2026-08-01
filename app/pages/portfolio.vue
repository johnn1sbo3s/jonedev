<template>
  <div class="flex h-full flex-col items-center">
    <div class="flex w-full justify-center" data-animate="delay-1">
      <div class="w-full max-w-287.5">
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

    <div class="mt-4 mb-10 flex w-full max-w-287.5 flex-col justify-center gap-10 px-4 lg:mt-8 lg:mb-20 lg:gap-12 lg:px-0">
      <ProjectCard v-for="project in projects" :key="project.name" :text="project.text" :image-src="project.imageSrc" :light-effect-color="project.lightEffectColor" :text-color="project.textColor" :gradient-color="project.gradient" :logo-src="project.logoSrc" data-animate>
        <template #title>
          <div class="hidden items-center justify-between gap-3 lg:flex">
            <div class="flex gap-1 text-2xl font-bold" :class="project.link ? 'cursor-pointer hover:underline' : ''" :style="{ color: project.titleColor }" @click="openProject(project.link)">
              {{ project.name }}
            </div>

            <button v-if="project.link" class="project-link flex cursor-pointer items-center gap-1 rounded-md bg-none px-4 py-2 text-sm text-violet-500 hover:bg-violet-200" @click="openProject(project.link)">
              <span>{{ $t('portfolio.seeProject') }}</span>

              <Icon name="uil:arrow-up-right" size="18" />
            </button>
          </div>

          <div class="flex w-fit items-center gap-2 text-xl font-bold lg:hidden" :class="project.link ? 'cursor-pointer hover:underline' : ''" :style="{ color: project.titleColor }" @click="openProject(project.link)">
            {{ project.name }}
            <Icon v-if="project.link" class="mt-0.5" name="uil:arrow-up-right" size="24" />
          </div>
        </template>
      </ProjectCard>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Project {
  name: string
  description: string
  imageSrc: string
  logoSrc: string
  lightEffectColor: string
  gradient: string
  titleColor: string
  textColor: string
  link: string
}

useScrollAnimation()

const { tm, rt } = useI18n()

const projects = computed(() => {
  const translated = tm('portfolio.projects') as Project[]
  if (!Array.isArray(translated)) return []
  return translated.map((item) => ({
    name: rt(item.name),
    text: rt(item.description),
    imageSrc: rt(item.imageSrc),
    logoSrc: rt(item.logoSrc),
    lightEffectColor: rt(item.lightEffectColor),
    gradient: rt(item.gradient),
    titleColor: rt(item.titleColor),
    textColor: rt(item.textColor),
    link: rt(item.link),
  }))
})

function openProject(link: string) {
  if (!link) return
  window.open(link, '_blank')
}
</script>

<style lang="css" scoped>
.project-link {
  transition: all 0.3s ease;
}
</style>
