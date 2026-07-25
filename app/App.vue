<template>
  <div class="background-design relative min-h-screen w-full overflow-hidden px-6 py-4 lg:px-10 lg:py-8">
    <div class="background-lightning hidden sm:block" />

    <div class="background-circle" />

    <div class="flex w-full items-center justify-center border-b border-black/5 lg:hidden">
      <div class="mx-auto w-full max-w-[1150px] pb-3">
        <LanguageSwitcher />
      </div>
    </div>

    <NuxtPage />
  </div>
</template>

<style scoped>
.background-design {
  background: #edf0f1;
}

.background-lightning {
  position: absolute;
  background: #8b5cf6;
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
