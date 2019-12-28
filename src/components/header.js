import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
    width: 100%;
    padding: 16px;
    background-color: ${({theme}) => theme.colors.background};
    box-shadow: 0px 2px 4px rgba(0,0,0,.1);
    position: relative;
    z-index: 10;
    display: flex;
    & > nav.navigation {
        margin-left: auto;
    }
    & > .App-logo {
        margin-left: 0;
    }
`;


export default function Header({children, navigation}) {
    return (
        <StyledHeader >
            {children}
            <nav className="navigation">{navigation}</nav>
        </StyledHeader>
    )
}
