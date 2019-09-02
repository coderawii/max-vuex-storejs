import * as types from '../types'

const state = { // ovo je onaj isti obj kao u store.js, i cupamo odatle onaj properti za brojac i smestamo ovde
	brojac: 0
}

const getters = {
	// doubleBrojac: (state) => {
	// 	return state.brojac * 2
	// },

	// stringBrojac: state => {
	// 	return state.brojac + 'Clicks'
	// }

	// i sada kada smo importovali types, mozemo pomocu es6 sintakse da setujemo dinamicka imena propertija sa [] koji daju naznaku da se assajnuju imena u runntime
	[types.DOUBLE_COUNTER]: state => {
		return state.brojac * 2
	},

	[types.CLICK_COUNTER]: state => {
		return state.brojac + ' Clicks'
	}

	//* ali sada moram i da idem u AnotherResults.vue gde mapiramo ove metode, da promenimo imena, jer nece vise ovako raditi jer doubleCounte i stringCounter vise ne postoje. Btw, i tamo cemo morati da importujemo types
}

const mutations = {
	// inkrement: (state, pejloud) => { // ovaj payload je argument iz actions, da mozemo ovo da inkrementujemo by pejloud
	// 	// setTimeout() // NE SME< NECE RADITI!
	// 	// state.brojac++
	// 	state.brojac += pejloud
	// },

	// dekrement: (state, pejloud) => {
	// 	// state.brojac--
	// 	state.brojac -= pejloud
	// }
	[types.MUTATE_INCREMENT_COUNTER]: (state, pejloud) => {
        state.brojac += pejloud;
    },

	[types.MUTATE_DECREMENT_COUNTER]: (state, pejloud) => {
        state.brojac -= pejloud;
    },
}

const actions = {
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
	// }


	[types.COUNTER_INCREMENT]: ({ commit }, payload) => {
		commit(types.MUTATE_INCREMENT_COUNTER, payload)
	},

	[types.COUNTER_DECREMENT]: ({ commit }, payload) => {
		commit(types.MUTATE_DECREMENT_COUNTER, payload)
	},

	[types.COUNTER_INCREMENT_ASYNC]: ({ commit }, payload) => {
		setTimeout(() => {
			commit(types.MUTATE_INCREMENT_COUNTER, payload.by)
		}, payload.duration)
	},

	[types.COUNTER_DECREMENT_ASYNC]: ({ commit }, payload) => {
		setTimeout(() => {
			commit(types.MUTATE_DECREMENT_COUNTER, payload.by)
		}, payload.duration)
	}
}


export default {
	state: state, // iliti state
	mutations,
	actions,
	getters
}

// naravno ovo je ovako samo da bi nama bilo lakse snaci se, gde je sta, itd, ali sustina vuex je da sve bude centralizovano, a ovo je samo privremeno samo nama da se olaksa. I onda idemo u store.js i dodajemo novi properti modules da pozovemo ove particije rasparcane


//! e sad, mnogo je bitno da ne koristimo ista imena recimo ovde ovaj doubleBrojac, i sad recimo u getters da stavimo za neki const da je doubleBrojac, jer sve to na kraju bude merdzovano u store.js, i ne mogu da dele isto ime, dakle moramo sto posto biti sigurni da svi nasi getters, mutations, actions imaju jedinstven ime, i ne samo sto se tice u fajlu u kom su, dakle da je ograniceno na fajl, vec u svim ostalim fajlovima koji ce na kraju biti merdzovani/centralizovani u store.js.
//! za manej aplikacije to mozda ne bi bio problem da obratimo paznju, ili ono stavimo value pa na drugom mestu shared_value, ali za vece, bolje bi bilo na napravimo GLOBAL_VREDNOSTI. Te pravimo sad types.js u store folderu, i u types pravimo recimo konstannte koje ce imati UNIKATNA imena kojima cemo asajnovati imena za metode, propertije sto su u drugim fajlovima, itd, wtf.. hajmo u types.js