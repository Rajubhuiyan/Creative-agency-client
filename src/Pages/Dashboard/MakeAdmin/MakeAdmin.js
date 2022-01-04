import { Box, TextField } from '@mui/material';
import React, { useState } from 'react';
import Alert from '@mui/material/Alert';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        fetch(`https://creative-agency00.herokuapp.com/makeAdmin?email=${email}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data) {
                    setSuccess(true);
                    setError(false);
                }
            })
            .catch(err => {setSuccess(false);console.log(err); setError(true);})
    }

    return (
        <Box>
            <form onSubmit={handleSubmit}>
                <TextField
                    sx={{ width: { xs: '70%', md: '60%' }, mb: 3, backgroundColor: 'white' }}
                    id="outlined-textarea"
                    label="Email"
                    multiline
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" style={{ border: 'none', paddingTop: '20px', paddingBottom: '20px', paddingLeft: '40px', paddingRight: '40px', cursor: 'pointer', backgroundColor: '#009444', color: 'white', borderRadius: '4px' }}>Submit</button>
                {success && <Alert sx={{ mt: 3 }} severity="success">Admin Make Success</Alert>}
                {error && <Alert sx={{ mt: 3 }} severity="error">Try Again</Alert>}
            </form>
        </Box>
    );
};

export default MakeAdmin;