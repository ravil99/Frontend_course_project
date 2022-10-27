<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>
<h1>Text analysis</h1>
<div class="user_text">
	
	<div class="input_text">
		<p>Your text</p>
		<form
			method="POST"
			action="?/enter"
			id="text_content"
		>
		</form>
		<textarea rows="20" cols="50" name="userstext" form="text_content">Paste your text here...</textarea>
	</div>
	<div class="result">
		<p>Language: Language result</p>
		<p>Keywords: Keywords result</p>
		<p>Analysis of text: analysis result</p>

	</div>

</div>


<style>
	.user_text {
		position: relative;
	}
	.result {
		position: absolute;
		right: 10px;
		top: 10px;	
	}
  </style>
