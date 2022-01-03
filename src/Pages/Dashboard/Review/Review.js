import React from 'react';
import { Container, TextField, Box } from '@mui/material';
import useAuth from '../../../Hooks/useAuth';
const Review = () => {
    const { user } = useAuth();
    return (
        <Box>
            <Container>
                <Box >
                    <form>
                        <TextField
                            sx={{ width: { xs: '80%', md: '60%', }, mb: 3, backgroundColor: 'white' }}
                            id="outlined-textarea"
                            label="Your name "
                            placeholder="Your name / company's name"
                            defaultValue={user?.displayName}
                            multiline
                        />
                        <br />
                        <TextField
                            sx={{ width: { xs: '80%', md: '60%' }, mb: 3, backgroundColor: 'white' }}
                            id="outlined-textarea"
                            label="Company’s name, Designation"
                            placeholder="Company’s name, Designation"
                            multiline
                        /><br />
                        <TextField
                            sx={{ width: { xs: '80%', md: '60%' }, mb: 3, backgroundColor: 'white' }}
                            rows={4}
                            id="outlined-textarea"
                            label="Description"
                            placeholder="Description"
                            multiline
                        /><br />
                        <button type="submit" className="global-btn">Submit</button>
                    </form>
                </Box>
            </Container>
        </Box>
    );
};

export default Review;