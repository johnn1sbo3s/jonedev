<template>
    <div class="h-full">
        <div v-if="$device.isDesktop" class="flex flex-col items-center justify-between">
            <div class="flex w-4/5 items-center justify-center justify-self-center">
                <NavigationMenu active-nav-item='portfolio' />
            </div>

            <div class="background-lightning" />

            <div class="background-circle" />

            <div class="flex flex-col items-center justify-center gap-3">
                <div class="w-full mt-24 flex justify-center text-6xl font-black">
                    <div class="color-primary">My</div>

                    <div class="color-neutral">Portfolio</div>

                    <div class="color-primary">.</div>
                </div>

                <div class="text-xl text-gray-400 font-light">A collection of my work</div>

                <div class="flex flex-col justify-center w-4/5 gap-16 my-20">
                    <ProjectCard
                        v-for="project in projects"
                        :key="project.name"
                        :text="project.text"
                        :image-src="project.imageSrc"
                        :light-effect-color="project.lightEffectColor"
                        :text-color="project.textColor"
                        :gradient-color="project.gradient"
                        :logo-src="project.logoSrc"
                    >
                        <template #title>
                            <div class="flex items-center justify-between gap-3">
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
                                    <span>See project</span>

                                    <Icon
                                        name="uil:arrow-up-right"
                                        size="18"
                                    />
                                </button>
                            </div>
                        </template>
                    </ProjectCard>
                </div>
            </div>
        </div>

        <div
            v-else
            class="w-full h-full mt-2"
        >
            <div class="w-full h-full flex flex-col">
                <div class="w-full flex justify-center">
                    <img
                        src="/img/logo.svg"
                        alt="logo"
                        width="80px"
                    >
                </div>

                <div class="mt-5">
                    <NavigationMenu active-nav-item="portfolio" />
                </div>

                <div class="flex flex-col justify-center w-full gap-12 mt-8 mb-16">
                    <MobileProjectCard
                        v-for="project in projects"
                        :key="project.name"
                        :text="project.text"
                        :image-src="project.imageSrc"
                        :light-effect-color="project.lightEffectColor"
                        :text-color="project.textColor"
                        :gradient-color="project.gradient"
                        :logo-src="project.logoSrc"
                    >
                        <template #title>
                            <div
                                class="text-xl w-fit font-bold flex gap-2 hover:underline items-center cursor-pointer"
                                :style="{ color: project.titleColor }"
                                @click="openProject(project.link)"
                            >
                                {{ project.name }}

                                <Icon
                                    class="mt-0.5"
                                    name="uil:arrow-up-right"
                                    size="24"
                                />
                            </div>

                        </template>
                    </MobileProjectCard>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>

const projects = [
    {
        name: 'DataPlay Bets',
        text: `DataPlay Bets is a pre-match football betting project powered by data science.
            Built entirely in Python with Pandas and statistical modeling, it analyzes odds,
            league patterns, and match context to find profitable opportunities before kickoff.
            Over the past two years, I’ve developed and validated more than 20 profitable models,
            all rigorously backtested on 100,000+ matches from leagues worldwide.
            Each model runs through a pipeline of data cleaning, feature engineering, probability estimation,
            and post-processing filters. I use statistical distributions, custom filters, and real performance
            metrics to track results and refine strategies.`,
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
        text: `Cuida Design System is a scalable UI framework built to accelerate front-end development
            with consistency and clarity. Designed from scratch with a focus on real-world usability,
            it brings together a clean component library, token-based theming, and flexible layouts.
            Over time, I’ve built and refined 30+ components for it,
            with full support for responsive design and accessibility. The system is
            documented, versioned, and ready for integration in fast-moving product teams. Cuida
            isn’t just a UI kit, it’s a design-engineering bridge that speeds up delivery without
            compromising on quality or UX.`,
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
        text: `Dentuxo Board is a Trello-style task management interface designed as a UX portfolio project,
            in collaboration with Rafael Dias (@rafael.diasg on Instagram).
            As a high-fidelity Figma mockup, it showcases clean visual hierarchy, intuitive drag-and-drop
            interactions, and a layout optimized for task tracking in agile workflows. Created for the @dentuxo
            Instagram profile, the project reflects core UX principles—clarity, consistency, and user flow.
            Every element was crafted with intention: spacing, color, and feedback all follow best practices
            in interface design.`,
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
        text: `Minha Vez is an innovative dashboard that optimizes the management of service queues,
            organizing daily calls based on priorities defined by the reception desk. I actively participated
            in the initial conception of the project, creating flows and interactions that ensure an efficient
            and intuitive user experience. In addition, I managed the development team as Scrum Master, ensuring
            the delivery of a high-quality product that transforms the way services are organized.`,
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
        text: `Cidade Saudável is a web platform designed to support public health management across
            municipalities, with over 10 modules covering areas like Regulation, Endemic Control, and Family Health.
            I designed the landing page and have been actively involved in the platform’s ongoing evolution,
            creating new modules and improving existing ones. The project has impacted more than 2 million
            citizens and supports over 6,000 healthcare professionals. My work spans UI/UX design, front-end
            development, and continuous improvement.`,
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
        text: `The Housing Project streamlines government housing applications. Citizens apply through
            an intuitive form, with the system supporting multiple programs. A robust CMS allows administrators
            to manage these programs and applications efficiently. I was involved from the start, designing the
            landing page and citizen forms to ensure a user-friendly experience. Additionally, I contributed
            to the CMS development, creating a seamless process for both applicants and administrators.`,
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
        text: `I designed and assisted in the implementation of the company's landing page,
            focusing on creating a visually appealing and user-friendly experience. The goal was to effectively
            communicate the brand's message and guide visitors to key information and services. My contributions
            included the initial design concepts, user interface elements, and collaboration with the development
            team to ensure a seamless and responsive final product.`,
        imageSrc: '/img/sysvale.svg',
        logoSrc: '/img/sysvale-logo.svg',
        lightEffectColor: '#012147',
        gradient: 'linear-gradient(72deg, #07346B -8.58%, #0C4B97 57.84%, #1579F3 105.59%)',
        titleColor: '#07346A',
        textColor: '#FFFFFF',
        link: 'https://sysvale.com/',
    },
]

function openProject(link) {
    window.open(link, '_blank');
}

</script>

<style lang="css" scoped>

.background-design {
    height: 100%;
    background: #edf0f1;
}

.background-lightning {
	position: absolute;
	background: #8B5CF6;
	height: 90px;
	width: 1200px;
	position: absolute;
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
	width: 50%;
	border-radius: 100%;
	background: #21ADFE;
	filter: blur(100px);
	opacity: 0.06;
}

.project-link {
    transition: all 0.3s ease;
}

</style>