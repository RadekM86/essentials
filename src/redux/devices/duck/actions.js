import types from './types'

const addDevice = item => ({type: types.ADD_DEVICE, item});
const reset = () => ({type: types.RESET_DEVICES})

export default {
    addDevice,
    reset
}