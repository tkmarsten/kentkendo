<script>
	import '../app.css';
	import Register from '../components/Register.svelte';
	import header from '../lib/assets/header.jpg';
</script>

<main class="mb-16 space-y-8">
	<div
		class="relative grid min-h-screen place-items-center bg-cover bg-center"
		style="background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url({header});"
	>
		<div class="relative z-10 text-center text-white">
			<div>
				<h1 class="mb-5 text-5xl font-bold">Kent Kendo Club</h1>
				<p class="mb-5 text-xl">Start your kendo journey here!</p>
				<a href="#register">
					<button
						class="rounded-full bg-white/20 px-6 py-2 font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/30"
						>Learn more</button
					></a
				>
			</div>
		</div>

		<div
			role="alert"
			class="absolute bottom-10 flex items-center gap-2 rounded-lg bg-amber-100 p-4 text-amber-800"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 shrink-0 stroke-current"
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
	</div>

	<Register />

	<section class="place-self-center" id="schedule">
		<h2 class="text-center text-2xl">Schedule</h2>
		<div class="my-4 flex flex-col">
			<div class="text-center text-neutral-500">Current Quarter</div>
			<div class="rounded-xl bg-white p-6 shadow-sm">
				<h2 class="text-xl font-semibold">🍁 Autumn Quarter</h2>
				<h4 class="text-lg">Beginning: September 21, 2026 - December 14, 2026</h4>
				<h4 class="text-lg">Continuing: September 15, 2026 - December 14, 2026</h4>
				<h4 class="text-lg">Advanced: September 9, 2026 - December 16, 2026</h4>
			</div>
		</div>
	</section>

	<section class="place-self-center text-center" id="location">
		<h2 class="text-center text-2xl">Location</h2>
		<p>Kent Commons Community Center</p>
		<p>525 4th Ave N, Kent, WA 98030</p>
		<a href="https://maps.app.goo.gl/22tBAm1pKrzwomq66" target="_blank">
			<button
				class="mt-4 rounded-full border-2 border-dashed border-blue-600 px-4 py-2 text-blue-600 transition-colors hover:bg-blue-50"
				>Google Maps</button
			>
		</a>
	</section>

	<section class="text-center">
		<h2 class="text-2xl">Contact us</h2>
		<a href="mailto:kentkendoclub@gmail.com"
			><button class="mt-4 rounded-full border-2 border-red-500 px-4 py-2 text-red-500"
				>Email</button
			></a
		>
	</section>
</main>

<style lang="postcss">
	@reference "tailwindcss";

	:global(html) {
		background-color: theme(--color-gray-200);
	}
</style>
