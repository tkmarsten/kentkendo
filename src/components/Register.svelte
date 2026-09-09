<script>
	import BeginningIcon from '$lib/assets/beginning.png';
	import ContinuingIcon from '$lib/assets/continuing.png';
	import AdvancedIcon from '$lib/assets/advanced.png';

	const content = [
		{
			title: 'Beginning',
			icon: BeginningIcon,
			day: 'Monday',
			time: '6:30-7:15pm',
			description: 'Learn the basic etiquette, manners, and foundations of kendo.',
			youthURL:
				'https://wakentweb.myvscloud.com/webtrac/web/iteminfo.html?Module=AR&FMID=57554114&InterfaceParameter=WebTrac',
			adultURL:
				'https://wakentweb.myvscloud.com/webtrac/web/iteminfo.html?Module=AR&FMID=57533784&InterfaceParameter=WebTrac'
		},
		{
			title: 'Continuing',
			icon: ContinuingIcon,
			day: 'Monday',
			time: '7:15-8pm',
			description:
				'Build upon what you have learned from the beginning quarter, combining techniques and applying them further.',
			youthURL:
				'https://wakentweb.myvscloud.com/webtrac/web/iteminfo.html?Module=AR&FMID=57554150&InterfaceParameter=WebTrac',
			adultURL:
				'https://wakentweb.myvscloud.com/webtrac/web/iteminfo.html?Module=AR&FMID=57533815&InterfaceParameter=WebTrac'
		},
		{
			title: 'Advanced',
			icon: AdvancedIcon,
			day: 'Wednesday',
			time: '6:30-8pm',
			description:
				'Utilize advanced techniques in real scenarios such as sparring, tournaments, and grade testings.',
			youthURL:
				'https://wakentweb.myvscloud.com/webtrac/web/iteminfo.html?Module=AR&FMID=57554180&InterfaceParameter=WebTrac',
			adultURL:
				'https://wakentweb.myvscloud.com/webtrac/web/iteminfo.html?Module=AR&FMID=57533844&InterfaceParameter=WebTrac'
		}
	];
</script>

<section class="mx-auto grid max-w-7xl grid-cols-3 gap-8" id="register">
	{#each content as data (data.title)}
		<div class="rounded-xl bg-white p-8 shadow-sm">
			<img src={data.icon} alt={data.title} class="aspect-square w-15" />
			<div class="flex justify-between">
				<h2 class="text-3xl font-bold">{data.title}</h2>
			</div>
			<div>
				<p class="text-sm">{data.day}</p>
				<p class="text-sm">{data.time}</p>
			</div>
			<p>{data.description}</p>
			<div class="mt-6 flex gap-2">
				<a href={data.youthURL} target="_blank" rel="external"
					><button
						class="rounded-full border border-blue-400 px-4 py-2 text-sm font-medium text-blue-600 transition-colors hover:bg-blue-50"
						>Register (7-14 years)</button
					></a
				>
				<a href={data.adultURL} target="_blank" rel="external"
					><button
						class="rounded-full border border-blue-400 px-4 py-2 text-sm font-medium text-blue-600 transition-colors hover:bg-blue-50"
						>Register (15+ years)</button
					></a
				>
			</div>
		</div>
	{/each}
</section>
