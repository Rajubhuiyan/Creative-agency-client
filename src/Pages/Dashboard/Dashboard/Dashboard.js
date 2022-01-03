import React, { useState } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Admin from '../Admin/Admin';
import Customer from '../Customer/Customer';

const Dashboard = () => {
    const [isAdmin, setIsAdmin] = useState(false)
    return (
        <div>
            <Navbar />
            {isAdmin ?
                <Admin />
                :
                <Customer />
            }


        </div>
    );
};

export default Dashboard;