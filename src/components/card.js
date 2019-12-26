import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
    width: 100%;
    height: 200px;
    border-radius: 16px;
    background-color: ${({theme})=>theme.colors.background}
    box-shadow: -2px -2px 8px rgba(255,255,255,.9), 2px 2px 8px rgba(0,0,0,.1);

    :hover{
        box-shadow: -2px -2px 12px rgba(255,255,255,.9), 6px 6px 14px rgba(0,0,0,.1);
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
