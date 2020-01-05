import React from 'react';
import styled from 'styled-components';
import { Navigation }  from './index';

const StyledHeader = styled.div`
    width: 100%;
    padding: 16px;
    background-color: 'transparent';
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


export default function Header({children, navigation, home}) {
    return (
        <StyledHeader className="Header">
            {children}
            <Navigation className="navigation">{navigation}</Navigation>
        </StyledHeader>
    )
}
