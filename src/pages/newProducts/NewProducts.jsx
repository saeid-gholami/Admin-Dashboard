import React, { useState } from 'react'
import './NewProducts.css'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function NewProducts() {
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState("");
    const [productID, setProductID] = useState(1)

    const addHandler = (event) => {
        event.preventDefault();
        let lastId = localStorage.getItem('productID') ? +localStorage.getItem('productID') : productID;
        let newProductsInfo = {
            title,
            price,
            image: 'images/python.png',
            id: lastId
        };
        if (newProductsInfo.title && newProductsInfo.price) {
            fetch('https://saeid-4edd5-default-rtdb.firebaseio.com/products.json', {
                method: "POST",
                headers: {
                    "Content-Type": "aplication/json"
                },
                body: JSON.stringify(newProductsInfo)
            })
                .then(() => {
                    setOpen(true)
                    setTitle("");
                    setPrice("");
                    localStorage.setItem("productID", lastId + 1)
                })
        } else {
            alert("please fill all field")
        }
    }

    return (
        <div className='newProducts'>
            <div className="newProducts__wrapper">
                <h3 className="newProducts__title">Add New Product</h3>
                <form className="form">
                    <div className="form__item">
                        <label htmlFor="title" className='form__label'>Title</label>
                        <input
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                            type="text"
                            id='title'
                            className='form__input'
                            placeholder='Title' />
                    </div>
                    <div className="form__item">
                        <label htmlFor="Price" className='form__label'>Price</label>
                        <input
                            value={price}
                            onChange={(event) => setPrice(event.target.value)}
                            type="number"
                            id='Price'
                            className='form__input'
                            placeholder='Price' />
                    </div>
                    <button className="submit__btn" onClick={addHandler}>Submit</button>
                </form>
            </div>
            <Dialog
                open={open}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                PaperProps={{
                    style: {
                        backgroundColor: '#333',
                        color: '#fff',
                    },
                }}>
                <DialogTitle id="alert-dialog-title">
                    {"Success Alert"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description" style={{ color: '#fff' }}>
                        User has been added successfully.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained"
                        onClick={() => setOpen(false)}
                        style={{ color: '#fff' }}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
