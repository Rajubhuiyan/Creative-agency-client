import React, { useState } from 'react';
import { Box, Button, Grid } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import './Admin.css'
import AdminServices from '../AdminServices/AdminServices';
import AdminAddService from '../AdminAddService/AdminAddService';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import Navbar from '../../Shared/Navbar/Navbar';
const Admin = () => {
    const [category, setCategory] = useState('service-list');



    return (
        <div>
            <Navbar />
            <Grid container>
                <Grid sx={{ pl: 4 }} md={2} item>
                    <Box sx={{ display: {xs: 'flex', md: 'block'} }}>
                            <Button className={category === 'service-list' ? 'service-list' : ''} onClick={() => setCategory('service-list')} sx={{ mb: 4, color: 'black' }}>
                                <ShoppingBasketIcon />
                                Service list
                            </Button>
                            <br />
                            <Button className={category === 'add-services' ? 'add-services' : ''} onClick={() => setCategory('add-services')} sx={{ mb: 4, color: 'black' }}>
                                <AddIcon />
                                Add Service
                            </Button>
                            <br />
                            <Button className={category === 'make-admin' ? 'make-admin' : ''} onClick={() => setCategory('make-admin')} sx={{ mb: 4, color: 'black' }}>
                                <EmojiPeopleIcon />
                                Make Admin
                            </Button>
                    </Box>
                </Grid>

                <Grid sx={{ backgroundColor: '#f4f7fc', height: '90vh', width: '100vw', pt: 5, pl: 3 }} md={10} item>
                    {category === 'service-list' && <AdminServices />}
                    {category === 'add-services' && <AdminAddService />}
                    {category === 'make-admin' && <MakeAdmin />}
                </Grid>
            </Grid>
        </div>
    );
};

export default Admin;