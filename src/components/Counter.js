import React from 'react'
import styled from 'styled-components';


const StyledCounter = styled.div`
    font-size: 4em;
    font-weight: 200;
    color: ${({theme}) => theme.colors.textColor};
`;

export default function Counter(props) {
    const {counter} = props;
    return (
        <StyledCounter>
            <p>{counter}</p>
        </StyledCounter>
    )
}
