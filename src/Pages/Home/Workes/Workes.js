import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import WorkCarousel from '../WorkCarousel/WorkCarousel';

const Workes = () => {
    return (
        <Box sx={{mt: 6, mb: 6, backgroundColor: '#111430', pb: 10}}>
            <Container>
                <Box>
                    <Typography sx={{textAlign:'center', color: 'white', pt:6, pb:8}} variant="h6">Here are some of <span style={{color: '#7AB259'}}>our works</span></Typography>
                </Box>
            </Container>
            <WorkCarousel/>
        </Box>
    );
};

export default Workes;