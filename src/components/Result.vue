<template>
	<p>Counter is {{ counter }}</p>
	<!-- ovde se poziva f-ja iz computed propertyja, bez zagrada jelte -->
</template> 

<script>
export default {
	// props: ['brojac'] // zbog dodavanja store.js-a, brisemo ovo props i dodajemo computed vue property u kom cemo staviri metod counter u kom cemo return counter iz store.state-a
	computed: {
		counter() {
			// return this.$store.state.brojac // i sada mozemo u App.vue da obrisemo onaj napravljeni event emiter i bajnd za props
			return this.$store.getters.doubleBrojac
		}
	}
}
</script>