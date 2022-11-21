<script lang="ts">
	import './styles.css';
	import Header from './Header.svelte';
	import github from '$lib/images/github.svg';
	import { onMount } from 'svelte';
	import { getAuth, onAuthStateChanged, type User } from 'firebase/auth';
	import { app } from '$lib/firebase/client';
	import { goto } from '$app/navigation';

	let user: User | null;

	onMount(async () => {
		const auth = getAuth(app);
		onAuthStateChanged(auth, (newUser) => {
			user = newUser;
			if (!user) {
				goto('/auth/signin');
			}
		});
	});
</script>

<div class="app">
	{#if user}
		<Header />
	{/if}
	<main>
		<slot />
	</main>

	<footer>
		<ul class="adress">
			<li>1, Universitetskaya Str.,</li>
			<li>Innopolis, 420500, Russia</li>
			<li>
				<a href="https://innopolis.university/en/"> Innopolis University </a>
			</li>
		</ul>

		<ul class="corner">
			<li>Source code</li>
			<li>
				<a href="https://github.com/aigerimu/Frontend_course_project">
					<img src={github} alt="GitHub" />
				</a>
			</li>
		</ul>
	</footer>
</div>

<style>
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
		line-height: 200%;
	}

	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	.corner {
		font-size: var(--h2-font-size);
		margin-left: var(--mb-1);
		margin-right: var(--mb-1);
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	.adress {
		margin-left: var(--mb-1);
		margin-right: var(--mb-1);
		font-size: var(--h2-font-size);
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
