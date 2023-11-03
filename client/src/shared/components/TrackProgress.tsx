import React, { ReactNode } from 'react';

interface TrackProgressProps {
    left: number;
    right: number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    children?: ReactNode;
}

const TrackProgress: React.FC<TrackProgressProps> = (props) => {
    const { left, right, onChange, children } = props;
    return (
        <div>
            <input
                type="range"
                min={0}
                max={right}
                value={left}
                onChange={onChange}
            />
            <div>
                {left} / {right}
            </div>
        </div>
    );
};

export default TrackProgress;
