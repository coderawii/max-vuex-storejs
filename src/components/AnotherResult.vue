<template>
	<div>
		<!-- <p>Counter is {{ counter }}</p>
		<p>Number of clicks: {{ clicks }}</p> -->

		<p>Counter is {{ doubleBrojac }}</p>
		<p>Number of clicks: {{ stringBrojac }}</p>

		

	</div> 
	<!-- u root comp mozemo imati smo jedan element, samo jedan, u suprotno moramo da stavimo u div -->
</template> 

<script>
import { mapGetters } from 'vuex'
import * as types from '../store/types'

export default {

	//? bez mapGetters
	// computed: {
	// 	// counter() {
	// 	// 	return this.$store.getters.doubleBrojac
	// 	// },

	// 	// clicks() {
	// 	// 	return this.$store.getters.stringBrojac
	// 	// }

	// 	// i sad ovde je kao problem sto ok, za sad imam 2 store gettersa u computed propertyju, a sta kad budem imala jos i jos? morali bi ovo ponavljati za svaki getter sto je smor, a bilo bi odlicno da mogu ovo nekao automatski da radim i da imam pristup svim gettersima koje mi trebaju, i bilo bi super da mogu gore u {{}} da stavim tako recimo counter/clicks ili doubleBrojac/stringBrojac bez computed propertyja (za to nam je on za sad potreban). I zato vuex ima helper method koji mozemo da koristimo
	// 	//	tim metodom kreiramo sve computed propertije koji nam trebaju, njega moramo da importujemo iz vuex-a i zove se mapGetters
	// }
	//? sa mapGetters
	computed:
	{
		// ...mapGetters([ // i u ovom arrayu samo specifikujemo sve getterse iz store.js koje zelimo da koristimo
		// 		'doubleBrojac',
		// 		'stringBrojac'

		// 		// ili stavimo objekat i key: value pair
		// 		// {
		// 		// 	counter: 'doubleBrojac',
		// 		// 	clicks: 'stringBrojac'
		// 		// }
				
		// 	]), //! u pozadini ovo automatski kreira cmputed propertije koje je imenovao u doubleCounter i stringCounter i mapirao ih sa getters u store.js. I zato ih gore u template mzoemo pozivati sa doubleBrojac i stringBrojac.

		// 	// ourOwnComputerProperty() {
				
		// 	// }
		// } // medjutim, kako ako sad recimo zelim da napravim svoje neke leve computed propertije, nevezano sad za store.js, nemam gde da ih stavim, jer smo za computed stavili jednu f-ju mapGetters? E pa u es6 ima odlicna fora za ovo a to je spread operator (one tri tacke, ...) koje prave novi objekat u kom ce biti taj mapGetters i svi ostali koje dodamo posle, s tim sto moramo da stavimo mapGetters (i te koje budemo dodavali) u {}

		//* elem, sada ono gore vise ne mozemo koristi jer doubleBrojac i stringBrojac sa tim nazivima ne postoje, vec smo preko types napravili druge konstante. I sada u mapGetters() vise ne stavljamo ARRAY nego OBJEKAT. Stavicemo key-value, da key bude isti naziv kao prethodni tj doubleBrojac i stringBrojac, cisto zbog templejta jer smo tamo pozivali takva imena. I sada
		...mapGetters({
			doubleBrojac: types.DOUBLE_COUNTER,
			stringBrojac: types.CLICK_COUNTER
		})
	}
}
</script>