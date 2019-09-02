import * as types from './types'

// export const updateValue = (state, payload) => {
// 	state.vrednost = payload // da payload bude vrednost koju zadasmo
// }

export default {
	[types.MUTATE_UPDATE_VALUE]: (state, payload) => {
		state.vrednost = payload
	}
}