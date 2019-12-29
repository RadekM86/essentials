import React from 'react';
import styled from 'styled-components';

const StyledParagraph = styled.p`
    font-size: .875em;
    font-weight: 500;

    padding: 8px;
    text-align: justify;
    color: ${({theme}) => theme.colors.textColor};
`;

export default function Paragraph({children}) {
    return (
        <StyledParagraph>
            {children}
        </StyledParagraph>
    )
}
