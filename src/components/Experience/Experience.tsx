import React from 'react';
import styles from './Experience.module.css';
import { Typography } from '@mui/material';

const Experience: React.FC = () => {
    return (
        <div className={'content'}>
            <Typography variant="h3" mt={3} color="text.main" fontWeight={600}>
                Experience
            </Typography>
        </div>
    );
};

export default Experience;
