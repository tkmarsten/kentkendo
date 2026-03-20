<script>
	import '../app.css';
	import BeginningIcon from '$lib/assets/beginning.png';
	import ContinuingIcon from '$lib/assets/continuing.png';
	import AdvancedIcon from '$lib/assets/advanced.png';
</script>

<main>
	<div
		class="hero min-h-screen"
		style="background-image: url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp);"
	>
		<div class="hero-overlay"></div>
		<div class="hero-content text-center text-neutral-content">
			<div class="max-w-md">
				<h1 class="mb-5 text-5xl font-bold">Kent Kendo Club</h1>
				<p class="mb-5 text-xl">Start your kendo journey here!</p>
				<a href="#register"> <button class="btn btn-soft">Learn more</button></a>
			</div>
		</div>
	</div>

	<div role="alert" class="alert alert-warning">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6 shrink-0 stroke-current"
			fill="none"
			viewBox="0 0 24 24"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
			/>
		</svg>
		<span>The website is currently undergoing a redesign! Thank you for your patience.</span>
	</div>

	<section class="m-10 flex justify-center gap-10" id="register">
		<div class="basis-1/3 rounded-xl bg-base-100 shadow-sm card-lg">
			<div class="card-body">
				<img src={BeginningIcon} alt="Beginning" class="aspect-square w-15" />
				<div class="flex justify-between">
					<h2 class="text-3xl font-bold">Beginning</h2>
				</div>
				<div>
					<p class="text-sm">Monday</p>
					<p class="text-sm">6:30-7:15pm</p>
				</div>
				<p>Learn the basic etiquette, manners, and foundations of kendo.</p>
				<div class="mt-6 flex gap-2">
					<a
						href="https://wakentweb.myvscloud.com/webtrac/web/iteminfo.html?Module=AR&FMID=51309704&InterfaceParameter=WebTrac"
						target="_blank"
						><button class="btn btn-outline btn-info">Register (7-14 years)</button></a
					>
					<a
						href="https://wakentweb.myvscloud.com/webtrac/web/iteminfo.html?Module=AR&FMID=51301011&InterfaceParameter=WebTrac"
						target="_blank"
						><button class="btn btn-outline btn-info">Register (15+ years)</button></a
					>
				</div>
			</div>
		</div>
		<div class="basis-1/3 rounded-xl bg-base-100 shadow-sm card-lg">
			<div class="card-body">
				<img src={ContinuingIcon} alt="Continuing" class="aspect-square w-15" />
				<div class="flex justify-between">
					<h2 class="text-3xl font-bold">Continuing</h2>
				</div>
				<div>
					<p class="text-default-500 text-sm">Monday</p>
					<p class="text-default-500 text-sm">7:15-8pm</p>
				</div>
				<p>
					Build upon what you have learned from the beginning quarter, combining techniques and
					applying them further.
				</p>
				<div class="mt-6 flex gap-2">
					<a
						href="https://wakentweb.myvscloud.com/webtrac/web/iteminfo.html?Module=AR&FMID=51309762&InterfaceParameter=WebTrac"
						target="_blank"
						><button class="btn btn-outline btn-info">Register (7-14 years)</button></a
					>
					<a
						href="https://wakentweb.myvscloud.com/webtrac/web/iteminfo.html?Module=AR&FMID=51301064&InterfaceParameter=WebTrac"
						target="_blank"
						><button class="btn btn-outline btn-info">Register (15+ years)</button></a
					>
				</div>
			</div>
		</div>
		<div class="basis-1/3 rounded-xl bg-base-100 shadow-sm card-lg">
			<div class="card-body">
				<img src={AdvancedIcon} alt="Advanced" class="aspect-square w-15" />
				<div class="flex justify-between">
					<h2 class="text-3xl font-bold">Advanced</h2>
				</div>
				<div>
					<p class="text-default-500 text-sm">Wednesday</p>
					<p class="text-default-500 text-sm">6:30-8pm</p>
				</div>
				<p>
					Utilize advanced techniques in real scenarios such as sparring, tournaments, and grade
					testings.
				</p>
				<div class="mt-6 flex gap-2">
					<a
						href="https://wakentweb.myvscloud.com/webtrac/web/iteminfo.html?Module=AR&FMID=51309820&InterfaceParameter=WebTrac"
						target="_blank"
						><button class="btn btn-outline btn-info">Register (7-14 years)</button></a
					>
					<a
						href="https://wakentweb.myvscloud.com/webtrac/web/iteminfo.html?Module=AR&FMID=51301118&InterfaceParameter=WebTrac"
						target="_blank"
					>
						<button class="btn btn-outline btn-info">Register (15+ years)</button></a
					>
				</div>
			</div>
		</div>
	</section>

	<section class="place-self-center" id="schedule">
		<h2 class="text-center text-2xl">2026 Schedule</h2>
		<div class="my-4 flex flex-col gap-4">
			<div class="card w-96 rounded-xl bg-base-100 shadow-sm card-md">
				<div class="card-body">
					<h2 class="card-title text-xl">🌸 Spring Quarter</h2>
					<h4 class="text-lg">April 1, 2026 - June 3, 2026</h4>
				</div>
			</div>
			<div class="card w-96 rounded-xl bg-base-100 shadow-sm card-md">
				<div class="card-body">
					<h2 class="card-title text-xl">☀️ Summer Quarter</h2>
					<h4 class="text-lg">June 10, 2026 - August 19, 2026</h4>
				</div>
			</div>
		</div>
	</section>

	<section class="place-self-center text-center" id="location">
		<h2 class="text-center text-2xl">Location</h2>
		<p>Kent Commons Community Center</p>
		<p>525 4th Ave N, Kent, WA 98030</p>
		<a href="https://maps.app.goo.gl/22tBAm1pKrzwomq66" target="_blank">
			<button class="btn mt-4 btn-dash btn-primary">Google Maps</button>
		</a>
	</section>
</main>

<style lang="postcss">
	@reference "tailwindcss";

	:global(html) {
		background-color: theme(--color-gray-200);
	}
</style>
