import React from 'react';
import styled from 'styled-components';

const StyledAdd = styled.button`
    height: 100px;
    width: 100px;
    border-radius: 50px;
    font-size: 2em;
    font-weight: 400;
    color: ${({theme}) => theme.colors.buttonText};
    border: 2px solid ${({theme, hollow, color}) => hollow 
    ? theme.colors[color] || color
    : 'transparent'};
    outline: none;
    background-color: ${({color, hollow, theme}) => hollow 
    ? 'transparent'
    : theme.colors[color] || color};

    :hover {
        box-shadow: inset 4px 4px 6px ${({theme}) => theme.colors.shadow};
    }
    & {
    background-position: center;
    transition: all 0.4s;
    }
    &:hover {
    background: ${({color, hollow, theme}) => hollow 
    ? 'transparent'
    : theme.colors[color] || color} 
    radial-gradient(circle, transparent 1%, rgba(255,255,255,.2) 1%) center/15000%;
    }
    &:active {
    background-size: 100%;
    transition: all 0s;
    }

`;

export default function AddButton(props) {
    const {color, children, hollow} = props;
    return (
        <StyledAdd color={color} hollow={hollow} className="ripple">
            {children}
        </StyledAdd>
    )
}
