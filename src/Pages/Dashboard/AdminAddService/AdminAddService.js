import { Alert, Box, TextField } from '@mui/material';
import React, { useState } from 'react';
const AdminAddService = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('');
    const [file, setFile] = useState(null);
    const [success, isSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newInfo = new FormData();
        newInfo.append('title', title);
        newInfo.append('description', description);
        newInfo.append('image', file);

        fetch('http://localhost:5000/saveServices/', {
            method: 'POST',
            body: newInfo
        })
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    isSuccess(true)
                }
            }
            )
    }

    return (
        <Box>
            <form onSubmit={handleSubmit}>
                <TextField
                    sx={{ width: { xs: '70%', md: '40%' }, mb: 3, backgroundColor: 'white' }}
                    id="outlined-textarea"
                    label="Service Title"
                    placeholder="Enter Title"
                    multiline
                    required
                    onChange={(e) => { setTitle(e.target.value) }}
                />
                <input onChange={(e) => { setFile(e.target.files[0]) }} required style={{ paddingLeft: '2%', paddingTop: '2px', paddingBottom: '10px' }} type="file" ></input>
                <br />
                <TextField
                    sx={{ width: { xs: '70%', md: '40%' }, mb: 3, backgroundColor: 'white' }}
                    id="outlined-textarea"
                    label="Description"
                    rows={4}
                    placeholder="Enter Description"
                    multiline
                    required
                    onChange={(e) => setDescription(e.target.value)}
                />
                <br />
                <button type="submit" style={{ border: 'none', paddingTop: '15px', paddingBottom: '15px', paddingLeft: '40px', paddingRight: '40px', cursor: 'pointer', backgroundColor: '#009444', color: 'white', borderRadius: '4px' }}>Submit</button>
                <br/>
                {success && <Alert sx={{mt:4}} severity="success">Service Added successfully</Alert>}
            </form>

        </Box>
    );
};

export default AdminAddService;