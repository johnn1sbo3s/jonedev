<template>
	<div class="w-full min-h-screen flex flex-col">
		<!-- Nav -->
		<div class="w-full flex justify-center" data-animate="delay-1">
			<div class="w-full max-w-[1150px]">
				<NavigationMenu active-nav-item='home' />
			</div>
		</div>

		<!-- Hero -->
		<div class="flex flex-col lg:flex-row items-center max-w-[1150px] mx-auto w-full gap-6 lg:gap-10 pt-12 lg:pt-16">
			<HeroLeftContent data-animate="delay-2" />

			<!-- Illustration: only on desktop -->
			<HeroIllustration class="hidden lg:block shrink-0" data-animate="slide-right delay-5" />
		</div>
	</div>
</template>

<script setup>
useScrollAnimation();
</script>
