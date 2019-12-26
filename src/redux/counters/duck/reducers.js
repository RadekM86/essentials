import types from './types'

let counter = 0;

const counterBreakpoints = {
    min: 0,
    mean: 50,
    max: 100
  };
  

const countReducer = (state = counter, action) => {
  switch (action.type) {
    case types.INCREMENT_COUNTER:
      counter++
      return counter
    case types.DECREMENT_COUNTER:
      counter--
      return  counter
    case types.RESET_COUNTER:
      counter = 0;
      return  counter
    default:
      return state
  }
}

export default countReducer