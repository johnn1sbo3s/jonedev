<template>
  <div class="flex min-w-0 shrink flex-col items-center gap-2 lg:items-start">
    <div class="relative flex flex-col items-center text-5xl font-black lg:items-start lg:text-6xl">
      <div class="absolute -top-2 -left-4 h-28 w-28 rounded-full border-l-2 border-violet-200/80 bg-white/40 lg:-top-3 lg:-left-6 lg:h-36 lg:w-36" />

      <div class="color-neutral z-10">João Paulo</div>

      <div class="color-primary z-10">Castro</div>

      <span class="color-neutral z-10 mt-2 text-sm font-semibold lg:text-xl lg:font-semibold">
        {{ $t('hero.title') }}
      </span>
    </div>

    <div class="color-neutral-light mt-2 w-full text-center text-base font-light lg:text-left">
      {{ $t('hero.description') }}
    </div>

    <div class="z-50 mt-4 flex w-full max-w-[400px] flex-col gap-2 lg:flex-row">
      <SimpleButton link="https://www.linkedin.com/in/joaopaulo-castro/" title="LinkedIn" hover-color="#0A66C2">
        <template #icon>
          <Icon name="lucide:linkedin" :size="22" style="color: #6d99f5" />
        </template>
      </SimpleButton>

      <SimpleButton link="https://github.com/johnn1sbo3s/" title="GitHub" hover-color="#181717">
        <template #icon>
          <Icon name="lucide:github" :size="22" style="color: #6d99f5" />
        </template>
      </SimpleButton>

      <div class="lg:hidden">
        <SimpleButton link="mailto:joaopaulosncastro@gmail.com" :title="$t('nav.contact')" hover-color="#6D99F5">
          <template #icon>
            <Icon name="lucide:mail" :size="22" style="color: #6d99f5" />
          </template>
        </SimpleButton>
      </div>
    </div>
  </div>
</template>
