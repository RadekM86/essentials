import React from 'react';
import styled from 'styled-components';

const StyledNote = styled.div`
    font-family: 'Playfair Display', serif;

    & * {
        font-family: 'Playfair Display', serif;
    }

`;

export default function Note({children}) {
    return (
        <StyledNote>
            {children}
        </StyledNote>
    )
}
