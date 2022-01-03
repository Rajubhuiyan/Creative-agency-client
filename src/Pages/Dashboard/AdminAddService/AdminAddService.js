import { Box, TextField } from '@mui/material';
import React from 'react';
import { Input } from '@mui/material';
const AdminAddService = () => {
    return (
        <Box>
            <form>
                <TextField
                    sx={{ width: { xs: '70%', md: '40%' }, mb: 3, backgroundColor: 'white' }}
                    id="outlined-textarea"
                    label="Service Title"
                    placeholder="Enter Title"
                    multiline
                    required
                />
                <input required style={{ paddingLeft: '2%', paddingTop: '2px',paddingBottom: '10px'}} type="file" ></input>
                <br />
                <TextField
                    sx={{ width: { xs: '70%', md: '40%' }, mb: 3, backgroundColor: 'white' }}
                    id="outlined-textarea"
                    label="Description"
                    rows={4}
                    placeholder="Enter Description"
                    multiline
                    required
                />
                <br />
                <button type="submit" style={{ border: 'none', paddingTop: '15px', paddingBottom: '15px', paddingLeft: '40px', paddingRight: '40px', cursor: 'pointer', backgroundColor: '#009444', color: 'white', borderRadius: '4px' }}>Submit</button>
            </form>

        </Box>
    );
};

export default AdminAddService;