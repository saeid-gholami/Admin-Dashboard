import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import "./Users.css"
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function Users() {
    const [users, setUsers] = useState([]);
    const [getData, setGetData] = useState(false);
    const [open, setOpen] = useState(false);
    const [userID, setUserID] = useState(null)

    useEffect(() => {
        fetch('https://saeid-4edd5-default-rtdb.firebaseio.com/users.json')
            .then(response => response.json())
            .then(usersList => {
                usersList ? setUsers(Object.entries(usersList)) : setUsers([]);
            });
    }, [getData]);

    const columns = [
        { field: 'id', headerName: 'ID', width: 15 },
        {
            field: 'user',
            headerName: 'User',
            width: 200,
            renderCell: (params) => {
                return (
                    <Link to='/'>
                        <div className="userlist__user">
                            <img src={params.row.img} className='userlist__img' />
                            {params.row.username}
                        </div>
                    </Link>
                )
            }
        },
        { field: 'email', headerName: 'Email', width: 200 },
        {
            field: 'status',
            headerName: 'Status',
            width: 120,
        },
        {
            field: 'transaction',
            headerName: 'Transaction',
            width: 120,
        },
        {
            field: 'action', headerName: 'Action', width: 120, renderCell: (params) => {
                return (
                    <div className='userlist__action'>
                        <button
                            className='remove_btn'
                            title='Remove'
                            onClick={() => {
                                setUserID(params.row.id);
                                setOpen(true)
                            }}>
                            <DeleteIcon />
                        </button>
                        <Link to={`/user/${params.row.id}`}>
                            <button className='edit_btn' title='Edit'>
                                <EditIcon />
                            </button>
                        </Link>
                    </div>
                )
            }
        }
    ];

    const removeHandler = (id) => {
        let oldUsers = [...users];
        let mainUser = oldUsers.find(user => user[1].id === id);
        fetch(`https://saeid-4edd5-default-rtdb.firebaseio.com/users/${mainUser[0]}.json`, {
            method: 'DELETE'
        }).then(() => {
            setGetData(!getData);
        });
    }

    return (
        <div className='users'>
            <DataGrid
                rows={users.map(([id, user]) => ({ id, ...user }))}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 7,
                        },
                    },
                }}
                pageSizeOptions={[7]}
                disableRowSelectionOnClick
            />
            <Dialog
                open={open}
                aria-describedby="alert-dialog-slide-description"
                aria-labelledby="alert-dialog-title"
                PaperProps={{
                    style: {
                        backgroundColor: '#333',
                        color: '#fff',
                    },
                }}
            >
                <DialogTitle>{"Remove Alert !!!"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description" style={{ color: '#fff' }}>
                        Are you sure you want to remove this user?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={() => setOpen(false)}
                        style={{ color: '#fff' }}
                        variant="contained">
                        Close
                    </Button>
                    <Button
                        onClick={() => { removeHandler(userID); setOpen(false); }}
                        style={{ color: '#fff' }}
                        variant="contained"
                        color='error'>
                        Yes, Remove
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
