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
    font-family: inherit;
    :focus{
        outline: none;
        border-bottom: 2px solid ${({theme}) => theme.colors.accent};
    }
`;

const StyledTextarea = styled.textarea`
    border: none;
    border-bottom: 1px solid ${({theme}) => theme.colors.textColor};
    color: ${({theme}) => theme.colors.textColor};
    background: none;
    font-family: inherit;
    :focus{
        outline: none;
        border-bottom: 2px solid ${({theme}) => theme.colors.accent};
    }

`;

const StyledForm = styled.form`
    width: 20em;
    display: flex;
    flex-direction: column;
    * {
        margin: 2px;
    }
`;

const StyledSubmit = styled.button`
    height: 2em;
    border:none;
    outline: none;
    border-radius: 4px;
    font-weight: 600;
    color: ${({theme})=>theme.colors.buttonText};
    background-color: ${({theme}) => theme.colors.accent};
    :hover{
        background: ${({theme})=>theme.gradients.plum};
    }
`;

const AddNoteForm = props => {
    const {addNote} = props;

    const notesInput = React.createRef();
    const textInput = React.createRef();

    const submitHandler = (e) => {
        e.preventDefault();
        addNote(notesInput.current.value, textInput.current.value);
        notesInput.current.value = "";
        textInput.current.value = "";
    }

        return (
            <StyledForm onSubmit={submitHandler}>
                <StyledInput type="text" placeholder="note title" ref={notesInput}/>
                <StyledTextarea type="text" placeholder="note text" rows="5" ref={textInput}/>
                <StyledSubmit type="submit">ADD NOTE</StyledSubmit>
            </StyledForm>
        )
    
};

const mapDispatchToProps = dispatch => ({
    addNote:  (note,text) => dispatch(actions.addNote(note, text))
});

export default withRouter(connect(null, mapDispatchToProps)(AddNoteForm))