<script>
	//import
	import InputDalaySearch from './components/InputDelaySearch.svelte'
	import { inputDalaySearch } from './store/global'
	import { fade } from 'svelte/transition'

	//variables
	// let name = ''

	//state-subscribe
	// const subscribe = modelInput.subscribe(v => name = v)
	// onDestroy(unsubscribe)
</script>

<main>
	<InputDalaySearch />
	<h1>Hola { $inputDalaySearch || 'no te conosco!' }</h1>
	<p>lee como compilar una app svelte.</p>
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
