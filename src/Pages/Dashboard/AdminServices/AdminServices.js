import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
const AdminServices = () => {
    const check = [
        { name: 'Raju Ahmed Bhuiyan', email: 'Raju@gmail.com', service: 'Graphic Design', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ', status: 'pending' }
    ];


    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const [serviceData, setServiceData] = useState([]);
    const [selected, setSelected] = useState('pending');
    return (
        <div>
            <TableContainer sx={{ maxWidth: { xs: '80vw', sm: '90vw', md: '70vw' } }} component={Paper}>
                <Table sx={{ minWidth: 550 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Email ID</TableCell>
                            <TableCell align="right">Service</TableCell>
                            <TableCell align="right">Project Details</TableCell>
                            <TableCell align="right">Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {check.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.email}</TableCell>
                                <TableCell align="right">{row.service}</TableCell>
                                <TableCell align="right">{row.details}</TableCell>
                                <TableCell align="right">


                                    <div>
                                        <Button
                                            id="basic-button"
                                            aria-controls={open ? 'basic-menu' : undefined}
                                            aria-haspopup="true"
                                            aria-expanded={open ? 'true' : undefined}
                                            onClick={handleClick}
                                        >
                                            {row?.status}
                                        </Button>
                                        <Menu
                                            id="basic-menu"
                                            anchorEl={anchorEl}
                                            open={open}
                                            onClose={handleClose}
                                            MenuListProps={{
                                                'aria-labelledby': 'basic-button',
                                            }}
                                        >
                                            <MenuItem onClick={() => {handleClose();setSelected('pending')}}>Pending</MenuItem>
                                            <MenuItem onClick={() => {handleClose();setSelected('done')}}>Done</MenuItem>
                                            <MenuItem onClick={() => {handleClose();setSelected('on going')}}>On Going</MenuItem>
                                        </Menu>
                                    </div>


                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default AdminServices;