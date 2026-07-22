<template>
	<div>
		<!-- Desktop -->
		<div class="hidden lg:flex w-full min-h-screen flex-col relative overflow-hidden bg-[#edf0f1]">
			<div class="w-full flex justify-center pt-6">
				<div class="w-full max-w-[1440px] px-10">
					<NavigationMenu active-nav-item='home' />
				</div>
			</div>

			<div class="background-lightning" />
			<div class="background-circle" />

			<div class="flex items-center justify-center max-w-[1440px] mx-auto w-full gap-10 px-10 pt-16">
				<HeroLeftContent />

				<HeroIllustration class="shrink-0" />
			</div>
		</div>

		<!-- Mobile -->
		<div class="flex lg:hidden w-full min-h-screen flex-col px-6 py-8">
			<div class="flex justify-center mb-6">
				<NavigationMenu active-nav-item='home' />
			</div>

			<div class="flex-1 flex flex-col justify-center gap-6">
				<div class="text-5xl font-black relative flex flex-col items-start">
					<div class="absolute -left-4 -top-2 h-28 w-28 rounded-full bg-white/40 border-l-2 border-violet-200/80" />

					<div class="color-neutral z-10">João Paulo</div>
					<div class="color-primary z-10">Castro</div>
					<span class="color-neutral-light z-10 mt-2 text-sm font-light">Product Engineer | Frontend Specialist</span>
				</div>

				<div class="text-base font-light color-neutral">
					Crafting impactful digital solutions for over 6 years. I build intuitive products
					through front-end development and design, blending code and data to improve lives.
				</div>

				<div class="flex flex-col w-full gap-3 mt-4">
					<a
						class="bg-white flex items-center justify-center gap-3 py-4 px-8 rounded-2xl cursor-pointer hover:shadow-lg hover:shadow-blue-100 transition-shadow"
						href="https://www.linkedin.com/in/joaopaulo-castro/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src="/img/linkedin.svg" alt="LinkedIn" width="28">
						<span class="color-neutral-dark">LinkedIn</span>
					</a>

					<a
						class="bg-white flex items-center justify-center gap-3 py-4 px-8 rounded-2xl cursor-pointer hover:shadow-lg hover:shadow-blue-100 transition-shadow"
						href="https://github.com/johnn1sbo3s/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src="/img/github.svg" alt="GitHub" width="28">
						<span class="color-neutral-dark">GitHub</span>
					</a>

					<a
						class="bg-white flex items-center justify-center gap-3 py-4 px-8 rounded-2xl cursor-pointer hover:shadow-lg hover:shadow-blue-100 transition-shadow"
						href="mailto:joaopaulocastro@gmail.com"
					>
						<Icon name="uil:envelope" size="26" style="color: #6D99F5" />
						<span class="color-neutral-dark">Contact me</span>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="css" scoped>

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
	width: 40%;
	border-radius: 100%;
	background: #21ADFE;
	filter: blur(100px);
	opacity: 0.06;
}

</style>
