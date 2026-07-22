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

		<div class="flex gap-3 mt-5 max-w-[400px]">
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
		</div>
	</div>
</template>
