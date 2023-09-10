import { Grid, Typography, Button } from '@mui/material';
import React from 'react';
import styles from './Profile.module.css';
import { ImageAsset } from '../../asset/images';
import Typewriter from 'typewriter-effect';

const Profile: React.FC = () => {
    return (
        <>
            <Grid container alignItems={'center'} justifyContent={'space-around'} mt={3}>
                <Grid item md={3} sm={8}>
                    <div className={styles['profile-pic']}>
                        <img src={ImageAsset.Profile} />
                    </div>
                </Grid>
                <Grid item md={7} sm={8}>
                    <Typography variant="h1" color={'text.main'}>
                        <Typewriter
                            options={{
                                strings: ['Hello World !', 'Chetan Minajigi', 'I am Fullstack Dev'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </Typography>
                    <Typography variant="h3" mt={2}>
                        Transforming ideas into functional, elegant solution -let's collaborate!
                    </Typography>
                    <Button className={styles['profile-button']}>Download Resume</Button>
                </Grid>
            </Grid>
        </>
    );
};

export default Profile;
