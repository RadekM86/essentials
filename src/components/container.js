import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
    display: grid;
    /* grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto; */
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    padding: 16px 8px;

    & >.wide {
        grid-column: 1/3
    }

    @media (max-width: 450px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

export default function container(props) {
    return (
        <StyledContainer>
            {props.children}
        </StyledContainer>
    )
}
