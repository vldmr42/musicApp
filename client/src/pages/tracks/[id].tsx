import { useInput } from '@/shared/hooks/useInput';
import MainLayout from '@/shared/layouts/MainLayout';
import { IComment, ITrack } from '@/types/track';
import { Button, Grid, TextField } from '@mui/material';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

interface TrackPageProps {
    serverTrack: ITrack;
}

const TrackPage = ({ serverTrack }: TrackPageProps) => {
    const [track, setTrack] = useState(serverTrack);
    const router = useRouter();
    const username = useInput('');
    const comment = useInput('');

    const addComment = async () => {
        try {
            const response = await axios.post<IComment>(
                'http://localhost:5000/tracks/comment',
                {
                    username: username.value,
                    text: comment.value,
                    trackId: track._id,
                }
            );
            setTrack({
                ...track,
                comments: [...track.comments, response.data],
            });
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <MainLayout title={`Music App - ${track.artist} - ${track.name}`}>
            <Button
                variant="outlined"
                style={{ fontSize: 32 }}
                onClick={() => router.push('/tracks')}
            >
                Back to List
            </Button>
            <Grid container style={{ margin: '20px 0' }}>
                <Image
                    src={process.env.DEV_STATIC_HOST + track.picture}
                    width={200}
                    height={200}
                    alt="track-image"
                />
                <div style={{ marginLeft: 30 }}>
                    <h1>Track Name - {track.name}</h1>
                    <h1>Artist - {track.artist}</h1>
                    <h1>Listens - {track.listens}</h1>
                </div>
            </Grid>
            <h1>Lyrics</h1>
            <p>{track.text}</p>
            <h1>Comments</h1>
            <Grid gap={2} container>
                <TextField {...username} fullWidth label={'Name'} />
                <TextField
                    {...comment}
                    fullWidth
                    label={'Comment'}
                    multiline
                    rows={4}
                />
                <Button onClick={addComment}>Send</Button>
            </Grid>
            <div>
                {track.comments.map((comment) => (
                    <div key={comment._id}>
                        <div>User - {comment.username}</div>
                        <div>Comment - {comment.text}</div>
                    </div>
                ))}
            </div>
        </MainLayout>
    );
};

export default TrackPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const url = process.env.DEV_BACKEND_URL + '/tracks/' + params?.id;
    const response = await axios.get<ITrack>(
        'http://localhost:5000/tracks/' + params?.id
    );

    return {
        props: {
            serverTrack: response.data,
        },
    };
};
