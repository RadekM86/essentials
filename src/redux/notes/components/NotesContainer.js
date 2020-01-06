import React from 'react';
import { connect } from 'react-redux';
import actions from '../duck/actions';
import { withRouter } from 'react-router-dom';
import { Note } from '../../../components';
import styled from 'styled-components';

const StyledLi = styled.li`
    list-style: none;
    padding: 16px;
    max-width: 250px;
`;

const StyledUl = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
`;

const NotesContainer = ({notes}) => {
    return (
        <StyledUl>
            {notes.list.map(({note, text})=><StyledLi><Note note={note} text={text}/></StyledLi>)}
        </StyledUl>
    )
}


const mapStateToProps = state => ({
    notes: state.notes
});

const mapDispatchToProps = dispatch => ({
    clearNotes: () => dispatch(actions.clearNotes())
});



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NotesContainer))