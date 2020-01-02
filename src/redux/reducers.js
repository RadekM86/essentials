import { combineReducers } from 'redux';
import devicesReducer from './devices/duck'
import counterReducer from './counters/duck'
import notesReducer from './notes/duck';


const rootReducer = combineReducers({
    count: counterReducer,
    devices: devicesReducer,
    notes: notesReducer,
})

export default rootReducer