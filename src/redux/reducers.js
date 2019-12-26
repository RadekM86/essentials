import { combineReducers } from 'redux';
import devicesReducer from './devices/duck'
import counterReducer from './counters/duck'


const rootReducer = combineReducers({
    count: counterReducer,
    devices: devicesReducer
})

export default rootReducer