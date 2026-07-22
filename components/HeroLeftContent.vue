<template>
	<div class="flex flex-col gap-3 max-w-[500px]">
		<div class="text-6xl font-black flex flex-col items-start relative">
			<div class="absolute -left-6 -top-3 h-36 w-36 rounded-full bg-white/40 border-l-2 border-violet-200/80" />

			<div class="color-neutral z-10">João Paulo</div>
			<div class="color-primary z-10">Castro</div>
			<span class="color-neutral-light z-10 mt-2 text-xl font-light">Product Engineer | Frontend Specialist</span>
		</div>

		<div class="text-xl mt-8 font-light color-neutral w-full">
			Crafting impactful digital solutions for over 6 years. I build intuitive products
			through front-end development and design, blending code and data to improve lives.
		</div>

		<div class="flex w-full gap-5 mt-10">
			<a
				class="bg-white hover:shadow-lg hover:shadow-blue-100 z-50 w-full cursor-pointer outline-0 hover:outline-1 hover:outline-blue-400 flex items-center justify-center gap-3 py-4 px-8 rounded-2xl transition-all"
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
