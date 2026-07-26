<template>
  <div class="z-10 mt-3 flex w-full items-center justify-between lg:mt-0">
    <img class="hidden cursor-pointer lg:block" src="/img/logo.svg" alt="logo" width="75px" @click="redirectToHome" >

    <div class="color-neutral mx-auto flex items-center gap-4 lg:mx-0 lg:gap-8">
      <NuxtLink v-for="item in navItems" :key="item.name" :to="item.path" class="flex h-[44px] w-[100px] cursor-pointer flex-col items-center justify-center hover:text-violet-500" :class="activeNavItem === item.name ? 'active-nav-item' : ''">
        <span>{{ item.label }}</span>

        <div v-if="activeNavItem === item.name" class="h-[3px] w-1/3 rounded-full bg-violet-500" />
      </NuxtLink>
    </div>

    <div class="hidden items-center gap-4 lg:flex">
      <LanguageSwitcher />

      <button class="button-primary hover:shadow-lg hover:shadow-violet-200" @click="openEmail">
        {{ $t('nav.contact') }}
      </button>
    </div>
  </div>
</template>

<script setup>
const { t } = useI18n()
const localePath = useLocalePath()
const router = useRouter()

defineProps({
  activeNavItem: {
    type: String,
    default: 'home',
  },
})

const navItems = computed(() => [
  { name: 'home', label: t('nav.home'), path: localePath('/') },
  { name: 'portfolio', label: t('nav.portfolio'), path: localePath('/portfolio') },
])

function redirectToHome() {
  router.push(localePath('/'))
}

function openEmail() {
  window.location.href = 'mailto:joaopaulosncastro@gmail.com'
}
</script>

<style lang="css" scoped>
.active-nav-item {
  color: #8b5cf6;
}

.button-primary {
  background-color: #8b5cf6;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.button-primary:hover {
  background-color: #733bf3;
}
</style>
