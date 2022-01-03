import { Button, Grid } from '@mui/material';
import React, { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ChatIcon from '@mui/icons-material/Chat';
import './Customer.css'
import Review from '../Review/Review';
import Order from '../Order/Order';
import ServiceLists from '../ServiceLists/ServiceLists';
const Customer = () => {
    const [category, setCategory] = useState('order');
    return (
        <div>
            <Grid container>
                <Grid sx={{pl:4}}  md={2} item>
                    <Button className={category === 'order' ? 'order' : ''} onClick={() => setCategory('order')} sx={{mb: 4, color:'black'}}>
                        <ShoppingCartIcon/>
                        Order
                    </Button>
                    <br />
                    <Button className={category === 'service' ? 'service' : ''} onClick={() => setCategory('service')} sx={{mb: 4, color:'black'}}>
                    <ShoppingBasketIcon/>
                        Service List
                    </Button>
                    <br />
                    <Button className={category === 'review' ? 'review' : ''} onClick={() => setCategory('review')} sx={{mb: 4, color:'black'}}>
                        <ChatIcon/>
                        Review
                    </Button>
                </Grid>

                <Grid sx={{backgroundColor: '#f4f7fc', height:'90vh', width:'100vw', pt:5, pl:3}} md={10} item>
                    {category === 'order' && <Order/>}
                    {category === 'service' && <ServiceLists/>}
                    {category === 'review' && <Review/>}
                </Grid>
            </Grid>
        </div>
    );
};

export default Customer;