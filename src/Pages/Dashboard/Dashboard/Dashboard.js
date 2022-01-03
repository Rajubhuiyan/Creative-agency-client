import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import Loader from '../../Loader/Loader';
import Navbar from '../../Shared/Navbar/Navbar';
import Admin from '../Admin/Admin';
import Customer from '../Customer/Customer';

const Dashboard = () => {
    const { user } = useAuth();
    const [isAdmin, setIsAdmin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch(`http://localhost:5000/isAdmin?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                if (data?.isAdmin) {
                    setIsAdmin(true);
                }
            })
            .catch(err => console.error(err))
            .finally(() => {
                setIsLoading(false);
            })
    }, [user?.email])


    return (
        <div>
            {isLoading ? <Loader /> :
                <>
                    <Navbar />
                    {isAdmin ?
                        <Admin />
                        :
                        <Customer />}
                </>
            }


        </div>
    );
};

export default Dashboard;