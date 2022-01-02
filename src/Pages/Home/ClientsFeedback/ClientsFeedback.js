import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import img1 from '../../../images/customer-1.png';
import img2 from '../../../images/customer-2.png';
import img3 from '../../../images/customer-3.png';
import ClientFeedback from '../ClientFeedback/ClientFeedback';

const feedbackData = [
    {name: 'Nash Patrik', position:'CEO, Manpol', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat', img:img1, id:1 },
    {name: 'Miriam Barron', position:'CEO, Manpol', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat', img: img2, id:2 },
    {name: 'Bria Malone', position:'CEO, Manpol', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat', img: img3, id:3},
]

const ClientsFeedback = () => {
    return (
        <Container>
            <Box>
                <Typography sx={{textAlign: 'center'}} variant="h4">
                Clients <span style={{color: '#7AB259'}}>Feedback</span>
                </Typography>
            </Box>
            <Grid sx={{mt:5, mb:5}} spacing={2} container>
                {feedbackData.map(data => <ClientFeedback key={data?.id} data={data}/>)}
            </Grid>
        </Container>
    );
};

export default ClientsFeedback;