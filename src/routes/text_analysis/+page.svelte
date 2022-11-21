<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<script lang='ts'>
	// import type {quoteJSON} from './quoteJSON'
	import type {PageData} from './$types';
	let result_language = '';
	let text_input = '';
	let result_keywords= '';
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
			result_language = 'Please, try another text';
			result_keywords = 'Please, try another text';
		}
	}
	catch (err) {
	console.log(err);
	}

</script>
	

<h1>Text analysis</h1>
<div class="user_text">
	
	<div class="input_text">
		<h3>Your text</h3>
		<form
			method="post"
			id = "testformid"
		>
		<input style = "display:none" type = 'text' placeholder="Paste your text here..">
		<textarea form ="testformid" name='text_inp' id="taid" cols="35" rows = '25' wrap="soft">{text_input}</textarea>
		<div class="button_class">
			<button class="button-23" type = 'submit'>Analyse text</button>
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
	h3 {margin-left: 55px;}
	.result {
		position: absolute;
		right: 10px;
		top: 10px;	
	}

	/* CSS */
	.button-23 {
	background-color: #FFFFFF;
	border: 1px solid #222222;
	border-radius: 8px;
	box-sizing: border-box;
	color: #222222;
	cursor: pointer;
	display: inline-block;
	font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",sans-serif;
	font-size: 16px;
	font-weight: 600;
	line-height: 20px;
	margin: 0;
	outline: none;
	padding: 13px 23px;
	position: relative;
	text-align: center;
	text-decoration: none;
	touch-action: manipulation;
	transition: box-shadow .2s,-ms-transform .1s,-webkit-transform .1s,transform .1s;
	user-select: none;
	-webkit-user-select: none;
	width: auto;
	}

	.button-23:focus-visible {
	box-shadow: #222222 0 0 0 2px, rgba(255, 255, 255, 0.8) 0 0 0 4px;
	transition: box-shadow .2s;
	}

	.button-23:active {
	background-color: #F7F7F7;
	border-color: #000000;
	transform: scale(.96);
	}

	.button-23:disabled {
	border-color: #DDDDDD;
	color: #DDDDDD;
	cursor: not-allowed;
	opacity: 1;
	}

	textarea {
	margin-top: 10px;
	margin-left: 50px;
	-moz-border-bottom-colors: none;
	-moz-border-left-colors: none;
	-moz-border-right-colors: none;
	-moz-border-top-colors: none;
	background: none repeat scroll 0 0 rgba(0, 0, 0, 0.07);
	border-color: -moz-use-text-color #FFFFFF #FFFFFF -moz-use-text-color;
	border-image: none;
	border-radius: 6px 6px 6px 6px;
	border-style: none solid solid none;
	border-width: medium 1px 1px medium;
	box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12) inset;
	color: #555555;
	font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
	font-size: 1em;
	line-height: 1.4em;
	padding: 5px 8px;
	transition: background-color 0.2s ease 0s;
	}


	textarea:focus {
		background: none repeat scroll 0 0 #FFFFFF;
		outline-width: 0;
	}
  </style>