import TrackList from '@/shared/components/TrackList';
import { useActions } from '@/shared/hooks/useActions';
import { useTypedSelector } from '@/shared/hooks/useTypedSelector';
import MainLayout from '@/shared/layouts/MainLayout';
import { NextThunkDispatch, wrapper } from '@/store';
import { fetchTracks } from '@/store/action-creators/track';
import { ITrack } from '@/types/track';
import { Box, Button, Card, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';

const Tracks = () => {
    const router = useRouter();
    const { tracks, error } = useTypedSelector((state) => state.tracks);

    if (error) {
        return (
            <MainLayout>
                <h1>{error}</h1>
            </MainLayout>
        );
    }

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

// export const getServerSideProps = wrapper.getServerSideProps(async (store) => {
//     const dispatch = store.dispatch as NextThunkDispatch;
//     await dispatch(await fetchTracks());
// });

export const getServerSideProps = wrapper.getServerSideProps((store) =>
    // @ts-expect-error type-error
    async ({ req, res, ...etc }) => {
        const dispatch = store.dispatch as NextThunkDispatch;
        await dispatch(await fetchTracks());
    }
);
