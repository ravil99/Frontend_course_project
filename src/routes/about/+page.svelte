<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="about-section">
	<h1>About Dreamteam</h1>
	<p>We are a team of website developers</p>
	<!-- <p>Resize the browser window to see that this page is responsive by the way.</p> -->
</div>

<h2 style="text-align:center">Our Team</h2>
<div class="row">
	<div class="column">
		<div class="card">
			<img src="src/lib/images/ravil.jpg" alt="Ravil" style="width:100%;height:380px" />
			<div class="container">
				<h2>Ravil</h2>
				<p class="title">CEO & Founder</p>
				<p>Finding the best and most modern solutions</p>
				<p>r.akhmetzhanov@innopolis.university</p>
			</div>
		</div>
	</div>

	<div class="column">
		<div class="card">
			<img src="/src/lib/images/aigerim.jpg" alt="Aigerim" style="width:100%;height:380px" />
			<div class="container">
				<h2>Aigerim</h2>
				<p class="title">Art Director</p>
				<p>Responsible for the general ideology of the projects</p>
				<p>a.gilmanova@innopolis.university</p>
			</div>
		</div>
	</div>

	<div class="column">
		<div class="card">
			<img src="src/lib/images/guzel.jpg" alt="Guzel" style="width:100%;height:380px" />
			<div class="container">
				<h2>Guzel</h2>
				<p class="title">Designer</p>
				<p>Creating better visual solutions</p>
				<p>gu.safiullina@innopolis.university</p>
			</div>
		</div>
	</div>
</div>

<style>
	body {
		font-family: Arial, Helvetica, sans-serif;
		margin: 0;
	}

	html {
		box-sizing: border-box;
	}

	*,
	*:before,
	*:after {
		box-sizing: inherit;
	}

	.column {
		float: left;
		width: 33.3%;
		margin-bottom: 16px;
		padding: 0 8px;
	}

	.card {
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
		margin: 8px;
	}

	.about-section {
		padding: 50px;
		text-align: center;
		background-color: #474e5d;
		color: white;
	}

	.container {
		padding: 0 16px;
	}

	.container::after,
	.row::after {
		content: '';
		clear: both;
		display: table;
	}

	.title {
		color: grey;
	}

	.button {
		border: none;
		outline: 0;
		display: inline-block;
		padding: 8px;
		color: white;
		background-color: #000;
		text-align: center;
		cursor: pointer;
		width: 100%;
	}

	.button:hover {
		background-color: #555;
	}

	@media screen and (max-width: 650px) {
		.column {
			width: 100%;
			display: block;
		}
	}
</style>
