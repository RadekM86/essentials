import React from 'react';
import { FlexContainer } from '../components';
import styled, {keyframes} from 'styled-components';

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
    @media (max-width: 800px) {
        font-size: 3em;
    }
    @media (max-width: 450px) {
        font-size: 2em;
    }
`;

const StyledContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    background: ${({theme}) => theme.colors.cardBackground};
    background: ${({theme}) => theme.gradients.six};
    color: ${({theme}) => theme.colors.textColor};
    transition: background 2s ease-in-out;
    background-size: 1000%;
    animation: ${pulse} 120s infinite;
`;

export default function Home({ theme }) {
  return (
    <StyledContainer className="Container">
      <FlexContainer>
        <StyledHeader>Intelligible Web</StyledHeader>
      </FlexContainer>
    </StyledContainer>
  )
}
