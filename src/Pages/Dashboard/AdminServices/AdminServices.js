import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SecondLoader from '../../SecondLoader/SecondLoader';
import StatusChange from './StatusChange';
import { Alert, Box } from '@mui/material';
const AdminServices = () => {



    const [serviceData, setServiceData] = useState([]);

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)



    useEffect(() => {
        fetch('https://creative-agency00.herokuapp.com/getAllOrders')
            .then(res => res.json())
            .then(data => { setServiceData(data) })
            .catch(err => { setError(true); setSuccess(false) })
            .finally(() => { setIsLoading(false) })
    }, []);




    return (
        <div>
            {
                isLoading ? <SecondLoader />
                    :
                    <Box>
                        {error && <Alert severity="error">Something Wrong Try Again</Alert>}
                        {success && <Alert severity="success">Succes</Alert>}
                        <TableContainer sx={{ maxWidth: { xs: '80vw', sm: '90vw', md: '70vw' } }} component={Paper}>

                            <Table sx={{ minWidth: 550 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Name</TableCell>
                                        <TableCell align="right">Email ID</TableCell>
                                        <TableCell align="right">Service</TableCell>
                                        <TableCell align="right">Status</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {serviceData.map((row) => (
                                        <TableRow
                                            key={row?._id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="right">{row?.email?.toUpperCase()}</TableCell>
                                            <TableCell align="right">{row?.product?.title?.toUpperCase()}</TableCell>
                                            <TableCell align="right">
                                                <StatusChange setError={setError} setSuccess={setSuccess} row={row} />
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
            }
        </div>
    );
};

export default AdminServices;