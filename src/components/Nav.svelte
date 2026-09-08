<script>
	import { resolve } from '$app/paths';
	import Logo from '$lib/assets/kent.png';
	import { slide } from 'svelte/transition';

	let open = $state(false);
	let navHeight = $state(0);

	$effect(() => {
		document.body.style.overflow = open ? 'hidden' : '';
		return () => {
			document.body.style.overflow = '';
		};
	});

	const links = [
		{
			href: '#register',
			label: 'Register'
		},
		{
			href: '#schedule',
			label: 'Schedule'
		},
		{
			href: '#location',
			label: 'Location'
		}
	];
</script>

{#snippet navLinks()}
	{#each links as link (link.href)}
		<li>
			<a href={link.href} onclick={() => (open = false)}>{link.label}</a>
		</li>
	{/each}
{/snippet}

<nav class="border-b border-neutral-300 bg-neutral-100 p-2" bind:clientHeight={navHeight}>
	<div class="mx-auto flex max-w-5xl items-center justify-between px-5">
		<a href={resolve('/')}>
			<img src={Logo} alt="Logo" class="w-8" />
		</a>

		<button
			type="button"
			class="relative z-50 p-2 sm:hidden"
			aria-label="Toggle menu"
			aria-expanded={open}
			onclick={() => (open = !open)}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6 stroke-current"
				fill="none"
				viewBox="0 0 24 24"
			>
				{#if open}
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					/>
				{:else}
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					/>
				{/if}
			</svg>
		</button>

		<ul class="hidden gap-6 sm:flex">
			{@render navLinks()}
		</ul>
	</div>

	{#if open}
		<ul
			class="fixed inset-x-0 bottom-0 z-40 flex flex-col items-end gap-4 overflow-y-auto bg-neutral-100 px-10 py-4 text-2xl sm:hidden"
			style="top: {navHeight}px"
			transition:slide={{ duration: 200 }}
		>
			{@render navLinks()}
		</ul>
	{/if}
</nav>
