import React, { Component } from 'react'
import styled from 'styled-components';

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

const StyledSubmit = styled.input`
    width: 2em;
    height: 2em;
    border: 1px solid ${({theme}) => theme.colors.accent};

`;



export default class SimpleForm extends Component {
    

    changeHandler(e){
        console.log(e.target.value)
    }
    submitHandler(e){
        e.preventDefault();
        console.log(e)
    }
    render() {
        return (
            <StyledForm onSubmit={this.submitHandler}>
                <StyledInput type="text" placeholder="note title" onChange={this.changeHandler} />
                <StyledSubmit type="submit" value="+" />
            </StyledForm>
        )
    }
}

