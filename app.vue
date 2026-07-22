<template>
	<div class="w-full min-h-screen background-design px-26 py-8 relative">
		<div class="background-lightning" />
		<div class="background-circle" />
		<NuxtPage />
	</div>
</template>

<style scoped>

.background-design {
	background: #edf0f1;
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
	width: 40%;
	border-radius: 100%;
	background: #21ADFE;
	filter: blur(100px);
	opacity: 0.06;
}

</style>
