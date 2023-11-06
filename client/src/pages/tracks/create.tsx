import FileUpload from '@/shared/components/FileUpload';
import StepWrapper from '@/shared/components/StepWrapper';
import { useInput } from '@/shared/hooks/useInput';
import MainLayout from '@/shared/layouts/MainLayout';
import { Button, Grid, TextField } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const Create = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [picture, setPicture] = useState(null);
    const [audio, setAudio] = useState(null);
    const router = useRouter();

    const name = useInput('');
    const artist = useInput('');
    const text = useInput('');

    const next = () => {
        if (activeStep !== 2) {
            setActiveStep((prev) => prev + 1);
        } else {
            const formData = new FormData();
            formData.append('name', name.value);
            formData.append('artist', artist.value);
            formData.append('text', text.value);
            formData.append('picture', picture ?? '');
            formData.append('audio', audio ?? '');
            axios
                .post(process.env.DEV_BACKEND_URL + 'tracks', formData)
                .then((resp) => router.push('/tracks'))
                .catch((e) => console.log(e));
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
                        <TextField {...name} label={'Track name'} />
                        <TextField {...artist} label={'Artist'} />
                        <TextField
                            {...text}
                            label={'Lyrics'}
                            multiline
                            rows={4}
                        />
                    </Grid>
                )}
                {activeStep === 1 && (
                    <FileUpload setFile={setPicture} accept="image/*">
                        <Button>Load Image</Button>
                    </FileUpload>
                )}
                {activeStep === 2 && (
                    <FileUpload setFile={setAudio} accept="audio">
                        <Button>Load Track</Button>
                    </FileUpload>
                )}
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
