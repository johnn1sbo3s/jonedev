<template>
	<div class="h-full flex flex-col items-center">
		<!-- Nav -->
		<div class="w-full flex justify-center" data-animate="delay-1">
			<div class="w-full max-w-[1150px]">
				<NavigationMenu active-nav-item="portfolio" />
			</div>
		</div>

		<!-- Title -->
		<div class="w-full mt-8 lg:mt-24 flex justify-center text-4xl lg:text-6xl font-black" data-animate="delay-2">
			<div class="color-primary">{{ $t('portfolio.my') }}</div>
			<div class="color-neutral">{{ $t('portfolio.sectionTitle') }}</div>
			<div class="color-primary">.</div>
		</div>

		<div class="text-lg lg:text-xl text-gray-400 font-light mt-1" data-animate="delay-3">
		{{ $t('portfolio.subtitle') }}
		</div>

		<!-- Projects -->
		<div class="flex flex-col justify-center w-full max-w-[1150px] gap-10 lg:gap-12 mt-4 mb-10 lg:mt-8 lg:mb-20 px-4 lg:px-0">
			<ProjectCard
				v-for="project in projects"
				:key="project.name"
				:text="project.text"
				:image-src="project.imageSrc"
				:light-effect-color="project.lightEffectColor"
				:text-color="project.textColor"
				:gradient-color="project.gradient"
				:logo-src="project.logoSrc"
				data-animate
			>
				<template #title>
					<!-- Desktop title -->
					<div class="hidden lg:flex items-center justify-between gap-3">
						<div
							class="text-2xl font-bold flex gap-1 hover:underline cursor-pointer"
							:style="{ color: project.titleColor }"
							@click="openProject(project.link)"
						>
							{{ project.name }}
						</div>

						<button
							class="project-link text-sm bg-none cursor-pointer hover:bg-violet-200 text-violet-500 py-2 px-4 rounded-md flex items-center gap-1"
							@click="openProject(project.link)"
						>
							<span>{{ $t('portfolio.seeProject') }}</span>
							<Icon name="uil:arrow-up-right" size="18" />
						</button>
					</div>

					<!-- Mobile title -->
					<div
						class="lg:hidden text-xl w-fit font-bold flex gap-2 hover:underline items-center cursor-pointer"
						:style="{ color: project.titleColor }"
						@click="openProject(project.link)"
					>
						{{ project.name }}
						<Icon class="mt-0.5" name="uil:arrow-up-right" size="24" />
					</div>
				</template>
			</ProjectCard>
		</div>
	</div>
</template>

<script setup>


useScrollAnimation();

const { t, tm, rt, locale } = useI18n()

const visualProps = [
	{
		name: 'DataPlay Bets',
		imageSrc: '/img/dataplay-bets.svg',
		logoSrc: '/img/dataplay-bets-logo.svg',
		lightEffectColor: '#24D88A',
		gradient: 'linear-gradient(72deg, #1E2D46 -8.58%, #27426B 36.98%, #2A4E84 105.59%)',
		titleColor: '#274470',
		textColor: 'white',
		link: 'https://dataplaybets.vercel.app/',
	},
	{
		name: 'Cuida Design System',
		imageSrc: '/img/cuida.svg',
		logoSrc: '/img/cuida-logo.svg',
		lightEffectColor: '#24D88A',
		gradient: 'linear-gradient(72deg, #EEFFF4 -8.58%, #FAFFFC 18.07%, #FFF 61.68%)',
		titleColor: '#2AC092',
		textColor: '#29343F',
		link: 'https://cuida.framer.wiki',
	},
	{
		name: 'Dentuxo Board',
		imageSrc: '/img/dentuxo.svg',
		logoSrc: '/img/dentuxo-logo.svg',
		lightEffectColor: '#BD5D1B',
		gradient: 'linear-gradient(72deg, #CDAF76 36.14%, #B38B5C 87.76%, #93603C 105.59%)',
		titleColor: '#905D3A',
		textColor: '#3F1D10',
		link: 'https://www.figma.com/design/8SNVK0EsBUh60hhA4Z3LKR/Dentuxo-Board?t=1qppbG2ZhppeNKV8-0',
	},
	{
		name: 'Minha Vez',
		imageSrc: '/img/minha-vez.svg',
		logoSrc: '/img/minha-vez-logo.svg',
		lightEffectColor: '#736EEC',
		gradient: 'linear-gradient(72deg, #E2DEFF -8.58%, #F4F4FF 18.07%, #FFF 61.68%), #D9D9D9',
		titleColor: '#6174D1',
		textColor: '#030B33',
		link: 'https://minhavez.com.br/',
	},
	{
		name: 'Cidade Saudável',
		imageSrc: '/img/cidade-saudavel.svg',
		logoSrc: '/img/cidade-saudavel-logo.svg',
		lightEffectColor: '#26AD5B',
		gradient: 'linear-gradient(72deg, #20AD57 -8.58%, #25B55D 41.92%, #45E885 105.59%)',
		titleColor: '#25BC60',
		textColor: '#FFFFFF',
		link: 'https://cidadesaudavel.com/',
	},
	{
		name: 'Habitação',
		imageSrc: '/img/habitacao.svg',
		logoSrc: '',
		lightEffectColor: '#ED3A0E',
		gradient: 'linear-gradient(72deg, #FF8567 -8.58%, #FFAE6A 16.12%, #FFB66A 105.59%)',
		titleColor: '#FF7C5C',
		textColor: '#41190A',
		link: 'https://habitacao.sysvale.com/',
	},
	{
		name: 'Landing Page - Sysvale',
		imageSrc: '/img/sysvale.svg',
		logoSrc: '/img/sysvale-logo.svg',
		lightEffectColor: '#012147',
		gradient: 'linear-gradient(72deg, #07346B -8.58%, #0C4B97 57.84%, #1579F3 105.59%)',
		titleColor: '#07346A',
		textColor: '#FFFFFF',
		link: 'https://sysvale.com/',
	},
]

const projects = computed(() => {
	const translated = tm('portfolio.projects')
	if (!Array.isArray(translated)) return []
	return translated.map((item, i) => ({
		...item,
		text: rt(item.description),
		...visualProps[i],
	}))
})

function openProject(link) {
	window.open(link, '_blank');
}
</script>

<style lang="css" scoped>

.project-link {
	transition: all 0.3s ease;
}

</style>
