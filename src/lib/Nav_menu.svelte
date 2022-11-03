<script lang="ts">
	// import { page } from '$app/stores';
	let menu: boolean = false;
</script>

<!-- Navigation element -->
<nav class="nav bd-container">
	<div class={menu === true ? 'nav__menu show-menu' : 'nav__menu'}>
		<!-- Can be changed to #each loop nav__link element-->

		<ul class="nav__list">
			<!-- Home-->
			<li class="nav__item">
				<a href="/" class="nav__link active-link" on:click={() => (menu = !menu)}>
					<i class="bx bx-home-alt-2 nav___icon" />Home
				</a>
			</li>

			<!-- Text analysis-->
			<li class="nav__item">
				<a href="/text_analysis" class="nav__link" on:click={() => (menu = !menu)}>
					<i class="bx bx-text" />Text analysis
				</a>
			</li>

			<!-- Question answerer-->
			<li class="nav__item">
				<a href="/question_answerer" class="nav__link" on:click={() => (menu = !menu)}>
					<i class="bx bx-question-mark" />Question answerer
				</a>
			</li>

			<!-- Image blurring-->
			<li class="nav__item">
				<a href="/image_blurring" class="nav__link" on:click={() => (menu = !menu)}>
					<i class="bx bx-wink-smile" /> Image blurring
				</a>
			</li>

			<!-- Image detection-->
			<li class="nav__item">
				<a href="/image_detection" class="nav__link" on:click={() => (menu = !menu)}>
					<i class="bx bx-wink-smile" />Image detection
				</a>
			</li>
			<!-- Sverdle -->
			<li class="nav__item">
				<a href="/sverdle" class="nav__link" on:click={() => (menu = !menu)}>
					<i class="bx bx-wink-smile" />Sverdle
				</a>
			</li>
		</ul>
	</div>

	<!-- Can be resolved by changing EsLint configurations-->
	<div class="nav__toggle" on:click={() => (menu = !menu)}>
		<i class="bx bx-grid-alt" />
	</div>
</nav>

<style>
	.nav__menu {
		position: fixed;
		top: -100%;
		left: 80%;
		width: 20%;
		padding: 2rem 1.5rem;
		background-color: var(--body-color);
		box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
		border-radius: 1rem 1rem 0 0;
		z-index: var(--z-fixed);
		transition: 0.3s;
	}

	.show-menu {
		top: var(--header-height);
	}

	.nav {
		height: var(--header-height);
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.bd-container {
		max-width: 3rem;
		width: calc(100% - 3rem);
		margin-left: var(--mb-1);
		margin-right: var(--mb-1);
	}

	.nav__list {
		display: flex;
		flex-direction: column;
		gap: 2 rem;
	}

	.nav__item {
		text-align: center;
	}

	.nav__link {
		display: flex;
		flex-direction: column;
		font-size: var(--smaller-font-size);
		color: var(--text-color-light);
	}

	.nav__link:hover {
		color: var(--title-color);
	}

	.active-link {
		color: var(--title-color);
	}

	.nav__toggle {
		width: 0;
		height: 0;
		color: var(--title-color);
		font-size: 1.2rem;
		cursor: pointer;
	}
</style>
