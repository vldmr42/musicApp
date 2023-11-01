import MainLayout from '@/shared/layouts/MainLayout';
import { ITrack } from '@/types/track';
import { Button, Grid, TextField } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

const TrackPage = () => {
    const track: ITrack = {
        _id: '1',
        name: 'club4',
        artist: 'art1',
        text: 'txt',
        listens: 0,
        picture: 'image/76e93185-e42b-42a5-a09b-4bcc6c254610.jpg',
        audio: 'audio/db04950d-b985-468f-86f5-ddfbb63233d5.mp3',
        comments: [],
    };
    const router = useRouter();

    return (
        <MainLayout>
            <Button
                variant="outlined"
                style={{ fontSize: 32 }}
                onClick={() => router.push('/tracks')}
            >
                Back to List
            </Button>
            <Grid container style={{ margin: '20px 0' }}>
                <Image
                    src={'http://localhost:5000/' + track.picture}
                    width={200}
                    height={200}
                    alt="track-image"
                />
                <div style={{ marginLeft: 30 }}>
                    <h1>{track.name}</h1>
                    <h1>{track.artist}</h1>
                    <h1>{track.listens}</h1>
                </div>
            </Grid>
            <h1>Lyrics</h1>
            <p>{track.text}</p>
            <h1>Comments</h1>
            <Grid gap={2} container>
                <TextField fullWidth label={'Name'} />
                <TextField fullWidth label={'Comment'} multiline rows={4} />
                <Button>Send</Button>
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
