<template>
	<div class="w-full min-h-screen background-design px-6 py-4 lg:px-10 lg:py-8 relative overflow-hidden">
		<div class="background-lightning" />
		<div class="background-circle" />
		<div class="w-full lg:hidden flex items-center justify-center border-b border-black/5">
			<div class="max-w-[1150px] mx-auto w-full pb-3">
				<LanguageSwitcher />
			</div>
		</div>
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
