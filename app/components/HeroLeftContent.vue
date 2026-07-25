<template>
	<div class="flex flex-col gap-2 min-w-0 shrink items-center lg:items-start">
		<div class="text-5xl lg:text-6xl font-black flex flex-col items-center lg:items-start relative">
			<div class="absolute -left-4 -top-2 h-28 w-28 lg:-left-6 lg:-top-3 lg:h-36 lg:w-36 rounded-full bg-white/40 border-l-2 border-violet-200/80" />

			<div class="color-neutral z-10">João Paulo</div>
			<div class="color-primary z-10">Castro</div>
		<span class="color-neutral z-10 mt-2 text-sm lg:text-xl font-semibold lg:font-semibold">
			{{ $t('hero.title') }}
		</span>
		</div>

		<div class="text-base mt-2 font-light color-neutral-light w-full text-center lg:text-left">
			{{ $t('hero.description') }}
		</div>

		<div class="flex flex-col lg:flex-row w-full gap-2 mt-4 max-w-[400px] z-50">
		<SimpleButton
			link="https://www.linkedin.com/in/joaopaulo-castro/"
			title="LinkedIn"
			hover-color="#0A66C2"
		>
			<template #icon>
				<Icon name="lucide:linkedin" :size="22" style="color: #6D99F5" />
			</template>
		</SimpleButton>

			<SimpleButton
				link="https://github.com/johnn1sbo3s/"
				title="GitHub"
				hover-color="#181717"
			>
				<template #icon>
					<Icon name="lucide:github" :size="22" style="color: #6D99F5" />
				</template>
			</SimpleButton>

			<div class="lg:hidden">
				<SimpleButton
					link="mailto:joaopaulocastro@gmail.com"
					:title="$t('nav.contact')"
					hover-color="#6D99F5"
				>
					<template #icon>
						<Icon name="lucide:mail" :size="22" style="color: #6D99F5" />
					</template>
				</SimpleButton>
			</div>
		</div>
	</div>
</template>

