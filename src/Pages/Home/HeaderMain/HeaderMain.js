import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import './HeaderMain.css'
import illu from '../../../images/logos/Frame.png'
const HeaderMain = () => {
    return (
        <Container>
            <Grid spacing={2} container>
                <Grid xs={12} sm={6} md={6} item>
                    <Box>
                    <Typography sx={{ fontWeight: 'bold', fontSize: { sm: '3rem', md: '4rem' } }} variant="h4">Let's Grow Your <br />
                        Brand To The <br />
                        Next Level</Typography>
                    <Typography sx={{fontSize: '1rem', mt:4, mb: 4}} variant="h6">
                        Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Purus commodo ipsum duis <br /> laoreet maecenas. Feugiat
                    </Typography>
                    <button className="global-btn">Hire Us</button>
                    </Box>
                </Grid>
                <Grid xs={12} sm={6} md={6} item>
                    <Box>
                        <img className="header-img" src={illu} alt="" />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default HeaderMain;