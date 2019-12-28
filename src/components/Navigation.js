import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-content: space-between;
`;

export default function Navigation({children}) {
    return (
        <StyledNav>
            {children}
        </StyledNav>
    )
}
