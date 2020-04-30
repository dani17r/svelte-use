<script>
	//inport
	import {inputDalaySearch} from '../store/global'

	//variables
	let timeout = null

	//function-action
	let nameDelay = (event) => {
		clearTimeout(timeout)
		timeout = setTimeout(() =>{
			inputDalaySearch.update(event.target.value)
		}, 1200)
	}
</script>

<main>
	<input on:keyup={ nameDelay }>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
