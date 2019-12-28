import React from 'react';
import Container from '../components/Container';
import Card from '../components/Card';
import { AddButton, CounterContainer } from '../redux/counters/index';

export default function Home() {
    return (
        <Container>
            <Card wide={true}>
                <div className="center">
                    <AddButton color="accent">+</AddButton>
                </div>
            </Card>
            <CounterContainer />
        </Container>
    )
}
