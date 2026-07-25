<template>
	<a
		class="simple-button"
		:style="{ '--hover-color': hoverColor }"
		:href="link"
		target="_blank"
		rel="noopener noreferrer"
	>
		<span class="simple-button-bg" />
		<span class="simple-button-content">
			<slot name="icon" />
			<span class="color-neutral-dark">{{ title }}</span>
		</span>
	</a>
</template>

<script setup>
defineProps({
	link: {
		type: String,
		required: true
	},
	title: {
		type: String,
		required: true
	},
	hoverColor: {
		type: String,
		default: '#8B5CF6'
	}
});
</script>

<style scoped>
.simple-button {
	position: relative;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
	padding: 0.75rem 1.75rem;
	border-radius: 1rem;
	cursor: pointer;
	z-index: 50;
	background: white;
	transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.simple-button:hover {
	transform: scale(1.03);
	box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.simple-button-bg {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: var(--hover-color);
	transform: scaleX(0);
	transform-origin: left;
	transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
	z-index: -1;
	border-radius: inherit;
}

.simple-button:hover .simple-button-bg {
	transform: scaleX(1);
}

.simple-button-content {
	position: relative;
	z-index: 1;
	display: flex;
	align-items: center;
	gap: 0.5rem;
}
.simple-button:hover .color-neutral-dark {
	color: white;
}

.simple-button:hover :deep(svg) {
	filter: brightness(0) invert(1);
}

@media (prefers-reduced-motion: reduce) {
	.simple-button,
	.simple-button-bg {
		transition: none;
	}
}
</style>
