import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: ${({direction}) => direction || 'row'};
    justify-content: space-evenly;
    align-items: ${({alignment}) => alignment || 'center'};
`;

export default function FlexContainer({direction, alignment, children}) {
    return (
        <StyledContainer 
            direction={direction} 
            alignment={alignment}
        >
            {children}
        </StyledContainer>
    )
}
