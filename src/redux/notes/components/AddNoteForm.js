import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import actions from '../duck/actions';
import { withRouter } from 'react-router-dom';


const StyledInput = styled.input`
    border: none;
    border-bottom: 1px solid ${({theme}) => theme.colors.textColor};
    color: ${({theme}) => theme.colors.textColor};
    background: none;
    :focus{
        outline: none;
        border-bottom: 2px solid ${({theme}) => theme.colors.accent};
    }
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
`;

const StyledSubmit = styled.button`
    width: 2em;
    height: 2em;
    border: 1px solid ${({theme}) => theme.colors.accent};

`;

const AddNoteForm = props => {
    const {addNote} = props;

    const notesInput = React.createRef();

    const submitHandler = (e) => {
        e.preventDefault();
        addNote(notesInput.current.value);
        notesInput.current.value = ""
    }

        return (
            <StyledForm onSubmit={submitHandler}>
                <StyledInput type="text" placeholder="note title" ref={notesInput}/>
                <StyledSubmit type="submit">+</StyledSubmit>
            </StyledForm>
        )
    
};

const mapDispatchToProps = dispatch => ({
    addNote:  note => dispatch(actions.addNote(note))
});

export default withRouter(connect(null, mapDispatchToProps)(AddNoteForm))