import React from 'react';
import styled from 'styled-components';

const StyledParagraph = styled.p`
    font-size: 1em;
    font-weight: 500;
    font-family: 'Playfair Display', serif;
    padding: 16px;
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
