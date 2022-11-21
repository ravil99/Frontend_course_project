<script lang="ts">
	import logo from '$lib/images/svelte-logo.svg';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="MindHelp app" />
</svelte:head>

<section class="main_content">
	<div class="Intro">
		<h1>
			User-friendly Artificial <br />Intelligence Helper<br />
		</h1>

		<h1>
			Use power of AI<br />for text or images! <br />
		</h1>
	</div>
	<ul class="features">
		<h1>
			MindHelp allows you to: <br />
		</h1>
		<li>Understand the language of an unknown text and substract the keywords.</li>
		<li>Understand the sentiment of a text.</li>
		<li>Blur the images.</li>
		<li>Detect all the objects in the image.</li>
	</ul>
	<div />
</section>

<section class="addition">
	<h1>Build on SvelteKit:</h1>
	<a href="https://kit.svelte.dev">
		<img src={logo} alt="SvelteKit" />
	</a>
</section>

<style>
	h1 {
		width: 100%;
	}

	.main_content {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		flex: 0.6;
	}

	.features {
		margin: var(--mb-1);
		padding: 0;
		line-height: 200%;
		font-size: var(--h3-font-size);
	}

	.addition {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
		flex: 0.6;
	}
</style>
