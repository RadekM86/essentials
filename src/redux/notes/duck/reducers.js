import types from './types';


const initialListOfNotes = {
    listName: 'notes',
    list: ['test note 2222']
  }
  
const notesReducer = (state = initialListOfNotes, action) => {
    switch (action.type) {
      case types.ADD_NOTE:
        return {...state, list: [...state.list, action.note]}
      case types.CLEAR_NOTES:
        return  {...state, list: [...initialListOfNotes.list]}
      default:
        return state
    }
  } 

export default notesReducer
