import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import webLogo from '../../../images/icons/service1.png';
import grapicLogo from '../../../images/icons/service2.png';
import webDevLg from '../../../images/icons/service3.png';
import Service from '../Service/Service';


const services = [
    {id:1, title: 'Web & Mobile design', description: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.', img: webLogo},
    {id:2, title: 'Graphic design', description: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.', img: grapicLogo},
    {id:3, title: 'Web development', description: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.', img: webDevLg},

]


const ServiceLists = () => {
    
    return (
        <div>
            <Grid spacing={2} container>
                {services.map(service => <Service data={service}></Service>)}
            </Grid>
        </div>
    );
};

export default ServiceLists;