<script>
	import FullPageNav from '../components/Navigation/FullPageNav.svelte';
	import PrimaryNav from '../components/Navigation/PrimaryNav.svelte';
	import { primaryNavLinks } from '../constants.js';
	export let segment;

	const indexRoute = '/';
</script>

<style>
	:global(#app-root) {
		/* 1. 1200px at 16px font size */
		max-width: 87.5em; /* 1. */
		min-height: 100vh;
		margin: auto;
		display: flex;
  		flex-direction: column;
	}

	main {
		/* 1. Forces main to fill remaining space */
		flex: 1; /* 1. */
		position: relative;
	}
</style>

{#if segment}
	<PrimaryNav
		{indexRoute}
		links={primaryNavLinks}
		page={segment}
	/>

	<main>
		<slot></slot>
	</main>
{:else}
	<FullPageNav links={primaryNavLinks} />
{/if}