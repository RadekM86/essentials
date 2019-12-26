import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
    width: 100%;
    height: 200px;
    border-radius: 16px;
    background-color: ${({theme})=>theme.colors.background};
    box-shadow: -2px -2px 8px ${({theme})=>theme.colors.specular}, 
    2px 2px 8px ${({theme})=>theme.colors.shadow};

    :hover{
        box-shadow: -2px -2px 12px ${({theme})=>theme.colors.specular}, 
        6px 6px 14px ${({theme})=>theme.colors.shadow};
    }
`;

export default function Card(props) {
    const { wide, children } = props;
    return (
        <StyledCard 
        className={wide ? 'wide' : ''}
        >
            {children}
        </StyledCard>
    )
}
