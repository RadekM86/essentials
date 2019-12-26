import types from './types'
import { bindActionCreators } from 'redux'

const addCount = () => ({type: types.INCREMENT_COUNTER})
const subtractCount = () => ({type: types.DECREMENT_COUNTER})
const reset = () => ({type: types.RESET_COUNTER})

// const counterActions = 
//     bindActionCreators({add: addCount, subtract: subtractCount, reset}, store.dispatch);

export default {
    addCount,
    subtractCount,
    reset
}