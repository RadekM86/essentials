import React from 'react';
import { Container, Card, FlexContainer, Note } from '../components';
import styled from 'styled-components';

import { NotesContainer, AddNoteForm } from '../redux/notes'

// import { } from '../redux/notes/index';

const Layout = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

const H1 = styled.h1`
    font-family: 'Playfair Display', serif;
    color: ${({theme}) => theme.colors.textColor};
    font-weight: 700;
    display: flex;
    justify-content: center;
`;

export default function Notes() {
    return (
        <>
        <H1>NOTES</H1>
        <Layout>
            <NotesContainer/>
            <AddNoteForm />
        </Layout>
        </>
    )
}
