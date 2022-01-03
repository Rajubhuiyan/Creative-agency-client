import { Box, TextField } from '@mui/material';
import React from 'react';

const MakeAdmin = () => {
    return (
        <Box>
            <form onSubmit={''}>
                <TextField
                    sx={{ width: { xs: '70%', md: '60%' }, mb: 3, backgroundColor: 'white' }}
                    id="outlined-textarea"
                    label="Email"
                    multiline
                    required
                />
                <button type="submit" style={{ border: 'none', paddingTop: '20px', paddingBottom: '20px', paddingLeft: '40px', paddingRight: '40px', cursor: 'pointer', backgroundColor: '#009444', color: 'white', borderRadius: '4px' }}>Submit</button>
            </form>
        </Box>
    );
};

export default MakeAdmin;