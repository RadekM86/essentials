import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
    width: 100%;
    padding: 16px;
    background-color: #FCFCFC;
    box-shadow: 0px 2px 4px rgba(0,0,0,.1)
`;


export default function Header(props) {
    return (
        <StyledHeader>
            {props.children}
        </StyledHeader>
    )
}
