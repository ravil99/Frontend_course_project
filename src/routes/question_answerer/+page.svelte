<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>
<h1>Text analysis</h1>
<div class="user_question">
	
	<div class="input_question">
		<p>Your question</p>
		<form
			method="POST"
			action="?/enter"
			id="question"
		>
		<textarea rows="1" cols="100" name="userstext" form="question">Paste your question here...</textarea>
		</form>
		
	</div>
	<div class="answer">
		<textarea rows="20" cols="100">
			Question answer will be here...
		</textarea>

	</div>

</div>


<style>
	.user_question {
		text-align: center;
		
	}
	.answer{
		position: relative;
		top: 30pm;
	}

  </style>
