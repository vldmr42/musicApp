import StepWrapper from '@/shared/components/StepWrapper';
import MainLayout from '@/shared/layouts/MainLayout';
import { Button, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';

const Create = () => {
    const [activeStep, setActiveStep] = useState(0);
    const next = () => {
        if (activeStep !== 2) {
            setActiveStep((prev) => prev + 1);
        }
    };

    const back = () => {
        setActiveStep((prev) => prev - 1);
    };

    return (
        <MainLayout>
            <StepWrapper activeStep={activeStep}>
                {activeStep === 0 && (
                    <Grid
                        gap={2}
                        container
                        direction={'column'}
                        style={{ padding: 20 }}
                    >
                        <TextField label={'Track name'} />
                        <TextField label={'Artist'} />
                        <TextField label={'Lyrics'} multiline rows={4} />
                    </Grid>
                )}
                {activeStep === 1 && <h1>STEP 2</h1>}
                {activeStep === 2 && <h1>STEP 3</h1>}
            </StepWrapper>
            <Grid container justifyContent={'space-between'}>
                <Button disabled={activeStep === 0} onClick={back}>
                    Back
                </Button>
                <Button onClick={next}>Next</Button>
            </Grid>
        </MainLayout>
    );
};

export default Create;
