<template>
	<div>
		<h5>AnotherCounter, mutations/actions btns: </h5>
		<!-- <button class="btn btn-primary" @click="inkrement(100)">Increment</button>&nbsp;
		<button class="btn btn-primary" @click="dekrement(50)">Decrement</button> -->
		<!-- mogu da saljem i vise argumenata, recimo u objektu, tj to je jedan argument, sa propertijima -->
		<button class="btn btn-primary" @click="asyncInkrement({by: 50, duration: 500})">Increment</button>&nbsp;
		<button class="btn btn-primary" @click="asyncDekrement({by: 50, duration: 500})">Decrement</button>
	</div>
</template>

<script>
// import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'

export default {
	//? bez mapMutations
	// methods: {
	// 	increment() {
	// 		this.$store.commit('inkrement') // i on onda trazi u store.js metod sa imenom inkrement
	// 	},
	// 	decrement() {
	// 		this.$store.commit('dekrement') 

	// 	}
	// }

	//? sa mapMutations i spread operator tj da mozemo dodati neke nase druge methods nevezane sa store.js. i koriscenje mutations direktno u komponenti. Za sihrone radnje to tako moze, za asihrone logicno ne moze, vec mora preko actions
	// methods: {
	// 	...mapMutations([
	// 		'inkrement',
	// 		'dekrement'
	// 	])
	// }

	//? sa mapActions, za asinhrone radnje obavezno, ali moze i za sinhrone
	methods: {
		...mapActions([
			'inkrement',
			'dekrement',
			'asyncInkrement',
			'asyncDekrement'
		])

		// inkrement(by) {
		// 	this.$store.dispatch('inkrement', by) // ovo je sve sto ustvari ova mapActions f-ja
		// 	// i recimo ova inkrement() f-ja moze da ima neki argument koji prosledjujemo, recimo by
		// }
	}
}
</script>
