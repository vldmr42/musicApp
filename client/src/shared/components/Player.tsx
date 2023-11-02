import { Pause, PlayArrow, VolumeUp } from '@mui/icons-material';
import { Grid, IconButton } from '@mui/material';
import React from 'react';

import styles from '@/styles/Player.module.scss';
import { ITrack } from '@/types/track';
import TrackProgress from './TrackProgress';

const Player = () => {
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
    const active = false;
    return (
        <div className={styles.player}>
            <IconButton onClick={(e) => e.stopPropagation()}>
                {active ? <Pause /> : <PlayArrow />}
            </IconButton>
            <Grid
                container
                direction={'column'}
                style={{ width: 200, margin: '0 20px' }}
            >
                <div>{track.name}</div>
                <div style={{ fontSize: 12, color: 'gray' }}>
                    {track.artist}
                </div>
            </Grid>
            <TrackProgress left={0} right={100} onChange={() => null} />
            <VolumeUp style={{ marginLeft: 'auto' }} />
            <TrackProgress left={0} right={100} onChange={() => null} />
        </div>
    );
};

export default Player;
