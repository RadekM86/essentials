import React from 'react';
import styled from 'styled-components';
const StyledNote = styled.div`
    font-family: 'Playfair Display', serif;
    color: ${({theme}) => theme.colors.textColor};
    & * {
        font-family: 'Playfair Display', serif;
        color: ${({theme}) => theme.colors.textColor};
    }

`;

export default function Note({children}) {
    return (
        <StyledNote>
            {children}
        </StyledNote>
    )
}
