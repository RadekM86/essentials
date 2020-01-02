import types from './types'

const addNote = note => ({type: types.ADD_NOTE, note});
const clearNotes = () => ({type: types.CLEAR_NOTES})

export default {
    addNote,
    clearNotes
}