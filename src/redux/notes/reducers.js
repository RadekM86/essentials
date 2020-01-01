import types from './types';


const initialListOfDevices = {
    listName: 'devices',
    list: ['Mobile', 'Desktop', 'SmartTV']
  }
  
const devicesReducer = (state = initialListOfDevices, action) => {
    switch (action.type) {
      case types.ADD_DEVICE:
        return {...state, list: [...state.list, action.device]}
      case types.RESET_DEVICES:
        return  {...state, list: initialListOfDevices}
      default:
        return state
    }
  } 

export default devicesReducer
