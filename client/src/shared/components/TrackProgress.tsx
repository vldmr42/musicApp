import React, { ReactNode } from 'react';

interface TrackProgressProps {
    left: number;
    right: number;
    onChange: (e: React.ChangeEvent) => void;
    children?: ReactNode;
}

const TrackProgress: React.FC<TrackProgressProps> = (props) => {
    const { left, right, onChange, children } = props;
    return (
        <div>
            <input
                type="range"
                min={left}
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
