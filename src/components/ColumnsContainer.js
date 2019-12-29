import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    padding: 16px;
    grid-template-rows: auto;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 16px;
    grid-row-gap: 16px;

    @media (max-width: 450px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

export default function ColumnsContainer({children, ...props}) {
    return (
        <StyledContainer {...props}>
            {children}
        </StyledContainer>
    )
}
