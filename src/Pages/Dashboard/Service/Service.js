import { Avatar, Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';

const Service = ({data}) => {
    return (
        <Grid sx={{p:3, pb:2}} xs={12} sm={6} md={4} item>
            <Box sx={{backgroundColor: 'white', p:{xs: 4,md: 4}, mr:2}}>
                <Box sx={{display: 'flex',justifyContent: 'space-between', }}>
                    <Avatar src={data?.img}  sx={{ width: 56, height: 56 }}></Avatar>
                    <Button src={data?.img} >Pending</Button>
                    
                </Box>
                <Typography sx={{pt:3}} variant="h6">{data?.title}</Typography>
                <Typography variant="body2">{data?.description}</Typography>
            </Box>
        </Grid>
    );
};

export default Service;