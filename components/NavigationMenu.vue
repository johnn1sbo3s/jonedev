<template>
	<div class="flex justify-between items-center w-full z-10">
		<img
			class="cursor-pointer hidden lg:block"
			src="/img/logo.svg"
			alt="logo"
			width="75px"
			@click="redirectToHome"
		>

		<div
			class="flex items-center gap-4 lg:gap-8 color-neutral mx-auto lg:mx-0"
		>
			<NuxtLink
				v-for="item in navItems"
				:key="item.name"
				:to="item.path"
				class="cursor-pointer hover:text-violet-500 h-[44px] w-[100px] flex flex-col justify-center items-center"
				:class="activeNavItem === item.name ? 'active-nav-item' : ''"
			>
				<span>{{ item.label }}</span>

				<div
					v-if="activeNavItem === item.name"
					class="w-1/3 h-[3px] bg-violet-500 rounded-full"
				/>
			</NuxtLink>
		</div>

		<button
			class="button-primary hover:shadow-lg hover:shadow-violet-200 hidden lg:block"
			@click="openEmail"
		>
			Contact me
		</button>
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

const navItems = [
	{ name: 'home', label: 'Home', path: '/' },
	{ name: 'portfolio', label: 'Portfolio', path: '/portfolio' }
];

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

.button-primary {
	background-color: #8B5CF6;
	color: #fff;
	border: none;
	padding: 10px 20px;
	border-radius: 20px;
	font-size: 16px;
	cursor: pointer;
	transition: background-color 0.3s ease;
}

.button-primary:hover {
	background-color: #733BF3;
}
</style>
