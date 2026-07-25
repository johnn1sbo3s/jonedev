<template>
	<div class="flex justify-between items-center w-full z-10 mt-3 lg:mt-0">
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

		<div class="items-center gap-4 hidden lg:flex">
			<LanguageSwitcher />
			<button
				class="button-primary hover:shadow-lg hover:shadow-violet-200"
				@click="openEmail"
			>
				{{ $t('nav.contact') }}
			</button>
		</div>
	</div>
</template>

<script setup>
const { t } = useI18n()
const localePath = useLocalePath()
const router = useRouter()

defineProps({
	activeNavItem: {
		type: String,
		default: 'home'
	}
});

const navItems = computed(() => [
	{ name: 'home', label: t('nav.home'), path: localePath('/') },
	{ name: 'portfolio', label: t('nav.portfolio'), path: localePath('/portfolio') }
]);

function redirectToHome() {
	router.push(localePath('/'));
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
