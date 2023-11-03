import { TrackAction, TrackActionTypes } from '@/types/track';
import axios from 'axios';
import { Dispatch } from 'react';

export const fetchTracks = () => {
    return async (dispatch: Dispatch<TrackAction>) => {
        try {
            const response = await axios.get(
                process.env.DEV_BACKEND_URL + 'tracks'
            );
            dispatch({
                type: TrackActionTypes.FETCH_TRACKS,
                payload: response.data,
            });
        } catch (e) {
            dispatch({
                type: TrackActionTypes.FETCH_TRACKS_ERROR,
                payload: `Error during tracks loading: ${e}`,
            });
        }
    };
};
