import TrackList from '@/shared/components/TrackList';
import MainLayout from '@/shared/layouts/MainLayout';
import { ITrack } from '@/types/track';
import { Box, Button, Card, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';

const Tracks = () => {
    const router = useRouter();
    const tracks: ITrack[] = [
        {
            _id: '1',
            name: 'club4',
            artist: 'art1',
            text: 'txt',
            listens: 0,
            picture: 'image/76e93185-e42b-42a5-a09b-4bcc6c254610.jpg',
            audio: 'audio/db04950d-b985-468f-86f5-ddfbb63233d5.mp3',
            comments: [],
        },
        {
            _id: '2',
            name: 'club5',
            artist: 'art1',
            text: 'txt',
            listens: 0,
            picture: 'image/d53000e4-cf2c-462e-865d-920bcb28ee77.jpg',
            audio: 'audio/48acd747-6d4d-4311-8595-19ef894e0c4b.mp3',
            comments: [],
        },
    ];

    return (
        <MainLayout>
            <Grid container justifyContent={'center'}>
                <Card style={{ width: 900 }}>
                    <Box p={3}>
                        <Grid container justifyContent={'space-between'}>
                            <h1>Track List</h1>
                            <Button
                                onClick={() => router.push('/tracks/create')}
                            >
                                Load Track
                            </Button>
                        </Grid>
                    </Box>
                    <TrackList tracks={tracks} />
                </Card>
            </Grid>
        </MainLayout>
    );
};

export default Tracks;
