<script lang="ts">
  import favicon from "$lib/assets/favicon.svg";

  let { children } = $props();
  import "../app.css";

  import Nav from '../components/Nav.svelte';
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<Nav />

{@render children()}
