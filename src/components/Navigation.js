import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-content: space-between;
    & > * {
        margin-left: 16px;
    }
    @media (max-width: 450px) {
        font-size: .75em;
    }
`;

export default function Navigation({children}) {
    return (
        <StyledNav>
            {children}
        </StyledNav>
    )
}
