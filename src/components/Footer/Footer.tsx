import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { ImageAsset } from '../../asset/images';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
    return (
        <div className={styles['footer-content']}>
            <Stack spacing={2} justifyContent={'center'} mb={3}>
                <div>
                    <img src={ImageAsset.LinkedIn} />
                </div>
                <div>
                    <img src={ImageAsset.GitHub} />
                </div>
                <div>
                    <img src={ImageAsset.Instagram} />
                </div>
                <div>
                    <img src={ImageAsset.FaceBook} />
                </div>
            </Stack>
            <hr />
            <div className={styles['footer-copywrite']}>
                <Typography variant="h6" fontWeight={600}>
                    {' '}
                    @ 2023- CM | All right Reserved
                </Typography>
            </div>
        </div>
    );
};

export default Footer;
