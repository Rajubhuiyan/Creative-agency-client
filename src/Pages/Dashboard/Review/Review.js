import React, { useState } from 'react';
import { Container, TextField, Box, Alert } from '@mui/material';
import useAuth from '../../../Hooks/useAuth';
const Review = () => {
    const { user } = useAuth();
    const [name, setName] = useState(`${user?.displayName}`);
    const [position, setPositon] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [isSuccess, setSuccess] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        const newInfo = new FormData();
        newInfo.append('name', name);
        newInfo.append('position', position);
        newInfo.append('description', description);
        newInfo.append('email', user?.email);
        newInfo.append('image', image);

        fetch('http://localhost:5000/saveReview', {
            method: 'POST',
            body: newInfo
        })
        .then(res => res.json())
        .then(data => { 
            if (data) {
                setSuccess(true)
            }
        })
        .catch(err => {setSuccess(false)})
    }

    return (
        <Box>
            <Container>
                <Box >
                    <form onSubmit={handleSubmit}>
                        <TextField
                            sx={{ width: { xs: '80%', md: '60%', }, mb: 3, backgroundColor: 'white' }}
                            id="outlined-textarea"
                            label="Your name "
                            placeholder="Your name / company's name"
                            defaultValue={name && name}
                            onChange={(e) => setName(e.target.value)}
                            multiline
                        />
                        <br />
                        <TextField
                            sx={{ width: { xs: '80%', md: '60%' }, mb: 3, backgroundColor: 'white' }}
                            id="outlined-textarea"
                            label="Your Position"
                            placeholder="Your Position"
                            onChange={(e) => setPositon(e.target.value)}
                            multiline
                        /><br />
                        <TextField
                            sx={{ width: { xs: '80%', md: '60%' }, mb: 3, backgroundColor: 'white' }}
                            rows={4}
                            id="outlined-textarea"
                            label="Description"
                            placeholder="Description"
                            onChange={(e) => setDescription(e.target.value)}
                            multiline
                        /><br />
                        <input onChange={(e) => setImage(e.target.files[0])} style={{paddingBottom:"15px"}} type="file"/>
                        <br />
                        <button type="submit" className="global-btn">Submit</button>
                        {isSuccess && <Alert sx={{mt:4}} severity="success">Review Added successfully</Alert>}
                    </form>
                </Box>
            </Container>
        </Box>
    );
};

export default Review;