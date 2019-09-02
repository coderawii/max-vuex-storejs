<template>
	<div>
		<button class="btn btn-primary" @click="increment">Increment</button>&nbsp;
		<button class="btn btn-primary" @click="decrement">Decrement</button>
	</div>
</template>

<script>
export default {
	//! vuex tj store nam izmeju ostalog sluzi za centralizovanje nekih podataka, eventa i to, tipa da ne bi morali da gledamo ko s kim kounicira, koji child sa parentom, parent sa kojim childom, pa ovo prebacuj ovde, pa onda od njega onde itd, haoooticno je u velikim aplikacijama. Zaeman za to bi bila ok event bus preko kog se komunicira, ali i to je zajebano sa vecim aplikacijama
	methods: {
		increment() {
			// this.$emit('updated', 1) //* $emit za slanje eventa parentu, tj kliknemo u child a podaci se printuju parentu, event komunikacija child-parent je preko $emit
			this.$store.state.brojac++ //  isada mozemo u Results.vue da obrisemo onaj props: ['brojac'] i dodamo computed vue property u kom cemo staviri metod counter u kom cemo return counter iz store.state-a
		},
		decrement() {
			// this.$emit('updated', -1)
			this.$store.state.brojac--

		}
	}
}
</script>
