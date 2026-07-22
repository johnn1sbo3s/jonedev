<template>
	<div class="w-full min-h-screen flex flex-col">
		<!-- Nav: centered on mobile, full width max-w on desktop -->
		<div class="w-full flex justify-center lg:pt-6">
			<div class="w-full max-w-[1150px]">
				<!-- Logo: only on mobile -->
				<div class="flex justify-center mb-6 lg:hidden">
					<img
						src="/img/logo.svg"
						alt="logo"
						width="80px"
						class="cursor-pointer"
					>
				</div>

				<NavigationMenu active-nav-item='home' />
			</div>
		</div>

		<!-- Hero -->
		<div
			class="flex flex-col lg:flex-row items-center max-w-[1150px] mx-auto w-full gap-6 lg:gap-10 lg:pt-16"
		>
			<!-- Left content -->
			<div class="flex flex-col gap-3 min-w-0 shrink">
				<!-- Name + subtitle -->
				<div class="text-5xl lg:text-6xl font-black flex flex-col items-start relative">
					<div class="absolute -left-4 -top-2 h-28 w-28 lg:-left-6 lg:-top-3 lg:h-36 lg:w-36 rounded-full bg-white/40 border-l-2 border-violet-200/80" />

					<div class="color-neutral z-10">João Paulo</div>
					<div class="color-primary z-10">Castro</div>
					<span class="color-neutral-light z-10 mt-2 text-sm lg:text-xl font-light lg:font-semibold">
						Product Engineer | Frontend Specialist
					</span>
				</div>

				<!-- Description -->
				<div class="text-base lg:text-xl mt-2 lg:mt-8 font-light color-neutral w-full">
					Crafting impactful digital solutions for over 6 years. I build intuitive products
					through front-end development and design, blending code and data to improve lives.
				</div>

				<!-- Buttons -->
				<div class="flex flex-col lg:flex-row w-full gap-3 lg:gap-5 mt-4 lg:mt-10 max-w-[400px]">
					<SimpleButton
						link="https://www.linkedin.com/in/joaopaulo-castro/"
						title="LinkedIn"
					>
						<template #icon>
							<img src="/img/linkedin.svg" alt="LinkedIn">
						</template>
					</SimpleButton>

					<SimpleButton
						link="https://github.com/johnn1sbo3s/"
						title="GitHub"
					>
						<template #icon>
							<img src="/img/github.svg" alt="GitHub">
						</template>
					</SimpleButton>

					<!-- Contact me: only on mobile -->
					<a
						class="lg:hidden bg-white flex items-center justify-center gap-3 py-4 px-8 rounded-2xl cursor-pointer hover:shadow-lg hover:shadow-blue-100 transition-shadow"
						href="mailto:joaopaulocastro@gmail.com"
					>
						<Icon name="uil:envelope" size="26" style="color: #6D99F5" />
						<span class="color-neutral-dark">Contact me</span>
					</a>
				</div>
			</div>

			<!-- Illustration: only on desktop -->
			<HeroIllustration class="hidden lg:block shrink-0" />
		</div>
	</div>
</template>
