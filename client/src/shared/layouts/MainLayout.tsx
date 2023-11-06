import React, { ReactNode } from 'react';
import Navbar from '../components/Navbar';
import { Container } from '@mui/material';
import Player from '../components/Player';
import Head from 'next/head';

interface MainLayoutProps {
    children: ReactNode;
    title?: string;
    description?: string;
    keywords?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({
    title,
    children,
    description,
    keywords,
}) => {
    return (
        <>
            <Head>
                <title>{title || 'Music App'}</title>
                <meta
                    name="description"
                    content={
                        'Music App. Listen and download tracks and add your tracks. ' +
                        description
                    }
                />
                <meta name="robots" content="index, follow" />
                <meta
                    name="keywords"
                    content={keywords || 'music, tracks, artists, listen'}
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <Navbar />
            <Container style={{ margin: '90px 0' }}>{children}</Container>
            <Player />
        </>
    );
};

export default MainLayout;
