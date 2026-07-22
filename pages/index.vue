<template>
	<div>
      <div class="w-screen h-screen flex-col items-center p-5">
          <div class="flex w-4/5 items-center justify-center justify-self-center">
              <NavigationMenu active-nav-item='home' />
          </div>

          <div class="background-lightning" />

          <div class="background-circle" />

          <div class="w-full flex items-center justify-center gap-16">
              <HeroLeftContent />

              <HeroIllustration class="hidden lg:block" />
          </div>
      </div>
	</div>
</template>

<style lang="css" scoped>

.background-design {
	background: #edf0f1;
	width: 100vw;
}

.background-lightning {
	position: absolute;
	background: #8B5CF6;
	height: 90px;
	width: 1200px;
	border-radius: 50%;
	bottom: 180px;
	left: -220px;
	rotate: -7deg;
	filter: blur(80px);
	opacity: 0.20;
}

.background-circle {
	position: absolute;
	top: 0;
	right: 0;
	height: 50%;
	width: 50%;
	border-radius: 100%;
	background: #21ADFE;
	filter: blur(100px);
	opacity: 0.06;
}

.elipse-detail-mobile {
	position: absolute;
	top: -35%;
	left: -10%;
	width: 140px;
	height: 110px;
	background: white;
	border-radius: 50%;
	border: 2px solid #d1d5db;
	transform: rotate(-15deg);
	opacity: 0.8;
}

</style>
