<template>
	<div class="w-full flex flex-col gap-3 z-10">
		<slot name="title" />

		<div class="w-full relative">
			<!-- Image: only on desktop xl+ (1280px) -->
			<div class="hidden xl:block absolute -top-[4%] right-0 z-10">
				<img
					:src="imageSrc"
					alt="Project image"
				>
			</div>

			<div
				class="relative overflow-hidden w-full flex flex-col gap-4 justify-center rounded-2xl card-content
					py-6 px-6
					xl:py-6 xl:px-8 xl:min-h-[265px]"
				:style="{ background: gradientColor }"
			>
				<img
					v-if="logoSrc"
					:src="logoSrc"
					alt="Project logo"
					width="150px"
				>

				<div
					class="w-full xl:w-[55%] text-sm font-normal z-10"
				>
					{{ text }}
				</div>

				<!-- Light effect -->
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

.card-content {
	font-weight: 300;
	border: 1.7px solid v-bind(computedLightEffectColor);
	color: v-bind(computedTextColor);
}

.light-effect {
	position: absolute;
	height: 300px;
	width: 300px;
	background: v-bind(lightEffectColor);
	border-radius: 50%;
	filter: blur(60px);
	opacity: 0.3;
	top: -30%;
	right: -25%;
}

@media (min-width: 1280px) {
	.light-effect {
		top: -3%;
		right: 5%;
		opacity: 0.3;
	}
}

</style>
