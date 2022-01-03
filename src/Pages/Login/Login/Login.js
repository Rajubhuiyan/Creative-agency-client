import { Alert, Avatar, Container, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import googleLogo from '../../../images/google.png';
const Login = () => {
    const {handleGoogleSignIn, authError} = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
   
const handleGoogle = () => {
    handleGoogleSignIn(location, navigate);
}

    return (
        <Container>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Box sx={{ textAlign: 'center', }}>
                    <Box sx={{ border: '1px solid lightgray', height: { md: '420px' }, padding: { xs: 5, sm: 6, md: 10 } }}>
                        <Typography sx={{ mb: 10 }} variant="h4">Login</Typography>
                        <button onClick={handleGoogle} style={{ padding: '8px 30px', cursor: 'pointer' }}>
                            <Stack direction="row"
                                justifyContent="space-between"
                                alignItems="center"
                                spacing={{ xs: 2, sm: 2, md: 2 }}>
                                <Avatar sx={{ width: { xs: 30, sm: 30, md: 38 }, height: { xs: 30, sm: 30, md: 38 } }} src={googleLogo} alt="" />
                                <Typography variant="h6">Continue With Google</Typography>
                            </Stack>
                        </button>
                        {authError && <Alert sx={{mt:3}} severity="error">{authError}</Alert>}
                    </Box>
                </Box>
            </Box>
        </Container >
    );
};

export default Login;