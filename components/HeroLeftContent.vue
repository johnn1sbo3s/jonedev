<template>
	<div class="flex flex-col gap-3 max-w-[500px] mt-5 -ml-10 left-information">
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
			<div
				class="bg-white hover:shadow-lg hover:shadow-blue-100 z-50 w-full cursor-pointer outline-0 hover:outline-1 hover:outline-blue-400 flex items-center justify-center gap-3 py-4 px-8 rounded-2xl"
				@click="openLinkedin"
			>
				<img
					src="/img/linkedin.svg"
					alt="LinkedIn"
				>

				<span class="color-neutral-dark">LinkedIn</span>
			</div>

			<div
				class="bg-white hover:shadow-lg hover:shadow-blue-100 z-50 w-full cursor-pointer outline-0 hover:outline-1 hover:outline-blue-400 flex items-center justify-center gap-3 py-4 px-8 rounded-2xl"
				@click="openGithub"
			>
				<img
					src="/img/github.svg"
					alt="GitHub"
				>

				<span class="color-neutral-dark">GitHub</span>
			</div>
		</div>
	</div>
</template>

<script setup>
function openLinkedin() {
	window.open('https://www.linkedin.com/in/joaopaulo-castro/', '_blank');
}

function openGithub() {
	window.open('https://github.com/johnn1sbo3s/', '_blank');
}
</script>

<style lang="css" scoped>
.left-information {
	margin-left: -2.5rem;
}

.elipse-detail {
	position: absolute;
	top: -17%;
	left: -10%;
	width: 180px;
	height: 140px;
	background: white;
	border-radius: 50%;
	border: 2px solid #d1d5db;
	transform: rotate(-15deg);
	opacity: 0.8;
}
</style>
