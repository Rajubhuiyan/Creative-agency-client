import { Box, Button, Grid } from '@mui/material';
import React, { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ChatIcon from '@mui/icons-material/Chat';
import './Customer.css'
import Review from '../Review/Review';
import Order from '../Order/Order';
import ServiceLists from '../ServiceLists/ServiceLists';
import Navbar from '../../Shared/Navbar/Navbar';
import { useParams } from 'react-router-dom';
const Customer = () => {
    const { serviceId } = useParams();
    const [category, setCategory] = useState('order');

    return (
        <div>
            <Navbar />
            <Grid container>
                <Grid sx={{ pl: 4 }} md={2} item>
                    <Box sx={{ display: {xs: 'flex', md: 'block', lg:'block'} }}>
                        <Box>
                            {
                                serviceId &&
                                <Button className={category === 'order' ? 'order' : ''} onClick={() => setCategory('order')} sx={{ mb: 4, color: 'black', display: {xs:'flex',sm:'flex', md:'block'}}}>
                                    <ShoppingCartIcon />
                                    Order
                                </Button>

                            }
                            <Button className={category === 'service' ? 'service' : ''} onClick={() => setCategory('service')} sx={{ mb: 4, color: 'black' }}>
                                <ShoppingBasketIcon />
                                Service List
                            </Button>
                            <Button className={category === 'review' ? 'review' : ''} onClick={() => setCategory('review')} sx={{ mb: 4, color: 'black' }}>
                                <ChatIcon />
                                Review
                            </Button>
                        </Box>
                    </Box>
                </Grid>

                <Grid sx={{ backgroundColor: '#f4f7fc', height: '90vh', width: '100vw', pt: 5, pl: 3 }} md={10} item>
                    {serviceId && category === 'order' && <Order />}
                    {category === 'service' && <ServiceLists />}
                    {category === 'review' && <Review />}
                </Grid>
            </Grid>
        </div>
    );
};

export default Customer;