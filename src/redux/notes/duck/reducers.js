import types from './types';


const initialListOfNotes = {
    listName: 'notes',
    list: [{note: '', text: ''}]
  }
  
const notesReducer = (state = initialListOfNotes, action) => {
    switch (action.type) {
      case types.ADD_NOTE:
        return {...state, list: [...state.list, {note: action.note, text: action.text}]}
      case types.CLEAR_NOTES:
        return  {...state, list: [...initialListOfNotes.list]}
      default:
        return state
    }
  } 

export default notesReducer
