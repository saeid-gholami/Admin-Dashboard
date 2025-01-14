import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import "./Products.css"
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function Users() {
    const [products, setUsers] = useState([]);
    const [getData, setGetData] = useState(false);
    const [open, setOpen] = useState(false);
    const [productID, setProductID] = useState(null);

    useEffect(() => {
        fetch('https://saeid-4edd5-default-rtdb.firebaseio.com/products.json')
            .then(response => response.json())
            .then(productsList => {
                productsList ? setUsers(Object.entries(productsList)) : setUsers([]);
            });
    }, [getData]);

    const columns = [
        { field: 'id', headerName: 'ID', width: 15 },
        {
            field: 'title',
            headerName: 'Product Name',
            width: 200,
            renderCell: (params) => {
                return (
                    <Link to={`/product/${params.row.id}`}>
                        <div className="userlist__user">
                            <img src={params.row.image} className='userlist__img' />
                            {params.row.title}
                        </div>
                    </Link>
                )
            }
        },
        { field: 'price', headerName: 'Price', width: 200 },
        {
            field: 'action', headerName: 'Action', width: 120, renderCell: (params) => {
                return (
                    <div className='userlist__action'>
                        <button
                            className='remove_btn'
                            title='Remove'
                            onClick={() => {
                                setProductID(params.row.id);
                                setOpen(true)
                            }}>
                            <DeleteIcon />
                        </button>
                        <Link to={`/product/${params.row.id}`}>
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
        let oldProduct = [...products];
        let mainroduct = oldProduct.find(product => product[1].id === id);
        fetch(`https://saeid-4edd5-default-rtdb.firebaseio.com/products/${mainroduct[0]}.json`, {
            method: 'DELETE'
        }).then(() => {
            setGetData(!getData);
        });
    }

    return (
        <div className='users'>
            <DataGrid
                rows={products.map(([id, product]) => ({ id, ...product }))}
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
                        Are you sure you want to remove this product?
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
                        onClick={() => { removeHandler(productID); setOpen(false); }}
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
