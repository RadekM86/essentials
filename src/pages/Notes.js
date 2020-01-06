import React from 'react';
import styled from 'styled-components';

import { NotesContainer, AddNoteForm } from '../redux/notes'

const Layout = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    & > .add-form {
        justify-self: flex-end;
    }
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
            <Layout className="notes-layout">
                <NotesContainer />
                <AddNoteForm className="add-form" />
            </Layout>
        </>
    )
}
