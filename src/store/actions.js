import * as types from './types'

// export const apdejtValue = ({commit}, payload) => {
// 	commit('updateValue', payload)
// }

export default {
	[types.UPDATE_VALUE]: ({commit}, payload) => {
		commit(types.MUTATE_UPDATE_VALUE, payload)
	}
}

// export const action2 = () => {}