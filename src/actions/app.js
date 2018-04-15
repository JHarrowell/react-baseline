import { ACTION_TYPES } from '../constants'

export function initialLoad() {
  return {
    type: ACTION_TYPES.APP.INITIAL_LOAD,
    payload: 'this is a test'
  }
}