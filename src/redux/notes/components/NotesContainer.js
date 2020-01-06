import React from 'react';
import { connect } from 'react-redux';
import actions from '../duck/actions';
import { withRouter } from 'react-router-dom';
import { Note } from '../../../components';
import styled from 'styled-components';

const StyledLi = styled.li`
    list-style: none;
`;

const NotesContainer = ({notes}) => {
    console.log(notes);
    console.log(notes.list);
    
    return (
        <ul>
            {notes.list.map(({note, text})=><StyledLi><Note>{note}{text}</Note></StyledLi>)}
        </ul>
    )
}


const mapStateToProps = state => ({
    notes: state.notes
});

const mapDispatchToProps = dispatch => ({
    clearNotes: () => dispatch(actions.clearNotes())
});



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NotesContainer))