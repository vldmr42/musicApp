import { ITrack } from '@/types/track';
import { Card } from '@mui/material';
import React from 'react';

interface TrackItemProps {
    track: ITrack;
    active?: boolean;
}

const TrackItem: React.FC<TrackItemProps> = ({ track, active = false }) => {
    return <Card>{track.name}</Card>;
};

export default TrackItem;
