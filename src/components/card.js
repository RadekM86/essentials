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
    & > div.card_content {
        height: 75%;
        width: 100%;
        border-radius: 16px 16px 0 0 ;
        background-color: ${({color, theme}) => theme.colors[color] || color};
        display: flex;
        align-items: center;
        justify-content: center;
    }
    & > .center {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

const Description = styled.p`
    font-weight: 700;
    font-size: 0.8em;
    color: ${({theme}) => theme.colors.minorText};
    padding: 16px;
`;
export default function Card(props) {
    const { wide, children, content, color, description } = props;
    const contentDiv = content 
    ? <div className="card_content">
        {content}
    </div> 
    : null;
    const descriptionDiv = description 
    ? <Description>
        {description}
    </Description>
    : null;
    return (
        <StyledCard 
        color={color}
        className={wide ? 'wide' : ''}
        >
            {contentDiv}
            {children}
            {descriptionDiv}
        </StyledCard>
    )
}
