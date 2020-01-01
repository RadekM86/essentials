import types from './types'
import { loadState } from '../../localStorage';
const counterBreakpoints = {
    min: 0,
    mean: 50,
    max: 100
  };
  

let counter = loadState().count || 0;

const countReducer = (state = counter, action) => {
  switch (action.type) {
    case types.INCREMENT_COUNTER:
      return counter++
    case types.DECREMENT_COUNTER:
      return  counter --
    case types.RESET_COUNTER:
      return  0
    default:
      return state
  }
}

export default countReducer