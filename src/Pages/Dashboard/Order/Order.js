import { Container, TextField, Box, Typography, CircularProgress, Alert } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import SecondLoader from '../../SecondLoader/SecondLoader';

const Order = () => {
    const { user } = useAuth();
    const [service, setService] = useState({});
    const { serviceId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        fetch(`https://creative-agency00.herokuapp.com/service/${serviceId}`)
            .then(res => res.json())
            .then(data => { 
                    setService(data);
                     
                })
            .catch(err => console.error(err))
            .finally(() => {
                setIsLoading(false);
            })
    }, [serviceId]);


    const handleSubmit = (e) => {
        e.preventDefault();



        fetch('https://creative-agency00.herokuapp.com/saveOrder', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ name: name, email: email?.toLowerCase(), loginEmail: user?.email, product: service })
        })
            .then(res => res.json())
            .then(data => { 
                setIsSuccess(true);
            })
            .catch(err => console.error(err))

    }


    return (
        <Box>
            {isLoading ?
                <SecondLoader/>
                :
                <Container>
                    <Box>
                        <form onSubmit={handleSubmit}>
                            <Typography variant="body1">Your name / company's name</Typography>
                            <TextField
                                sx={{ width: { xs: '80%', md: '60%', }, mb: 3, backgroundColor: 'white' }}
                                id="outlined-textarea"
                                multiline
                                required
                                onChange={(e) => setName(e.target.value)}
                            />
                            <br />
                            <Typography variant="body1">Email Address</Typography>
                            <TextField
                                sx={{ width: { xs: '80%', md: '60%' }, mb: 3, backgroundColor: 'white' }}
                                id="outlined-textarea"
                                multiline
                                required
                                onChange={(e) => setEmail(e.target.value)}
                            /><br />
                            <Typography variant="body1">Course</Typography>
                            <TextField
                                sx={{ width: { xs: '80%', md: '60%' }, mb: 3, backgroundColor: 'white' }}
                                id="outlined-textarea"
                                value={service?.title}
                                disabled
                                multiline
                            /><br />
                            <Typography variant="body1">Product Details</Typography>
                            <TextField
                                sx={{ width: { xs: '80%', md: '60%' }, mb: 3, backgroundColor: 'white' }}
                                id="outlined-textarea"
                                placeholder="Project Details"
                                value={service?.description}
                                rows={4}
                                multiline
                                disabled
                            /> <br />
                            <Typography variant="body1">Price</Typography>
                            <TextField
                                sx={{ width: { xs: '80%', md: '30%' }, mb: 3, backgroundColor: 'white' }}
                                id="outlined-textarea"
                                value="$ 599"
                                multiline
                                readOnly
                                disabled
                            />
                            <br />
                            <button style={{ marginBottom: '20px' }} type="submit" className="global-btn">Submit</button>
                        </form>
                        {isSuccess && <Alert severity="success">Success</Alert>}
                    </Box>
                </Container>
            }
        </Box>
    );
};

export default Order;