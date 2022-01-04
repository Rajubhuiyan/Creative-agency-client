import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const SecondLoader = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: { md: '60vw' }, height: { xs: '50vh', md: '80vh' } }}>
            <Box>
                <CircularProgress />
            </Box>
        </Box>
    );
};

export default SecondLoader;