import types from './types'

const addNote = (note, text) => ({type: types.ADD_NOTE, note, text});
const clearNotes = () => ({type: types.CLEAR_NOTES})

export default {
    addNote,
    clearNotes
}