import { Box, CircularProgress, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';


const Categories = () => {
    const [services, setServices] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://creative-agency00.herokuapp.com/getServices')
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