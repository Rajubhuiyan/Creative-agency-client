import { Avatar, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './Category.css';
const Category = ({ data }) => {
    return (
        <Grid  xs={12} sm={6} md={4} item>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box className="category-card" sx={{ width: { xs: '360px', md: '370px', }, height: {xs:'340px', md: '340px' }, display: 'flex', justifyContent: 'center', alignItems: 'center', p: 3 }}>
                    <Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3}}>
                            <Avatar
                                alt=""
                                src={`data:image/png;base64,${data?.image}`}
                                sx={{ width: 56, height: 56 }}
                            />
                        </Box>
                        <Box sx={{textAlign: 'center'}}>
                            <Typography variant="h4" sx={{mb:2}}>{data?.title}</Typography>
                            <Typography sx={{pb: 8,pt: 7}} variant="subtitle">{data?.description}</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Grid>
    );
};

export default Category;