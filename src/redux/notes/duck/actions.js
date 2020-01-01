import types from './types'

const addNote = item => ({type: types.ADD_NOTE, item});
const clearNotes = () => ({type: types.CLEAR_NOTES})

export default {
    addNote,
    clearNotes
}