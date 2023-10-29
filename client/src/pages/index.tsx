import MainLayout from '@/shared/layouts/MainLayout';
import React from 'react';

const index = () => {
    return (
        <>
            <MainLayout>
                <div className="center">
                    <h1>Welcome</h1>
                    <h3>Listen your tracks here</h3>
                </div>
            </MainLayout>
            <style jsx>
                {`
                    .center {
                        margin-top: 150px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                    }
                `}
            </style>
        </>
    );
};

export default index;
