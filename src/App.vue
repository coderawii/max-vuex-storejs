<template>
	<div class="row">
		<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
			<h1>Vuex</h1>
			<!-- <app-result :brojac="counter"></app-result> -->
			<app-result></app-result>
			<!-- sad smo centralizovali podatke tipa za props i event emitere, ui store.js, mozemo i dole data da obrisemo sada -->
			<app-another-result></app-another-result>
			<hr>
			<!-- <app-counter @updated="counter += $event"></app-counter> -->
			<app-counter></app-counter>
			<app-another-counter></app-another-counter>
			<hr>
			<input type="text" :value="val"><span>:value="val"</span><br>
			<!-- nije mi jasno sto ovo :value mora da bude value, a ne neko drugo ime. One-way binding -->
			<input type="text" v-model="val"><span>v-model="val", a sa get() i set() u computed-u radi</span><br>
			<!-- two-way binding. i sada kada kucamo u ovaj input gde je v-model, ne azurira sew automatski vrednost za value tj sta sto smo tu ukucali, ne oslikava se automatski na vrednost (tj f-ju valueState) u state-u. Valjda jer nemamo setters. Izadje error: Computed property "val" was assigned to but it has no setter. -->
			
			<input type="text" :value="val" @input="updateVal"><span>:value="val" @input="updateVal"</span>
			<p>{{ val }}</p>
			
		</div>
	</div>
</template>

<script>
import Counter from './components/Counter.vue'
import Result from './components/Result.vue'
import AnotherResult from './components/AnotherResult.vue'
import AnotherCounter from './components/AnotherCounter.vue'

export default {
	name: 'app',
	components: {
		appCounter: Counter,
		appResult: Result,
		appAnotherResult: AnotherResult,
		appAnotherCounter: AnotherCounter
	},

	// data() {
	// 	return {
	// 		counter: 0
	// 	}
	// }

	computed: { // za computed properti mozemo da kor get() i set() metode, mada je to veeeoma retko da se ovako radi, jeer vecinu vremena zelimo samo da getujemo podatke za sta i jeste computed properti, ali je moguce. U computed se stavlja nesto zavisi od neceg drugog i recalculate se, retko kad se setuje neka vrednost
		// val() {
		// 	return this.$store.getters.valueState
		// }

		//? sa get i set
		val: {
			get(){
				return this.$store.getters.valueState
			},

			set(value) {
				this.$store.dispatch('apdejtValue', value)
			}
		}
	},

	methods: {
		updateVal(event) {
			this.$store.dispatch('apdejtValue', event.target.value)
		}
	}
}
</script>
