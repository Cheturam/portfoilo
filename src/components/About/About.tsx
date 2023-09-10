import { Typography, Grid } from '@mui/material';
import React from 'react';
import { ImageAsset } from '../../asset/images';

const About: React.FC = () => {
    return (
        <div className={'content'}>
            <Typography variant="h3" color={'text.main'} fontWeight={600} my={3}>
                About{' '}
            </Typography>
            <Typography variant="h5" fontWeight={500}>
                Crafting digital experiences that resonate is my forte. I'm Chetan Minajigi, a seasoned Full Stack
                Developer with a knack for React.js and TypeScript. My design approach is all about responsiveness and
                elegance. On the backend, I wield Node.js to build systems that match frontend sophistication. With
                Redux Saga and Redux, I ensure impeccable state management. Module federation and Webpack integration
                are my playground. Azure Apps deployment? Consider it done.
            </Typography>

            <Typography variant="h3" fontWeight={600} color={'text.main'} mt={6}>
                Skils sets
            </Typography>
            <Grid container mt={4} gap={4}>
                <Grid item xs={2}>
                    <img src={ImageAsset.javaScriptLogo} />
                </Grid>
                <Grid item xs={2}>
                    <img src={ImageAsset.Nodejs} />
                </Grid>
                <Grid item xs={2}>
                    <img src={ImageAsset.HTMLLogo} />
                </Grid>
                <Grid item xs={2}>
                    <img src={ImageAsset.CSSLogo} />
                </Grid>
                <Grid item xs={2}>
                    <img src={ImageAsset.ReduxLogo} />
                </Grid>
                <Grid item xs={2}>
                    <img src={ImageAsset.ReactLogo} />
                </Grid>
                <Grid item xs={2}>
                    <img src={ImageAsset.Webpacks} />
                </Grid>
            </Grid>
        </div>
    );
};

export default About;
