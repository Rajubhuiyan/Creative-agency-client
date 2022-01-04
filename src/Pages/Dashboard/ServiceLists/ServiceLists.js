import {  Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import SecondLoader from '../../SecondLoader/SecondLoader';
import Service from '../Service/Service';


// const services = [
//     {id:1, title: 'Web & Mobile design', description: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.', img: webLogo},
//     {id:2, title: 'Graphic design', description: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.', img: grapicLogo},
//     {id:3, title: 'Web development', description: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.', img: webDevLg},

// ]


const ServiceLists = () => {
    const { user } = useAuth();

    const [services, setServices] = useState([]);
    const [isLoading, setIsLoading] = useState(true)



    useEffect(() => {
        fetch(`https://creative-agency00.herokuapp.com/getOrders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setServices(data);

            })
            .catch(err => console.error(err))
            .finally(() => { setIsLoading(false) })
    }, [user?.email])

    return (
        <div>
            {
                isLoading ?
                    <SecondLoader />
                    :

                    services.length > 0 ?
                        <Grid spacing={2} container>
                            {services.map(service => <Service key={service._id} data={service}></Service>)}
                        </Grid>
                        :
                        <Typography variant="h4">You Didn't Have Any Order</Typography>
                    }
        </div>
    );
};

export default ServiceLists;