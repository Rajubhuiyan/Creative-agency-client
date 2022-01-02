import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import webLogo from '../../../images/icons/service1.png';
import grapicLogo from '../../../images/icons/service2.png';
import webDevLg from '../../../images/icons/service3.png';
import Category from '../Category/Category';


const courses = [
    {id:1, title: 'Web & Mobile design', description: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.', img: webLogo},
    {id:2, title: 'Graphic design', description: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.', img: grapicLogo},
    {id:3, title: 'Web development', description: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.', img: webDevLg},

]
//
const Categories = () => {
    return (
        <Container sx={{mt: 6, mb: 6}}>
            <Box sx={{mb: 5}}>
                <Typography textAlign="center" variant="h6">
                Provide awesome <span style={{color:'red'}}>services</span> 
                </Typography>
            </Box>
            <Grid spacing={{xs: 1,sm:0, md: 2}} container>
                {courses.map(course => <Category key={course.id} data={course}></Category>)}
            </Grid>
            
        </Container>
    );
};

export default Categories;