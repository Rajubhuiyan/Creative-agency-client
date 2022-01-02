import { Box, Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
    const date = new Date().getFullYear().toString();
    return (
        <Box sx={{ backgroundColor: '#FBD062' }}>
            <Container sx={{ pt: 4, pb: 4 }}>
                <Grid container>
                    <Grid sx={{ mt: 5, }} md={6} item>
                        <Typography sx={{ fontWeight: 'bold', color: '#2D2D2D', mb: 3 }} variant="h4">Let us handle your <br /> project, professionally.</Typography>
                        <Typography variant="caption">With well written codes, we build amazing apps for all <br /> platforms, mobile and web apps in general.</Typography>
                    </Grid>
                    <Grid sx={{ mt: 5, mb: 5 }} md={6} item>
                        <Box>
                            <TextField
                                sx={{ width: '100%', mb: 2 }}
                                id="outlined-textarea"
                                label="Your email address"
                                placeholder="Your email address"
                                multiline
                            />
                            <TextField
                                sx={{ width: '100%', mb: 2 }}
                                id="outlined-textarea"
                                label="Your Name / Company Name"
                                placeholder="Your Name / Company Name"
                                multiline
                            />
                            <TextField
                                sx={{ width: '100%', mb: 2 }}
                                rows={10}
                                id="outlined-textarea"
                                label="Your Massage"
                                placeholder="Your Massage"
                                multiline
                            />
                            <button className="global-btn">Send</button>
                        </Box>
                    </Grid>
                </Grid>
                <Box sx={{ textAlign: 'center', pt: 3 }} >
                    <Typography variant="caption"> {date} All Right Reserved. ©Raju Ahmed Bhuiyan</Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;