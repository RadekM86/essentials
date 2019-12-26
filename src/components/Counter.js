import React from 'react'
import styled from 'styled-components';


const StyledCounter = styled.div`
    font-size: 6em;
    font-weight: 200;
    color: ${({theme}) => theme.colors.textColor};
`;

export default function Counter(props) {
    const {count} = props;
    return (
        <StyledCounter>
            {count}
        </StyledCounter>
    )
}
