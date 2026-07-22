<template>
	<div class="w-full flex flex-col gap-2 z-10 mobile-card-wrapper">
		<slot name="title"/>

		<div class="w-full">
			<div
				class="relative overflow-hidden w-full flex flex-col gap-4 justify-center py-5 px-5 rounded-2xl card-content"
				:style="{ background: gradientColor }"
			>
				<img
					v-if="logoSrc"
					:src="logoSrc"
					alt="Dataplay bets logo"
					width="150px"
				>

				<div class="text-sm">
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

.mobile-card-wrapper {
	transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.mobile-card-wrapper:active {
	transform: scale(0.98);
}

.card-content {
	font-weight: 300;
	border: 1.7px solid v-bind(computedLightEffectColor);
	color: v-bind(computedTextColor);
	transition: border-color 0.3s ease;
}

.light-effect {
	position: absolute;
	top: -30%;
	right: -25%;
	height: 300px;
	width: 300px;
	background: v-bind(lightEffectColor);
	border-radius: 50%;
	filter: blur(60px);
	opacity: 0.12;
	animation: pulse 4s ease-in-out infinite;
}

@keyframes pulse {
	0%, 100% { opacity: 0.12; }
	50% { opacity: 0.2; }
}

</style>