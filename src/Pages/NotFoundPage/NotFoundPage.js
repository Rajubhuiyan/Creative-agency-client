import { Box, Typography } from '@mui/material';
import React from 'react';

const NotFoundPage = () => {
    return (
        <Box sx={{display:'flex', justifyContent: 'center', alignItems: 'center', height:'100vh', width:'100vw'}}>
            <Box sx={{textAlign: 'center'}}>
                <Typography sx={{fontWeight:'bold', color:'red'}} variant="h1">404</Typography>
                <Typography sx={{fontWeight:'bold', color:'red'}} variant="h3">Page Not Found</Typography>
            </Box>
        </Box>
    );
};

export default NotFoundPage;