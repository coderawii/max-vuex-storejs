import Vue from 'vue'
import Vuex from 'vuex'
import counter from './modules/counter'

import * as actions from './actions' // ovim * as actions, js ce da kreira objekat kojim cemo imati pristup imenima/f-jama u actions. I posto je sad ovo actions objekat, mozemo ga upisati dole kao actions samo, a ono actions {} obrisati. Isto mozemo i za mutations
import * as getters from './getters'
import * as mutations	 from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
	state: { // NEPROMENLJIVO IME PROPERTYJA
		// brojac: 0,
		vrednost: 0
	},
	// getters: {
		// doubleBrojac: (state) => {
		// 	return state.brojac * 2
		// },

		// stringBrojac: state => {
		// 	return state.brojac + 'Clicks'
		// },

		// valueState: state => {
		// 	return state.vrednost
		// }
	// },
	getters,

	// mutations: { // NEPROMENLJIVO IME PROPERTYJA, nesto kao setters, setting the store. Oni su tu jer je malo zeznuto da pratimo koja komponenta je editovala state, u kom trenutku itd
		//! u mutations smeju da idu samo SINHRONE akcije, ne sme nikako asinhrono, i recimo a sad hocu u inkrement da dodam setTimeout() NECE RADITI
		// inkrement: (state, pejloud) => { // ovaj payload je argument iz actions, da mozemo ovo da inkrementujemo by pejloud
		// 	// setTimeout() // NE SME< NECE RADITI!
		// 	// state.brojac++
		// 	state.brojac += pejloud
		// },

		// dekrement: (state, pejloud) => {
		// 	// state.brojac--
		// 	state.brojac -= pejloud
		// },

		// updateValue: (state, payload) => {
		// 	state.vrednost = payload // da payload bude vrednost koju zadasmo
		// }
		 

	// },
	mutations,
	
	// actions: { // NEPROMENLJIVO IME PROPERTYJA
		//! mutations su sinhrona radnja, medjutim, sta ako nam treba nesto asinhrono? zahvaljujuci actions to je moguce sada. Action je dodatna f-ja u kojoj mozemo da pokrecemo ASINHRONE akcije i u ovoj akciji, koju izvrsavamo/otpremamo iz komponente ili komponentom, gde onda commitujemo mutations, i komitujemo mutation SAMO ako/kada je asinhrona radnja odradjena. Mozemo da trigerujemo nasu akciju u komponenti, da je izvrsavamo tamo, onda dospevamo do servera, to traje par sekundi i nema stanja za komitovanej, stage se jos nije promenio. Dakle samo kada se neka nasa asinhrona radnja ili generalno getter f-ja zavrse, samo  utom trenutku komitujemo mutation tako da samo onda menjamo state u nasem store
		// inkrement: context => { // moze naravno isti naziv, nema dodira sa drugim propertijima van ovog skoupa. Context je argument koj ise prosledjuje by vuex automatski, i on nam u sustini omogucava pristup commit metodu u kom onda mozemo da komitujemo inkrement recimo
		// 	context.commit('inkrement') // inace valjda ovaj commit se koristi u komponentama, ne ovde, ali zbog ovog context objekta koji smo prosledili u nas action, imamo pristup tom nekom commit metodu, jer (context valjda) ima mng metoda i propertija naseg store-a. nisu potpuno iste kao u nasem store-u, sto cemo videti kada dodjemo do modula, ali opet ima commit metod koji moze da komituje (izvrsi) promenu, omogucava nam pristup gettersima itd, tako da imamo pristup nasem store-u generalno, ali ne bas svim svojstvima.
		// 		// elem mozemo i na drugi nacin, ne moramo citav context da prosledimo, mozemo { commit } (zahvaljujuci sintaksi es6 destructuring) i to ce da destruktuira objekat koji automatski dobijamo, i samo dohvatamo/pullujemo commit metod, a ostali su izgubljeni, a s obzirom da nam ne trebaju to je ok. U sustini to je samo brzi nacin da dohvatamo samo onaj metod koji nam treba, a ne i ostale

		// 	}
		// inkrement: ({ commit }, payload) => { // ovde nemamo nista asinhrono ali nije losa praksa ...pojma nemam sta. Inace, ova f-ja moze da ima argumente, recimo payload, ime moze bilo koje, ali kazemo payload jer ima neki korisni teret, nosi nesto sa sobom wtf
		// 	commit('inkrement', payload) // takodje taj payload prosledjujemo u mutations dakle onda ide i u ovaj commit
		// },

		// dekrement: ({ commit }, payload) => {
		// 	commit('dekrement', payload)
		// },

		// asyncInkrement: ({ commit }, payload) => {
		// 	setTimeout(() => {
		// 		commit('inkrement', payload.by)
		// 	}, payload.duration)
		// },

		// asyncDekrement: ({ commit }, payload) => {
		// 	setTimeout(() => {
		// 		commit('dekrement', payload.by)
		// 	}, payload.duration)
		// },

		// apdejtValue({commit}, payload) {
		// 	commit('updateValue', payload)
		// }
	// },
	actions,


	modules: {
		counter // conuter: counter, ovo couner je onaj import od gore
	}
})
