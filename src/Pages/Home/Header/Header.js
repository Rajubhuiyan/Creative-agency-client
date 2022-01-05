import { Box, Container, Grid } from '@mui/material';
import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import uber from '../../../images/logos/uber.png';
import netflix from '../../../images/logos/netflix.png';
import airbnb from '../../../images/logos/airbnb.png';
import Navbar from '../../Shared/Navbar/Navbar';
const headerLogos = [
    { img: slack,id: 1 },
    { img: google, id:2 },
    { img: uber, id:3 },
    { img: netflix, id:4},
    { img: airbnb, id:5}
]


const Header = () => {
    return (
        <Box sx={{mb:4}}>
            <Box sx={{backgroundColor:'#FBD062'}}>
                <Navbar />
                <Box sx={{ mt: 5, mb: 4, padding: 6 }}>
                    <HeaderMain />
                </Box>
            </Box>
            <Container sx={{ mt: 9 }}>
                <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                    {headerLogos.map(logo => <Grid key={logo.id} sm={4} md={2} item><img style={{ width: '120px', height: '40px' }} src={logo.img} alt="" /></Grid>)}
                </Grid>
            </Container>
        </Box>
    );
};

export default Header;