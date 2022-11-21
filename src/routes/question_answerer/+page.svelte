<svelte:head>
	<title>Question answerer</title>
	<meta name="description" content="About this app" />
</svelte:head>
<script lang='ts'>
	import type {PageData} from './$types';
	let answer = 'Answer will be here';
	let result_keywords: string;
	export let data: PageData;
	try{
		if(data) {
			if(data.hasOwnProperty("response")){
				const {response} = data;
				if(response.hasOwnProperty("document")){
					answer = response.document.answer.answer;
					console.log(response);
					console.log(response.document);
				}else{
					alert("Try again!");
				}
			}
		}
		else{
			answer = 'No answer yet';
		}
	}
	catch (err) {
	console.log(err);
	}
</script>
<h1>Text analysis</h1>
<div class="user_question">
	
	<div class="input_question">
		<h3>Your question</h3>
		<form
			method="POST"
			id="question"
		>
		<textarea rows="1" cols="100" name="user_question" form="question">Paste your question here...</textarea>
		<textarea rows="1" cols="100" name="user_context" form="question">Add some context...</textarea>
		<div class="button_class">
			<button type = 'submit'>Find answer</button>
		</div>
		</form>
		
	</div>
	<div class="answer">
		<textarea rows="20" cols="100">
			{answer}
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
