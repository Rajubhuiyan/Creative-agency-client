import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';



const StatusChange = ({ row,setSuccess,setError }) => {



    const [selected, setSelected] = useState(null);
    const [selectedId, setSelectedId] = useState('');

    useEffect(() => {
        if (selected !== null) {
            fetch(`https://creative-agency00.herokuapp.com/changeStatus?id=${selectedId}&selected=${selected}`, {
                method: 'PUT'
            })
                .then(res => res.json())
                .then(data => {setSuccess(true); setError(false);})
                .catch(err => {setError(true); setSuccess(false)})
        }


    }, [selected, selectedId, setSuccess, setError])


    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                {row?.status}
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"

            >
                <Button sx={{ mt: 2, mr: 2, ml: 2 }} onClick={() => { handleClose(); setSelected('pending'); setSelectedId(row?._id) }} autoFocus>
                    Pending
                </Button>
                <br />
                <Button sx={{ mt: 2, mr: 2, ml: 2 }} onClick={() => { handleClose(); setSelected('ongoing'); setSelectedId(row?._id) }} autoFocus>
                    On Going
                </Button>
                <br />
                <Button sx={{ mt: 2, mr: 2, ml: 2, mb: 2 }} onClick={() => { handleClose(); setSelected('done'); setSelectedId(row?._id) }} autoFocus>
                    Done
                </Button>
            </Dialog>
        </div>
    );
};

export default StatusChange;