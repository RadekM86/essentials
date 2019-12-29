import React from 'react';
import styled from 'styled-components';

export const StyledColumn = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 2px;
    background-color: ${({theme})=>theme.colors.background};
    box-shadow: -2px -2px 8px ${({theme})=>theme.colors.specular}, 
    2px 2px 8px ${({theme})=>theme.colors.shadow};
    position: relative;
`;

export default function Column({children, ...props}) {
    return (
        <StyledColumn {...props}>
            {children}
        </StyledColumn>
    )
}
