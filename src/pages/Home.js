import React from 'react';
import { Container, Card, FlexContainer } from '../components';
import { AddButton, SubtractButton, CounterContainer } from '../redux/counters/index';

export default function Home() {
    return (
        <Container>
            <Card wide={true}>
                <FlexContainer 
                    className="center"
                    alignment="center"
                >
                    <AddButton color="accent">+</AddButton>
                    <SubtractButton color="cold">-</SubtractButton>
                </FlexContainer>
            </Card>
            <CounterContainer />
        </Container>
    )
}
