<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<script lang='ts'>
	// import type {quoteJSON} from './quoteJSON'
	import type {PageData} from './$types';
	let result_language: string;
	let text_input = '';
	let result_keywords: string;
	export let data: PageData;
	try{
		if(data) {
			if(data.hasOwnProperty("response")){
				const {response} = data;
				if(response.hasOwnProperty("document")){
					result_language = response.document.language;
					result_keywords = response.document.keywords;
					console.log(response);
					console.log(response.document);
				}else{
					alert("Try again!");
				}
			}
		}
		else{
			result_language = 'No result yet';
			result_keywords = 'No result yet';
		}
	}
	catch (err) {
	console.log(err);
	}
</script>
	

<h1>Text analysis</h1>
<div class="user_text">
	
	<div class="input_text">
		<p>Your text</p>
		<form
			method="post"
			id = "testformid"
		>
		<input style = "display:none" type = 'text' placeholder="Paste your text here..">
		<textarea form ="testformid" name='text_inp' id="taid" cols="35" rows = '25' wrap="soft">{text_input}</textarea>
		<div class="button_class">
			<button type = 'submit'>Analyse text</button>
		</div>
		
		</form>
		

		

		<!-- <textarea rows="20" cols="50" name="userstext" form="text_content">Paste your text here...</textarea> -->
	</div>
	<div class="result">
		<div class="result_language">
			<h3>Language</h3>
			<textarea rows="3" cols="35" form="text_content">{result_language}</textarea>

		</div>
		<div class="result_keywords">
			<h3>Keywords</h3>
			<textarea rows="17" cols="35" form="text_content">{result_keywords}</textarea>
		</div>
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