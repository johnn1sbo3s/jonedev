<template>
	<div class="w-full flex flex-col gap-3 z-10 project-card-wrapper">
		<slot name="title"/>

		<div class="w-full h-[260px] relative">
			<div class="image-container">
				<img
					:src="imageSrc"
					alt="Project image"
				>
			</div>

			<div
				class="relative overflow-hidden w-full h-[260px] flex flex-col gap-4 justify-center py-4 px-12 rounded-2xl card-content"
				:style="{ background: gradientColor }"
			>
				<img
					v-if="logoSrc"
					:src="logoSrc"
					alt="Project logo"
					width="150px"
				>

				<div class="lg:w-[55%] text-sm z-10 text-container">
					{{ text }}
				</div>

				<div class="light-effect" />
			</div>
		</div>
	</div>
</template>

<script setup>

const props = defineProps({
	text: {
		type: String,
		required: true,
	},
	imageSrc: {
		type: String,
		default: '/img/dataplay-bets.svg',
	},
	logoSrc: {
		type: String,
		default: '',
	},
	gradientColor: {
		type: String,
		default: 'linear-gradient(72deg, #1E2D46 -8.58%, #27426B 36.98%, #2A4E84 105.59%)',
	},
	lightEffectColor: {
		type: String,
		default: '#24D88A',
	},
	textColor: {
		type: String,
		default: '#fff',
	}
});

const computedLightEffectColor = computed(() => props.lightEffectColor);
const computedTextColor = computed(() => props.textColor);

</script>

<style lang="css" scoped>

.project-card-wrapper {
	transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card-wrapper:hover {
	transform: scale(1.02);
	box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.card-content {
	font-weight: 300;
	border: 1.7px solid v-bind(computedLightEffectColor);
	color: v-bind(computedTextColor);
	transition: border-color 0.3s ease;
}

.project-card-wrapper:hover .card-content {
	border-color: v-bind(computedLightEffectColor);
}

.image-container {
	position: absolute;
	top: -4%;
	right: 0;
	z-index: 10;
	transition: transform 0.3s ease;
}

.project-card-wrapper:hover .image-container {
	transform: translateY(-5px);
}

.light-effect {
	position: absolute;
	top: -3%;
	right: 5%;
	height: 300px;
	width: 300px;
	background: v-bind(lightEffectColor);
	border-radius: 50%;
	filter: blur(60px);
	opacity: 0.3;
	animation: pulse 4s ease-in-out infinite;
}

@keyframes pulse {
	0%, 100% { opacity: 0.3; }
	50% { opacity: 0.5; }
}

@media (max-width: 1400px) {
	.image-container {
		display: none;
	}

	.text-container {
		width: 100%;
	}
}

</style>