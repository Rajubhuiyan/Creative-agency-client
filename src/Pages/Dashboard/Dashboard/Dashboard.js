import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, {  useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import Loader from '../../Loader/Loader';

const Dashboard = ({children}) => {
    const {isAdmin} = useAuth();
    const [isLoading, setIsLoading] = useState(false);


    return (
        <div>
            {isLoading ? <Loader /> :
                <>
                    {isAdmin === true ?
                        children
                        :
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
                            <Box>
                                <Typography variant="h2">Unauthorized Access</Typography>
                            </Box>
                        </Box>
                    }
                </>
            }


        </div>
    );
};

export default Dashboard;