import types from './types';


const initialListOfNotes = {
    listName: 'notes',
    list: []
  }
  
const notesReducer = (state = initialListOfNotes, action) => {
    switch (action.type) {
      case types.ADD_NOTE:
        return {...state, list: [...state.list, action.device]}
      case types.CLEAR_NOTES:
        return  {...state, list: initialListOfNotes}
      default:
        return state
    }
  } 

export default notesReducer
