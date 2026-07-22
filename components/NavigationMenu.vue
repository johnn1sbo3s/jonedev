<template>
	<div v-if="$device.isDesktop" class="flex justify-between justify-self-center max-w-[1920px] items-center w-full z-10">
		<img
			class="cursor-pointer transition-transform duration-300 hover:scale-110"
			src="/img/logo.svg"
			alt="logo"
			width="75px"
			@click="redirectToHome"
		>

		<div class="flex items-center gap-8 color-neutral">
			<NuxtLink
				to="/"
				class="nav-link cursor-pointer h-[44px] w-[100px] flex flex-col justify-center items-center"
				:class="activeNavItem === 'home' ? 'active-nav-item' : ''"
			>
				<span>Home</span>

				<div
					v-if="activeNavItem === 'home'"
					class="w-1/3 h-[3px] bg-violet-500 border-radius-full active-indicator"
				/>
			</NuxtLink>

			<NuxtLink
				to="/portfolio"
				class="nav-link cursor-pointer h-[44px] w-[100px] flex flex-col justify-center items-center"
				:class="activeNavItem === 'portfolio' ? 'active-nav-item' : ''"
			>
				<span>Portfolio</span>

				<div
					v-if="activeNavItem === 'portfolio'"
					class="w-1/3 h-[3px] bg-violet-500 active-indicator"
				/>
			</NuxtLink>
		</div>

		<button
			class="button-primary btn-primary"
			@click="openEmail"
		>
			Contact me
		</button>
	</div>

	<div
		v-else
		class="w-full flex items-center justify-center"
	>
		<div class="flex items-center gap-4 color-neutral">
			<NuxtLink
				to="/"
				class="cursor-pointer hover:text-violet-500 h-[44px] w-[100px] flex flex-col justify-center items-center"
				:class="activeNavItem === 'home' ? 'active-nav-item' : ''"
			>
				<span>Home</span>

				<div
					v-if="activeNavItem === 'home'"
					class="w-1/3 h-[3px] bg-violet-500 border-radius-full"
				/>
			</NuxtLink>

			<NuxtLink
				to="/portfolio"
				class="cursor-pointer hover:text-violet-500 h-[44px] w-[100px] flex flex-col justify-center items-center"
				:class="activeNavItem === 'portfolio' ? 'active-nav-item' : ''"
			>
				<span>Portfolio</span>

				<div
					v-if="activeNavItem === 'portfolio'"
					class="w-1/3 h-[3px] bg-violet-500"
				/>
			</NuxtLink>
		</div>
	</div>
</template>

<script setup>

defineProps({
	activeNavItem: {
		type: String,
		default: 'home'
	}
});

const router = useRouter();

function redirectToHome() {
	router.push('/');
}

function openEmail() {
	window.location.href = 'mailto:joaopaulocastro@gmail.com';
}

</script>

<style lang="css" scoped>

.active-nav-item {
	color: #8B5CF6;
}

.active-indicator {
	animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
	from {
		width: 0;
	}
	to {
		width: 33.333%;
	}
}

.button-primary {
	background-color: #8B5CF6;
	color: #fff;
	border: none;
	padding: 10px 20px;
	border-radius: 20px;
	font-size: 16px;
	cursor: pointer;
	transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
}

.button-primary:hover {
	background-color: #733BF3;
	transform: translateY(-2px);
	box-shadow: 0 8px 20px rgba(139, 92, 246, 0.3);
}

.button-primary:active {
	transform: translateY(0);
}

</style>