import { Avatar, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const ClientFeedback = ({ data }) => {
    return (
        <Grid xs={12} sm={6} md={4} item>
            <Box sx={{border : '1px solid lightgray',height: '220px', p: 5}}>
                <Box sx={{display: 'flex', mb:2}}>
                    <Avatar
                        alt=""
                        src={`data:image/png;base64,${data?.image}`}
                        sx={{ width: 56, height: 56 }}
                    />
                    <Box sx={{ml: 2}}>
                        <Typography variant="h6">{data?.name}</Typography>
                        <Typography variant="subtitle">{data?.position}</Typography>
                    </Box>
                </Box>
                <Typography color="#707070" variant="subtitle">{data?.description}</Typography>
            </Box>
        </Grid>
    );
};

export default ClientFeedback;