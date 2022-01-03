import { Container, TextField, Box } from '@mui/material';
import React from 'react';
import useAuth from '../../../Hooks/useAuth';

const Order = () => {
    const { user } = useAuth();

    return (
        <Box>
            <Container>
                <Box >
                    <form>
                        <TextField
                            sx={{ width: { xs: '80%', md: '60%', }, mb: 3, backgroundColor: 'white' }}
                            id="outlined-textarea"
                            label="Your name / company's name"
                            placeholder="Your name / company's name"
                            multiline
                        />
                        <br />
                        <TextField
                            sx={{ width: { xs: '80%', md: '60%' }, mb: 3, backgroundColor: 'white' }}
                            id="outlined-textarea"
                            label="Your email address"
                            placeholder="Your email address"
                            defaultValue={user?.email}
                            multiline
                        /><br />
                        <TextField
                            sx={{ width: { xs: '80%', md: '60%' }, mb: 3, backgroundColor: 'white' }}
                            id="outlined-textarea"
                            label="Course"
                            placeholder="Course"
                            multiline
                        /><br />
                        <TextField
                            sx={{ width: { xs: '80%', md: '60%' }, mb: 3, backgroundColor: 'white' }}
                            id="outlined-textarea"
                            label="Project Details"
                            placeholder="Project Details"
                            rows={4}
                            multiline
                        /> <br />
                        <TextField
                            sx={{ width: { xs: '80%', md: '30%' }, mb: 3, backgroundColor: 'white' }}
                            id="outlined-textarea"
                            label="Price"
                            placeholder="Price"
                            multiline
                        />
                        <br />
                        <button type="submit" className="global-btn">Submit</button>
                    </form>
                </Box>
            </Container>
        </Box>
    );
};

export default Order;