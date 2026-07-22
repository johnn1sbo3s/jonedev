<template>
	<div class="flex flex-col gap-3 min-w-0 shrink">
		<div class="text-6xl font-black flex flex-col items-start relative">
			<div class="absolute -left-6 -top-3 h-36 w-36 rounded-full bg-white/40 border-l-2 border-violet-200/80" />

			<div class="color-neutral z-10">João Paulo</div>
			<div class="color-primary z-10">Castro</div>
			<span class="color-neutral-dark z-10 mt-2 font-semibold text-xl">Product Engineer | Frontend Specialist</span>
		</div>

		<div class="text-base mt-2 color-neutral-light w-full">
			Crafting impactful digital solutions for over 6 years. I build intuitive products
			through front-end development and design, blending code and data to improve lives.
		</div>

		<div class="flex w-full gap-3 mt-5 max-w-[400px]">
			<a
				class="bg-white hover:shadow-lg hover:shadow-blue-100 z-50 w-full cursor-pointer outline-0 hover:outline-1 hover:outline-blue-400 flex items-center justify-center gap-2 py-1 px-4 rounded-2xl transition-all"
				href="https://www.linkedin.com/in/joaopaulo-castro/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img src="/img/linkedin.svg" alt="LinkedIn">
				<span class="color-neutral-dark">LinkedIn</span>
			</a>

			<a
				class="bg-white hover:shadow-lg hover:shadow-blue-100 z-50 w-full cursor-pointer outline-0 hover:outline-1 hover:outline-blue-400 flex items-center justify-center gap-3 py-4 px-8 rounded-2xl transition-all"
				href="https://github.com/johnn1sbo3s/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img src="/img/github.svg" alt="GitHub">
				<span class="color-neutral-dark">GitHub</span>
			</a>
		</div>
	</div>
</template>
