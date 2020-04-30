import { writable } from 'svelte/store'
import { tweened } from 'svelte/motion'

function name() {
	const { subscribe, set, update } = tweened('')

	return {
		subscribe,
        update: (value) => update(v => v = value),
	}
}
export const inputDalaySearch = name()
