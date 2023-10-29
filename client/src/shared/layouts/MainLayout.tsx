import React, { ReactNode } from 'react';
import Navbar from '../components/Navbar';
import { Container } from '@mui/material';

const MainLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <>
            <Navbar />
            <Container style={{ margin: '90px 0' }}>{children}</Container>
        </>
    );
};

export default MainLayout;
