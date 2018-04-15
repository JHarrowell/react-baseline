import { ACTION_TYPES } from '../constants'

export default (state = {  }, action) => {
  switch(action.type) {
    case ACTION_TYPES.APP.INITIAL_LOAD:
      return { ...state, msg: action.payload }
    default:
      return state
  }
}