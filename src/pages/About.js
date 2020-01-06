import React from 'react';
import { Column, ColumnsContainer, Paragraph } from '../components';

const paragraph = `This is a library of essential components designed for intelligible web. Simplicity and legibility are the main foundations of this design, more yet to come.
`;

export default function About() {
    return (
        <ColumnsContainer>
            <Column>
                <Paragraph>
                    {paragraph}
                </Paragraph>
            </Column>
        </ColumnsContainer>
    )
}
