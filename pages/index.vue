<template>
	<div>
		<div
			v-if="$device.isDesktop"
			class="w-full flex flex-col items-center"
		>
			<div class="flex w-4/5 items-center justify-center justify-self-center">
				<NavigationMenu active-nav-item='home' />
			</div>

			<div class="background-lightning" />

			<div class="background-circle" />

			<div class="w-full h-[60svh] -ml-12 mt-24 z-50 flex items-center justify-center gap-16">
				<div class="flex flex-col gap-3 max-w-[500px] mt-5 -ml-10 left-information">
					<div class="text-6xl font-black flex flex-col items-start relative">
						<img
							class="elipse-detail"
							src="/img/elipse-detail.png"
						>

						<div class="color-neutral z-10">João Paulo</div>

						<div class="color-primary z-10">Castro</div>

						<span class="color-neutral-light z-10 mt-2 text-xl font-light">UX Designer | Frontend Developer</span>
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

				<div class="relative justify-center illustration-container anim-illustration">
					<div class="profile-photo">
						<img
							src="/img/picture.svg"
							alt="Picture"
						>
					</div>

					<div class="orbit-path orbit-path-1">
						<OrbitCard
							title="UX/UI Specialist"
							skills="Design Thinking | Figma | Framer"
						/>
					</div>

					<div class="orbit-path orbit-path-2">
						<OrbitCard
							title="Frontend Developer"
							skills="JavaScript | Vue.js | Nuxt.js"
						/>
					</div>

					<div class="orbit-path orbit-path-3">
						<OrbitCard
							title="Data Scientist"
							skills="Python | Scikit-Learn | Pandas"
						/>
					</div>
				</div>
			</div>
		</div>

		<div
			v-else
			class="w-full h-full mt-2"
		>
			<div class="w-full h-full flex flex-col justify-center">
				<div class="w-full flex justify-center">
					<img
						src="/img/logo.svg"
						alt="logo"
						width="80px"
					>
				</div>

				<div class="mt-5">
					<NavigationMenu active-nav-item='home' />
				</div>

				<div class="text-5xl mt-16 font-black relative flex flex-col items-start">
					<img
						class="elipse-detail-mobile"
						src="/img/elipse-detail.png"
					>

					<div class="color-neutral z-10">João Paulo</div>

					<div class="color-primary z-10">Castro</div>

					<span class="color-neutral-light z-10 mt-2 text-sm font-light">UX Designer | Frontend Developer</span>
				</div>

				<div class="text-lg mt-8 font-light color-neutral w-full">
					Crafting impactful digital solutions for over 6 years. I build intuitive products
					through front-end development and design, blending code and data to improve lives.
				</div>

				<div class="flex flex-col w-full gap-4 mt-8">
					<div
						class="bg-white w-full flex items-center justify-center gap-3 py-4 px-8 rounded-2xl"
						@click="openLinkedin"
					>
						<img
							src="/img/linkedin.svg"
							alt="LinkedIn"
							width="28"
						>

						<span class="color-neutral-dark">LinkedIn</span>
					</div>

					<div
						class="bg-white w-full flex items-center justify-center gap-3 py-4 px-8 rounded-2xl"
						@click="openGithub"
					>
						<img
							src="/img/github.svg"
							alt="LinkedIn"
							width="28"
							@click="openGithub"
						>

						<span class="color-neutral-dark">GitHub</span>
					</div>

					<div
						class="bg-white w-full flex items-center justify-center gap-3 py-4 px-8 rounded-2xl"
						@click="openEmail"
					>
						<Icon
							name="uil:envelope"
							size="26"
							style="color: #6D99F5"
						/>

						<span class="color-neutral-dark">Contact me</span>
					</div>
				</div>
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

function openEmail() {
	window.location.href = 'mailto:joaopaulocastro@gmail.com';
}

</script>

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

.elipse-detail {
	position: absolute;
	top: -17%;
	left: -10%;
}

.elipse-detail-mobile {
	position: absolute;
	top: -35%;
	left: -10%;
}

.illustration-container {
	position: relative;
	width: 560px;
	height: 560px;
}

.profile-photo {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 1;
}

.profile-photo img {
	width: 400px;
	height: 400px;
}

.orbit-path {
	position: absolute;
	top: 50%;
	left: 50%;
	width: 0;
	height: 0;
	z-index: 10;
	animation: orbit-rotate 45s linear infinite;
}

.orbit-path-1 {
	animation-delay: 0s;
}

.orbit-path-2 {
	animation-delay: -15s;
}

.orbit-path-3 {
	animation-delay: -30s;
}

:deep(.orbit-path .orbit-card) {
	position: absolute;
	transform: translate(-50%, -50%) translateX(180px);
	animation: orbit-counter-rotate 45s linear infinite;
}

.orbit-path-1 :deep(.orbit-card) {
	animation-delay: 0s;
}

.orbit-path-2 :deep(.orbit-card) {
	animation-delay: -15s;
}

.orbit-path-3 :deep(.orbit-card) {
	animation-delay: -30s;
}

@keyframes orbit-rotate {
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
}

@keyframes orbit-counter-rotate {
	from {
		transform: translate(-50%, -50%) translateX(180px) rotate(0deg);
	}
	to {
		transform: translate(-50%, -50%) translateX(180px) rotate(-360deg);
	}
}

@media (max-width: 1500px) {
	.illustration-container {
		display: none;
	}

	.left-information {
		margin-left: 0;
	}
}

</style>
