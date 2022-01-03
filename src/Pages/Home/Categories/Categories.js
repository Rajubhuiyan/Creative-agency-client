import { Box, CircularProgress, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';


// const courses = [
//     {id:1, title: 'Web & Mobile design', description: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.', img: webLogo},
//     {id:2, title: 'Graphic design', description: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.', img: grapicLogo},
//     {id:3, title: 'Web development', description: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.', img: webDevLg},

// ]
//
const Categories = () => {
    const [services, setServices] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/getServices')
            .then(res => res.json())
            .then(data => { data && setServices(data); setIsLoading(false) })
            .catch(err => console.error(err))
    }, [])

    return (
        <>
            {isLoading ? <Box sx={{ height: '30vh', width: '95vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Box>
                    <Box>
                        <CircularProgress />
                    </Box>
                </Box>
            </Box> :
                <Container sx={{ mt: 6, mb: 6 }}>
                    <Box sx={{ mb: 5 }}>
                        <Typography textAlign="center" variant="h6">
                            Provide awesome <span style={{ color: 'red' }}>services</span>
                        </Typography>
                    </Box>
                    <Grid spacing={{ xs: 1, sm: 0, md: 2 }} container>
                        {services.map(course => <Category key={course._id} data={course}></Category>)}
                    </Grid>
                </Container>
            }
        </>
    );
};

export default Categories;