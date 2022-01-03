import { Box, CircularProgress } from '@mui/material';
import React from 'react';

const Loader = () => {
    return (
        <Box sx={{ height: '100vh', width: '90vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box>
                <Box>
                    <CircularProgress />
                </Box>
            </Box>
        </Box>
    );
};

export default Loader;