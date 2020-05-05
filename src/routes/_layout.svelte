<script>
	import FullPageNav from '../components/Navigation/FullPageNav.svelte';
	import PrimaryNav from '../components/Navigation/PrimaryNav.svelte';
	import { primaryNavLinks } from '../constants.js';
	export let segment;

	const indexRoute = '/';
</script>

<style>
	.grid.main-layout {
		width: 100%;
		height: 100vh;
		grid-template-columns: 100%;
		grid-template-rows: auto 1fr;
	}

	.grid.main-layout > .banner {
		grid-column: 1 / -1;
		grid-row: 1 / 2;
	}

	.grid.main-layout > .content {
		grid-column: 1 / -1;
		grid-row: 2 / -1;
	}

	.grid.content {
		grid-template-columns: 100%;
		grid-template-rows: 100%;
	}

	.grid.content > * {
		grid-column: 1 / -1;
		grid-row: 1 / -1;
	}

	.content {
		overflow-y: scroll;
	}
</style>

{#if segment}
<div class="grid main-layout">
	<header class="banner">
		<PrimaryNav links={primaryNavLinks} page={segment} />
	</header>
	<section class="grid content" role="main">
		<slot></slot>
	</section>
</div>
{:else}
<FullPageNav links={primaryNavLinks} />
{/if}