<script lang="ts">
	import logo from '$lib/images/AI_icon.png';
	import NavMenu from '$lib/Nav_menu.svelte';
</script>

<header>
	<div class="corner">
		<img src={logo} alt="MindHelp_logo" />
	</div>

	<div class="proj__name">
		<p class="name__data">MindHelp</p>
	</div>

	<!-- Improve visual by adding styles -->

	<!-- Add Props and/or Events -->
	<NavMenu />
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}


	.corner {
		width: 3em;
		height: 3em;
		padding: 1rem 0rem;
	}

	.corner img {
		width: 7em;
		height: 7em;
		object-fit: contain;
		margin-left: var(--mb-1);
		margin-right: var(--mb-1);
	}

	.proj__name {
		font: var(--font-mono);
	}

	.name__data {
		font-size: var(--h1-font-size);
	}
</style>
