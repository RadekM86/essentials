import React, { useEffect, useState} from 'react';
import { Container, Card, FlexContainer } from '../components';
import { AddButton, SubtractButton, CounterContainer } from '../redux/counters/index';
import styled, {keyframes} from 'styled-components';


const gradientSwitch = ()=> {
    let keys = Object.keys(gradients);
    return gradients[keys[ keys.length * Math.random() << 0]];
}

const gradients = {
    warm: 'linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)',
    night: 'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)',
    rainy: 'linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)',
    duowarm: 'linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)',
    malibu: 'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)',
    sunset: 'linear-gradient(to right, #fa709a 0%, #fee140 100%)',
    moon: 'linear-gradient(to top, #5ee7df 0%, #b490ca 100%)',
    plum: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  }

const pulse = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`

const StyledHeader = styled.h1`
    font-size: 6em;
    font-family: 'Playfair Display', serif;
    font-weight: 500;
`;

const StyledContainer = styled.div`
    width: 100%;
    height: 90vh;
    background: ${({theme}) => theme.colors.cardBackground};
    background: ${({theme}) => theme.gradients.six};
    color: ${({theme}) => theme.colors.textColor};
    transition: all 2s ease-in-out;
    background-size: 1000%;
    animation: ${pulse} 120s infinite;
`;

export default function Home({theme}) {
    return (
        <StyledContainer className="Container">
            <FlexContainer>

                <StyledHeader>Intelligible Web</StyledHeader>

            </FlexContainer>
        </StyledContainer>
    )
}


